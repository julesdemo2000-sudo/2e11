"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks how far a section has scrolled into view, 0-1, the same maths as
 * the design reference's `svc` value:
 *   (innerHeight - rect.top) / (innerHeight * 0.8), clamped to [0, 1]
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.8))
      );
      setProgress((prev) => (Math.abs(next - prev) > 0.01 ? next : prev));
    };

    compute();
    window.addEventListener("scroll", compute, true);
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute, true);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return { ref, progress };
}
