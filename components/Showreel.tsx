"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reelSlides } from "@/content";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const INTERVAL_MS = 4500;

export function Showreel() {
  const [slide, setSlide] = useState(0);
  // The first slide loads eagerly for LCP; the rest are only mounted once
  // the page has settled so they don't compete with it for bandwidth. They
  // have ~4.5s of headroom before the first crossfade needs them.
  const [restMounted, setRestMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setRestMounted(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % reelSlides.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, [reducedMotion]);

  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative bg-hero-fallback"
      style={{ height: "min(calc(100vh - 62px), 900px)", minHeight: 560 }}
    >
      {reelSlides.map((r, i) => {
        if (i > 0 && !restMounted) return null;
        return (
          <div
            key={r.id}
            className="absolute inset-0 transition-opacity duration-[900ms]"
            style={{
              opacity: i === slide ? 1 : 0,
              pointerEvents: i === slide ? "auto" : "none",
              filter: "grayscale(1)",
            }}
            aria-hidden={i !== slide}
          >
            <Image
              src={r.src}
              alt={r.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        );
      })}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,.85) 100%)",
        }}
      />

      <div
        className="absolute flex flex-wrap items-end gap-6 pointer-events-none"
        style={{
          left: "clamp(16px,3vw,40px)",
          right: "clamp(16px,3vw,40px)",
          bottom: "clamp(16px,3vw,40px)",
        }}
      >
        <h1
          className="m-0 mr-auto font-archivo font-black text-balance"
          style={{
            fontSize: "clamp(44px, 8vw, 140px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            maxWidth: "11em",
          }}
        >
          Turn it up to eleven.
        </h1>
      </div>
    </section>
  );
}
