"use client";

import { useEffect, useRef, useState } from "react";
import { volumeType } from "@/content";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const SECTION_HEIGHT_VH = 200;

function paramsFor(level: number) {
  const t = level / 11;
  const max = level === 11;
  const weight = Math.round(100 + t * 800);
  const stretch = Math.round(125 - t * 63);
  const fontSize = Math.round(40 + t * 108); // px, scaled down from the 1600px design canvas
  const bg = max ? "#111111" : "#ECE7DC";
  const fg = max ? "#FFFFFF" : "#111111";
  const accent = level >= 10 ? "#D40000" : level >= 5 ? "#111111" : "#8A877F";
  return { weight, stretch, fontSize, bg, fg, accent };
}

// A real volume knob sweeps ~270deg, 0 at lower-left to 11 at lower-right.
const DIAL_MIN_DEG = -135;
const DIAL_SWEEP_DEG = 270;

// Rounded to a fixed precision so server and client render the exact same
// string — raw Math.sin/cos output can differ in the last float digit
// between environments, which React treats as a hydration mismatch.
function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function tickPoint(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: round(cx + r * Math.sin(rad)), y: round(cy - r * Math.cos(rad)) };
}

function VolumeDial({
  level,
  fg,
  accent,
  reducedMotion,
}: {
  level: number;
  fg: string;
  accent: string;
  reducedMotion: boolean;
}) {
  const angle = round(DIAL_MIN_DEG + (level / 11) * DIAL_SWEEP_DEG);
  const dashOn = round((level / 11) * (DIAL_SWEEP_DEG / 360) * 2 * Math.PI * 46);
  const dashTotal = round(2 * Math.PI * 46);
  const cx = 60;
  const cy = 60;
  const dialId = "volume-dial-progress";

  return (
    <div
      className="relative aspect-square w-full shrink-0"
      style={{ maxWidth: "clamp(100px, 11vw, 168px)" }}
      role="img"
      aria-label={`Volume dial at ${level} of 11`}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <circle cx={cx} cy={cy} r="46" fill="none" stroke={fg} strokeOpacity="0.25" strokeWidth="1.5" />

        <circle
          id={dialId}
          cx={cx}
          cy={cy}
          r="46"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${dashOn} ${dashTotal}`}
          transform={`rotate(${DIAL_MIN_DEG - 90} ${cx} ${cy})`}
          className={reducedMotion ? "" : "transition-[stroke-dasharray] duration-300"}
        />

        {Array.from({ length: 12 }, (_, n) => {
          const deg = DIAL_MIN_DEG + (n / 11) * DIAL_SWEEP_DEG;
          const outer = tickPoint(cx, cy, 53, deg);
          const inner = tickPoint(cx, cy, n === level ? 44 : 47, deg);
          return (
            <line
              key={n}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={n === level ? accent : fg}
              strokeOpacity={n === level ? 1 : 0.4}
              strokeWidth={n === level ? 2.5 : 1.5}
              strokeLinecap="round"
            />
          );
        })}

        <circle cx={cx} cy={cy} r="30" fill="none" stroke={fg} strokeOpacity="0.4" strokeWidth="1.5" />

        <g
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: `${cx}px ${cy}px`,
            transition: reducedMotion ? undefined : "transform 300ms ease-out",
          }}
        >
          <line x1={cx} y1={cy} x2={cx} y2={cy - 24} stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="4.5" fill={accent} />
        </g>
      </svg>
    </div>
  );
}

export function VolumeType() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [level, setLevel] = useState(11);
  const pinnedRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const compute = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0;
      setLevel(Math.round(progress * 11));
      pinnedRef.current = null;
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [reducedMotion]);

  const pick = (n: number) => {
    const el = sectionRef.current;
    if (!el) return;
    if (reducedMotion) {
      setLevel(n);
      return;
    }
    const rect = el.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const targetScroll = window.scrollY + rect.top + scrollable * (n / 11);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const { weight, stretch, fontSize, bg, fg, accent } = paramsFor(reducedMotion ? 11 : level);

  const body = (
    <div
      className="flex h-full flex-col gap-5 px-page py-10 transition-colors duration-300 motion-reduce:transition-none"
      style={{ background: bg, color: fg }}
    >
      <div
        className="label flex justify-between border-b-[1.5px] pb-3.5"
        style={{ borderColor: fg }}
      >
        <span>{volumeType.label}</span>
        <span className="tabular-nums">
          WGHT {weight} / WDTH {stretch} / VOL {reducedMotion ? 11 : level}
        </span>
      </div>

      <div className="flex flex-1 flex-wrap items-center gap-8">
        <div className="min-w-0 flex-1 uppercase" style={{ lineHeight: 0.86 }}>
          {volumeType.lines.map((line, i) => (
            <div
              key={line}
              className="transition-all duration-300 motion-reduce:transition-none"
              style={{
                fontFamily: "var(--font-archivo), Archivo, sans-serif",
                fontWeight: weight,
                fontStretch: `${stretch}%`,
                fontSize: `clamp(32px, ${fontSize / 10}vw, ${fontSize * 3}px)`,
                letterSpacing: "-0.01em",
                color: i === volumeType.lines.length - 1 ? accent : fg,
              }}
            >
              {i === volumeType.lines.length - 1 ? (
                <>
                  {line.replace(".", "")}
                  <span style={{ color: fg }}>.</span>
                </>
              ) : (
                line
              )}
            </div>
          ))}
        </div>

        <VolumeDial level={reducedMotion ? 11 : level} fg={fg} accent={accent} reducedMotion={reducedMotion} />
      </div>

      <div className="grid grid-cols-6 gap-0 border-t-[1.5px] sm:grid-cols-12" style={{ borderColor: fg }}>
        {Array.from({ length: 12 }, (_, n) => {
          const sel = n === (reducedMotion ? 11 : level);
          return (
            <button
              key={n}
              type="button"
              onClick={() => pick(n)}
              aria-label={`Volume ${n}`}
              aria-pressed={sel}
              className="flex h-[60px] flex-col items-center justify-end gap-2 border-r pb-3 label font-semibold transition-colors"
              style={{
                borderColor: bg === "#111111" ? "#333333" : "#CFC9BC",
                background: sel ? "#D40000" : "transparent",
                color: sel ? "#111111" : fg,
              }}
            >
              <span
                className="block w-0.5"
                style={{ height: 6 + n * 2, background: sel ? "#111111" : n === 11 ? "#D40000" : fg }}
              />
              {n}
            </button>
          );
        })}
      </div>

      <div className="label flex flex-wrap justify-between gap-2">
        <span>{volumeType.helper}</span>
        <span>{volumeType.notes[reducedMotion ? 11 : level]}</span>
      </div>
    </div>
  );

  if (reducedMotion) {
    return <section aria-label={volumeType.label}>{body}</section>;
  }

  return (
    <section ref={sectionRef} aria-label={volumeType.label} style={{ height: `${SECTION_HEIGHT_VH}vh` }}>
      <div className="sticky top-0 h-screen">{body}</div>
    </section>
  );
}
