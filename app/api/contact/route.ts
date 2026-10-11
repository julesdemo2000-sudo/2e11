import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
  message: string;
};

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.firstName === "string" &&
    d.firstName.trim().length > 0 &&
    typeof d.lastName === "string" &&
    d.lastName.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.reason === "string" &&
    typeof d.message === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;

  // TODO: set RESEND_API_KEY and CONTACT_TO in the environment to send real
  // emails. Until then the message is accepted and logged so the form works
  // end-to-end in every environment, but nothing is actually delivered.
  if (!apiKey || !to) {
    console.warn(
      "[api/contact] RESEND_API_KEY or CONTACT_TO not set — message accepted but not sent.",
      body
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "2e11 <hello@2e11.com>",
        to: [to],
        reply_to: body.email,
        subject: `2e11 contact: ${body.reason}`,
        text: [
          `From: ${body.firstName} ${body.lastName} <${body.email}>`,
          `Reason: ${body.reason}`,
          "",
          body.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[api/contact] Resend error", res.status, detail);
      return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[api/contact] unexpected error", err);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
