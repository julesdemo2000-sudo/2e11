"use client";

import { useReveal } from "@/lib/use-reveal";

export function About() {
  const { ref: headingRef, style: headingStyle } = useReveal<HTMLHeadingElement>(0);
  const { ref: bodyRef, style: bodyStyle } = useReveal<HTMLParagraphElement>(1);

  return (
    <section id="about" style={{ padding: "0 clamp(16px,3vw,40px) clamp(48px,7vw,112px)" }}>
      <div
        className="grid items-center rounded-[24px] bg-surface"
        style={{
          padding: "clamp(28px,4vw,64px)",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(24px,4vw,64px)",
        }}
      >
        <div
          className="font-archivo font-black"
          style={{ fontSize: "clamp(120px,16vw,260px)", lineHeight: 0.8, color: "var(--acc)" }}
        >
          +1
        </div>
        <div className="flex flex-col gap-4">
          <h2
            ref={headingRef}
            style={{
              ...headingStyle,
              margin: 0,
              fontFamily: "var(--font-archivo)",
              fontWeight: 800,
              fontSize: "clamp(26px,2.6vw,40px)",
              lineHeight: 1.08,
              textWrap: "balance",
            }}
          >
            Ten is the maximum. That&rsquo;s why we don&rsquo;t stop there.
          </h2>
          <p
            ref={bodyRef}
            style={{
              ...bodyStyle,
              margin: 0,
              fontSize: 17,
              lineHeight: 1.55,
              fontWeight: 300,
              color: "var(--text-secondary)",
              textWrap: "pretty",
            }}
          >
            A small holding company for ideas we can&rsquo;t leave alone, from clarity tools to
            sofa gigs to a label in the making.
          </p>
        </div>
      </div>
    </section>
  );
}
