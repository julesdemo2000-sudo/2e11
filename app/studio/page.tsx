import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { elevenRule, hero } from "@/content";

export const metadata: Metadata = {
  title: "Studio — 2e11",
  description: "About 2e11: a creative studio that builds its own products, makes media and writes music.",
};

export default function StudioPage() {
  return (
    <PageShell>
      <section className="py-16">
        <h1 className="display m-0" style={{ fontSize: "var(--display-l)" }}>
          Studio.
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden border-[1.5px] border-ink" style={{ aspectRatio: "4 / 5" }}>
            <Image
              src="/images/brand/founder-portrait.webp"
              alt="The 2e11 founder, full-frame black and white portrait"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative min-h-[420px]">
            <div
              aria-hidden
              className="display pointer-events-none absolute top-0 right-0 select-none text-signal"
              style={{ fontSize: "clamp(140px, 22vw, 320px)", lineHeight: 0.8, letterSpacing: "-0.03em" }}
            >
              11
            </div>
            <div className="absolute bottom-0 left-1/2 h-full w-full max-w-[90%] -translate-x-1/2">
              <Image
                src="/images/brand/founder-vest-cutout.png"
                alt="The 2e11 founder, standing, looking down, moody black and white cut-out"
                fill
                sizes="45vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t-[1.5px] border-ink pt-12 md:grid-cols-2">
          <div>
            <div className="display text-[48px] leading-none">About</div>
            {hero.aboutParagraphs.map((p) => (
              <p key={p} className="label mt-4 whitespace-pre-line normal-case tracking-normal">
                {p}
              </p>
            ))}
          </div>
          <div>
            <div className="display text-[48px] leading-[0.95]">
              {elevenRule.heading[0]}
              <br />
              {elevenRule.heading[1]}
            </div>
            {elevenRule.paragraphs.map((p) => (
              <p key={p} className="label mt-4 whitespace-pre-line normal-case tracking-normal">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t-[1.5px] border-ink pt-12">
          <div className="relative overflow-hidden border-[1.5px] border-ink" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="/images/brand/founder-studio.webp"
              alt="The 2e11 founder in the studio with a drum kit, black and white"
              fill
              sizes="100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
