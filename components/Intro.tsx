"use client";

import { useReveal } from "@/lib/use-reveal";

export function Intro() {
  const { ref: headingRef, style: headingStyle } = useReveal<HTMLHeadingElement>(0);
  const { ref: bodyRef, style: bodyStyle } = useReveal<HTMLDivElement>(1);

  return (
    <section
      className="grid"
      style={{
        padding: "clamp(48px,7vw,112px) clamp(16px,3vw,40px)",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
        gap: "clamp(32px,5vw,80px)",
      }}
    >
      <h2
        ref={headingRef}
        style={{
          ...headingStyle,
          margin: 0,
          fontFamily: "var(--font-archivo)",
          fontWeight: 800,
          fontSize: "clamp(30px,3.6vw,56px)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          textWrap: "balance",
        }}
      >
        A house of media, music and digital brands.
      </h2>
      <div
        ref={bodyRef}
        style={{
          ...bodyStyle,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          fontSize: "clamp(17px,1.4vw,20px)",
          lineHeight: 1.5,
          fontWeight: 300,
        }}
      >
        <p style={{ margin: 0, textWrap: "pretty" }}>
          2e11 (said &ldquo;to eleven&rdquo;) starts brands, backs them and lends them shared
          muscle: product, media and content.
        </p>
        <p style={{ margin: 0, textWrap: "pretty" }}>
          Each one gets the same brief. Find whatever counts as maximum in its world, then add
          one.
        </p>
        <a
          href="#contact"
          className="mt-2 inline-flex self-start items-center gap-4 rounded-full px-[22px] py-3.5 text-[15px] font-extrabold text-black no-underline transition-colors hover:bg-white"
          style={{ background: "var(--acc)" }}
        >
          Get in touch <span>→</span>
        </a>
      </div>
    </section>
  );
}
