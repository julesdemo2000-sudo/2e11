import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Journal — 2e11",
  description: "Notes from 2e11.",
};

export default function JournalPage() {
  return (
    <PageShell>
      <section className="py-16">
        <h1 className="display m-0" style={{ fontSize: "var(--display-l)" }}>
          Journal.
        </h1>
        <p className="label mt-6 max-w-[34em] normal-case tracking-normal">
          Nothing published yet. Check back soon.
        </p>
      </section>
    </PageShell>
  );
}
