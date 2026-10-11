"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the design reference's [data-reveal] behaviour: fades + rises an
 * element 24px when it scrolls into view, once, via IntersectionObserver.
 */
export function useReveal<T extends HTMLElement>(index = 0) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delay = (index % 4) * 0.08;

  return {
    ref,
    style: {
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(24px)",
      transition: `opacity .7s ${delay}s, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}s`,
    } as React.CSSProperties,
  };
}
