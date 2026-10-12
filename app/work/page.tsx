import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — 2e11",
  description: "Selected work from 2e11: products, brand, media and sound.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <section className="py-16">
        <h1 className="display m-0" style={{ fontSize: "var(--display-l)" }}>
          Work.
        </h1>
        <WorkGrid />
      </section>
    </PageShell>
  );
}
