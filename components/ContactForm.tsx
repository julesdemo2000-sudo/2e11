"use client";

import { useState, type FormEvent } from "react";
import { contactReasons } from "@/content";

type Status = "idle" | "submitting" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      reason: String(data.get("reason") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setSent(true);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col gap-2.5 self-center">
        <span className="font-archivo text-[40px] font-black">Loud and clear.</span>
        <span className="text-[17px] text-light-body">Thanks. We&rsquo;ll be in touch shortly.</span>
      </div>
    );
  }

  const inputClass =
    "rounded-xl border-[1.5px] border-black bg-white p-3.5 text-black disabled:opacity-60";

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3.5"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))" }}
    >
      <label className="flex flex-col gap-1.5 text-[13px] font-bold">
        First name
        <input name="firstName" required disabled={status === "submitting"} className={inputClass} />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-bold">
        Last name
        <input name="lastName" required disabled={status === "submitting"} className={inputClass} />
      </label>
      <label className="col-span-full flex flex-col gap-1.5 text-[13px] font-bold">
        Email
        <input
          type="email"
          name="email"
          required
          disabled={status === "submitting"}
          className={inputClass}
        />
      </label>
      <label className="col-span-full flex flex-col gap-1.5 text-[13px] font-bold">
        I&rsquo;m getting in touch about
        <select name="reason" disabled={status === "submitting"} className={inputClass} defaultValue={contactReasons[0]}>
          {contactReasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </label>
      <label className="col-span-full flex flex-col gap-1.5 text-[13px] font-bold">
        Message
        <textarea
          name="message"
          rows={4}
          disabled={status === "submitting"}
          className={`${inputClass} resize-y`}
        />
      </label>

      {error ? (
        <p className="col-span-full m-0 text-sm font-bold text-red-600">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="col-span-full justify-self-start rounded-full bg-black px-[26px] py-[15px] text-[15px] font-extrabold text-white transition-colors hover:bg-acc hover:text-black disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
