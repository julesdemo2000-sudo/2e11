"use client";

import { useEffect, useState } from "react";

/** 0-1 progress of the whole page's scroll position. */
export function usePageScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compute = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
      setProgress(next);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return progress;
}
