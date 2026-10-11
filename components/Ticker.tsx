"use client";

import { useEffect, useRef } from "react";
import { useVolume } from "@/lib/volume-context";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { marqueeWords } from "@/content";

export function Ticker() {
  const { vol } = useVolume();
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef(0);
  const volRef = useRef(vol);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    volRef.current = vol;
  }, [vol]);

  useEffect(() => {
    if (reducedMotion) return;

    const tick = () => {
      const t = trackRef.current;
      if (t) {
        xRef.current -= 0.35 + volRef.current * 0.18;
        const half = t.scrollWidth / 2;
        if (half && -xRef.current >= half) xRef.current += half;
        t.style.transform = `translate3d(${xRef.current}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  const words = [...marqueeWords, ...marqueeWords];

  return (
    <section aria-label="Ticker" className="overflow-hidden text-black" style={{ background: "var(--acc)" }}>
      <div ref={trackRef} className="flex w-max" style={{ willChange: "transform" }}>
        {words.map((word, i) => (
          <div
            key={`${word}-${i}`}
            className="flex items-center gap-7 whitespace-nowrap font-archivo font-black"
            style={{
              padding: "16px 0 16px 28px",
              fontSize: "clamp(28px,3.4vw,52px)",
              lineHeight: 1,
            }}
          >
            {word}
            <span className="h-3.5 w-3.5 flex-none rounded-full bg-black" />
          </div>
        ))}
      </div>
    </section>
  );
}
