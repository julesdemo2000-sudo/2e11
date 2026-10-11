"use client";

import { useState } from "react";
import Image from "next/image";
import { workItems } from "@/content";

export function WorkCarousel() {
  const [index, setIndex] = useState(0);
  const n = workItems.length;
  const work = workItems[index];
  const pos = `${String(index + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;

  const prev = () => setIndex((i) => (i + n - 1) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  return (
    <section
      id="work"
      className="flex flex-col gap-8 bg-light-bg text-light-text"
      style={{ padding: "clamp(48px,7vw,112px) clamp(16px,3vw,40px)" }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2
          className="m-0 font-archivo font-black"
          style={{ fontSize: "clamp(36px,5vw,80px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
        >
          Our work
        </h2>
        <a href="#work" className="text-[15px] font-bold text-black">
          See all
        </a>
      </div>

      <div
        className="grid items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(24px,4vw,56px)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[20px] bg-light-fallback"
          style={{ aspectRatio: "16 / 10" }}
        >
          {work.image ? (
            <Image
              src={work.image}
              alt={work.imageAlt}
              fill
              sizes="(min-width: 860px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#222] text-sm text-white/60">
              Image coming soon
            </div>
          )}
        </div>

        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border-[1.5px] border-black px-3 py-[5px] text-xs font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className="m-0 font-archivo font-extrabold"
            style={{ fontSize: "clamp(26px,2.6vw,40px)", lineHeight: 1.05 }}
          >
            {work.title}
          </h3>

          <p className="m-0 text-[17px] leading-[1.55] font-normal text-light-body text-pretty">
            {work.body}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-black px-5 py-[13px] text-sm font-extrabold text-white no-underline transition-colors hover:bg-[#333]"
            >
              See case study
            </a>
            <span className="ml-auto text-[13px] font-bold tabular-nums">{pos}</span>
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-12 w-12 rounded-full border-[1.5px] border-black bg-white text-lg transition-colors hover:bg-black hover:text-white"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="h-12 w-12 rounded-full border-[1.5px] border-black bg-white text-lg transition-colors hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
