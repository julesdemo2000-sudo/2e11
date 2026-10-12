"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { selectedWork } from "@/content";

const DISCIPLINES = ["All", "Digital", "Brand", "Media", "Sound"];

export function WorkGrid() {
  const [filter, setFilter] = useState("All");

  const items = useMemo(() => {
    if (filter === "All") return selectedWork;
    return selectedWork.filter((w) => w.kind.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {DISCIPLINES.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setFilter(d)}
            aria-pressed={filter === d}
            className="label border-[1.5px] px-4 py-2 transition-colors"
            style={{
              borderColor: "#111111",
              background: filter === d ? "#111111" : "transparent",
              color: filter === d ? "#FFFFFF" : "#111111",
            }}
          >
            {d}
          </button>
        ))}
      </div>

      <div
        className="mt-8 grid gap-7"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {items.map((w) => (
          <Link
            key={w.n}
            href={w.href}
            target={w.external ? "_blank" : undefined}
            rel={w.external ? "noreferrer" : undefined}
            className="group flex flex-col gap-3 text-ink no-underline"
          >
            <div className="label text-[15px] text-signal-text">{w.n}/</div>
            <div
              className="relative box-border flex flex-col overflow-hidden border border-ink p-[18px] transition-transform duration-200 group-hover:-translate-y-1"
              style={{ aspectRatio: "16 / 10", background: w.bg, color: w.fg }}
            >
              <div className="flex justify-between text-[9px] opacity-70" style={{ fontFamily: "var(--font-plex-mono)" }}>
                <span>{w.title}</span>
                <span>Menu ≡</span>
              </div>
              {w.logo ? (
                <div className="relative flex-1 py-3">
                  <Image src={w.logo.src} alt={w.logo.alt} fill className="object-contain" />
                </div>
              ) : (
                <div
                  className="mt-auto text-[40px] leading-[0.95] font-extrabold"
                  style={{ fontFamily: "var(--font-archivo)", letterSpacing: "-0.02em" }}
                >
                  {w.screen}
                </div>
              )}
              <div className="absolute right-0 bottom-0 flex h-11 w-11 items-center justify-center bg-signal text-[22px] font-black text-ink transition-all duration-200 group-hover:h-14 group-hover:w-14">
                ↗
              </div>
            </div>
            <div className="label font-semibold">{w.title}</div>
            <div className="label -mt-2 text-muted-on-paper">{w.kind}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
