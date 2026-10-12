import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sound — 2e11",
  description: "Music, sound and production from 2e11.",
};

const releases = [
  { side: "A1", title: "[Release title]", role: "[Production / mix / score]", year: "[Year]" },
  { side: "A2", title: "[Release title]", role: "[Production / mix / score]", year: "[Year]" },
  { side: "B1", title: "[Release title]", role: "[Production / mix / score]", year: "[Year]" },
];

export default function SoundPage() {
  return (
    <PageShell>
      <section className="py-16">
        <h1 className="display m-0" style={{ fontSize: "var(--display-l)" }}>
          Sound.
        </h1>
        <p className="label mt-6 max-w-[34em] normal-case tracking-normal">
          Music & sound, production & post. A label in the making, scores for other people&rsquo;s
          work, and the odd record of our own.
        </p>

        <div className="mt-12 border-t-[1.5px] border-ink">
          {releases.map((r) => (
            <div
              key={r.side}
              className="label grid items-center gap-4 border-b-[1.5px] border-ink py-5"
              style={{ gridTemplateColumns: "60px minmax(0,1fr) auto auto" }}
            >
              <span className="font-semibold text-signal-text">{r.side}</span>
              <span className="display text-xl normal-case tracking-normal">{r.title}</span>
              <span className="text-muted-on-paper">{r.role}</span>
              <span className="text-muted-on-paper">{r.year}</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
