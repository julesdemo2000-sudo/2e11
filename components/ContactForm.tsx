"use client";

import { useState, type FormEvent } from "react";
import { contactBudgetOptions } from "@/content";

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
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      making: String(data.get("making") ?? ""),
      budget: String(data.get("budget") ?? ""),
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
      <div className="flex flex-col gap-3">
        <div className="display text-[40px]">Loud and clear.</div>
        <p className="label m-0 normal-case tracking-normal">
          Thanks — we&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "border-[1.5px] border-ink bg-paper px-4 py-3.5 label normal-case tracking-normal disabled:opacity-60";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className="label flex flex-col gap-2">
        Name
        <input name="name" required disabled={status === "submitting"} className={inputClass} />
      </label>
      <label className="label flex flex-col gap-2">
        Email
        <input
          type="email"
          name="email"
          required
          disabled={status === "submitting"}
          className={inputClass}
        />
      </label>
      <label className="label flex flex-col gap-2">
        What you&rsquo;re making
        <textarea name="making" rows={4} required disabled={status === "submitting"} className={`${inputClass} resize-y`} />
      </label>
      <label className="label flex flex-col gap-2">
        Budget
        <select name="budget" disabled={status === "submitting"} className={inputClass} defaultValue={contactBudgetOptions[0]}>
          {contactBudgetOptions.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>

      {error ? <p className="label m-0 text-signal-text">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start bg-ink px-[22px] py-4 label font-semibold text-white transition-colors hover:bg-signal hover:text-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
