"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useVolume } from "@/lib/volume-context";
import { nav, headerPills } from "@/content";

export function Header() {
  const { vol } = useVolume();

  return (
    <header className="sticky top-0 z-30 bg-black">
      <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 px-page py-3.5">
        <Link href="#top" aria-label="2e11 home" className="mr-auto no-underline">
          <Logo vol={vol} size={26} />
        </Link>

        <div className="flex flex-wrap gap-6 text-[15px] font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white no-underline transition-colors hover:text-acc"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          {headerPills.map((pill) => (
            <a
              key={pill.href}
              href={pill.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pill-inactive px-3 py-1.5 text-xs font-bold text-white no-underline transition-colors hover:bg-acc hover:text-black"
            >
              {pill.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
