"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { hero } from "@/content";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="flex flex-wrap gap-8 pt-12">
      <div className="flex min-w-0 flex-[1_1_560px] flex-col justify-between gap-12">
        <div>
          <div className="label mb-3 text-muted-on-paper">{hero.eyebrow}</div>
          <h1 className="display m-0" style={{ fontSize: "var(--display-xl)" }}>
          {hero.h1Lines.map((line, i) => (
            <span
              key={line}
              className="block overflow-hidden"
              style={{ lineHeight: "var(--display-leading)" }}
            >
              <span
                className="block transition-transform duration-700 ease-out motion-reduce:transition-none"
                style={{
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transitionDelay: `${i * 110}ms`,
                  color: i === hero.h1Lines.length - 1 ? undefined : undefined,
                }}
              >
                {i === hero.h1Lines.length - 1 ? (
                  <span className="text-signal">
                    {line.replace(".", "")}
                    <span className="text-ink">.</span>
                  </span>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
          </h1>
        </div>

        <div className="flex flex-wrap items-end gap-10">
          <div className="max-w-[300px] flex-[1_1_240px]">
            <div className="display flex items-center gap-3 text-2xl">
              {hero.aboutHeading} <span className="inline-block h-0.5 w-[22px] bg-ink" />
            </div>
            {hero.aboutParagraphs.map((p) => (
              <p key={p} className="label mt-3 whitespace-pre-line normal-case tracking-normal">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-[1_1_220px] items-center gap-4 border-t-[1.5px] border-ink pt-[18px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#111111"
              strokeWidth="1.5"
              aria-hidden
              className="shrink-0"
            >
              <circle cx="24" cy="24" r="21" />
              <ellipse cx="24" cy="24" rx="9" ry="21" />
              <path d="M3 24h42M7 13h34M7 35h34" />
            </svg>
            <div className="label whitespace-pre-line normal-case tracking-normal text-[11px]">
              {hero.globeCaption}
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[520px] min-w-0 overflow-hidden flex-[1_1_480px] md:h-[760px]">
        <div
          aria-hidden
          className="display pointer-events-none absolute select-none transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{
            right: "-12px",
            top: "-40px",
            fontSize: "clamp(220px, 38vw, 720px)",
            lineHeight: 0.8,
            color: "#D40000",
            letterSpacing: "-0.04em",
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            opacity: loaded ? 1 : 0,
          }}
        >
          11
        </div>

        <svg width="0" height="0" aria-hidden className="absolute">
          <filter id="hero-sharpen">
            <feConvolveMatrix
              order="3"
              kernelMatrix="0 -0.5 0 -0.5 3 -0.5 0 -0.5 0"
              divisor="1"
              edgeMode="duplicate"
              preserveAlpha="true"
            />
          </filter>
        </svg>

        <div
          className="absolute inset-x-0 bottom-0 flex h-[70%] justify-center transition-transform duration-700 ease-out motion-reduce:transition-none md:h-[700px]"
          style={{ transform: `translateY(${loaded ? 0 : 40}px)` }}
        >
          <div className="relative h-full" style={{ aspectRatio: "969 / 1259" }}>
            <Image
              src="/images/brand/founder-hero-studio-cutout.png"
              alt={hero.founderAlt}
              fill
              priority
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-contain object-bottom"
              style={{ filter: "grayscale(1) contrast(1.1) url(#hero-sharpen)" }}
            />
          </div>
        </div>

        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#111111"
          strokeWidth="1.5"
          aria-hidden
          className="absolute top-[150px] right-[2%] hidden md:block"
        >
          <circle cx="32" cy="32" r="14" />
          <circle cx="32" cy="32" r="5" />
          <path d="M32 0v64M0 32h64" />
        </svg>

        <div className="label absolute top-[520px] right-0 hidden bg-ink px-[22px] py-[18px] leading-[1.5] text-white md:block">
          {hero.nameTag.name}
          <br />
          {hero.nameTag.role}
          <br />
          <span className="text-signal">{hero.nameTag.vol}</span>
        </div>
      </div>
    </section>
  );
}
