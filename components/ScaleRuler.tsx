"use client";

import { scaleCaption } from "@/content";
import { usePageScrollProgress } from "@/lib/use-page-scroll-progress";

const TICKS = Array.from({ length: 12 }, (_, n) => {
  const top = n === 11;
  return {
    n,
    w: top ? 6 : 2,
    h: top ? 34 : n === 10 ? 24 : 14,
    c: top ? "#D40000" : "#111111",
    lc: top ? "#A30000" : "#111111",
    fw: top ? 600 : 400,
  };
});

export function ScaleRuler() {
  const progress = usePageScrollProgress();

  return (
    <div className="mt-10 border-t-[1.5px] border-ink pt-[22px] pb-4">
      <div className="relative flex h-[34px] items-end justify-between">
        {TICKS.map((t) => (
          <div key={t.n} className="flex flex-col items-center gap-1.5">
            <div style={{ width: t.w, height: t.h, background: t.c }} />
          </div>
        ))}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-signal transition-[left] duration-150 ease-out"
          style={{ left: `${progress * 100}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between label">
        {TICKS.map((t) => (
          <span key={t.n} style={{ color: t.lc, fontWeight: t.fw }}>
            {t.n}
          </span>
        ))}
      </div>
      <div className="mt-3.5 flex flex-wrap justify-between gap-3 label">
        <span>{scaleCaption.left}</span>
        <span>{scaleCaption.right}</span>
      </div>
    </div>
  );
}
