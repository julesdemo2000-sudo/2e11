"use client";

import { useEffect, useRef } from "react";
import { useVolume } from "@/lib/volume-context";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { WAVE_BAR_COUNT as N, WAVE_PEAK_INDEX as PK } from "@/content";

function makeSeeds(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const r = Math.sin(i * 12.9898) * 43758.5453;
    return r - Math.floor(r);
  });
}

export function Waveform() {
  const { vol } = useVolume();
  const reducedMotion = useReducedMotion();
  const waveRef = useRef<HTMLDivElement | null>(null);
  const seedsRef = useRef<number[]>(makeSeeds(N));
  const ampRef = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const volRef = useRef(vol);
  const reducedRef = useRef(reducedMotion);

  useEffect(() => {
    volRef.current = vol;
  }, [vol]);

  useEffect(() => {
    reducedRef.current = reducedMotion;
  }, [reducedMotion]);

  useEffect(() => {
    const tick = (now: number) => {
      const v = volRef.current;
      const s = now / 1000;
      const live = !reducedRef.current;

      const target = v / 10;
      ampRef.current = ampRef.current == null ? target : ampRef.current + (target - ampRef.current) * 0.1;
      const amp = ampRef.current;

      const w = waveRef.current;
      if (w) {
        const kids = w.children;
        for (let i = 0; i < kids.length; i++) {
          const env = Math.pow(Math.sin((Math.PI * i) / (N - 1)), 0.6);
          const r = seedsRef.current[i];
          const wob = live
            ? 0.5 + 0.5 * Math.sin(s * (1.8 + r * 4) + r * 40) * Math.sin(s * 1.2 + i * 0.25)
            : 0.5;
          let h = 0.04 + env * (0.3 + r * 0.4 + wob * 0.3) * (0.1 + 0.9 * amp);
          if (i === PK) h = 0.06 + (v >= 11 ? 1 : 0.85 * amp);
          (kids[i] as HTMLElement).style.height = `${Math.min(100, Math.max(3, h * 100)).toFixed(1)}%`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={waveRef}
      aria-hidden
      className="flex min-w-0 items-center"
      style={{ flex: "1 1 320px", gap: "clamp(2px, 0.35vw, 5px)", height: 190 }}
    >
      {Array.from({ length: N }, (_, i) => (
        <span
          key={i}
          className="rounded-sm"
          style={{
            flex: 1,
            height: "20%",
            background: i === PK ? "var(--acc)" : "#fff",
          }}
        />
      ))}
    </div>
  );
}
