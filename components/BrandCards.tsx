"use client";

import Image from "next/image";
import { brands } from "@/content";
import { useScrollProgress } from "@/lib/use-scroll-progress";
import { useReveal } from "@/lib/use-reveal";

function BrandCard({
  brand,
  index,
  lit,
}: {
  brand: (typeof brands)[number];
  index: number;
  lit: number;
}) {
  const { ref: cardRef, style: revealStyle } = useReveal<HTMLAnchorElement>(index);
  const live = brand.status === "Live";

  return (
    <a
      ref={cardRef}
      href={brand.href}
      target={brand.external ? "_blank" : undefined}
      rel={brand.external ? "noreferrer" : undefined}
      className="flex flex-col gap-4 rounded-[18px] bg-surface p-[22px] text-white no-underline transition-colors hover:bg-surface-hover"
      style={{ minHeight: 220, ...revealStyle }}
    >
      <div className="flex justify-between text-xs font-bold">
        <span
          className="rounded-full px-2.5 py-1"
          style={{
            background: live ? "var(--acc)" : "var(--pill-inactive-alt)",
            color: live ? "#000" : "#fff",
          }}
        >
          {brand.status}
        </span>
        <span>{brand.external ? "↗" : "→"}</span>
      </div>

      {brand.logo ? (
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-[14px] bg-surface-hover">
          <Image src={brand.logo.src} alt={brand.logo.alt} fill sizes="72px" className="object-contain" />
        </div>
      ) : null}

      <span className="mt-auto font-archivo font-extrabold leading-[1.05] text-[clamp(22px,2vw,28px)]">
        {brand.name}
      </span>
      <span className="text-sm leading-[1.45] font-light text-text-secondary text-pretty">
        {brand.body}
      </span>
      <span className="flex h-1.5 gap-0.5">
        {Array.from({ length: 11 }, (_, k) => (
          <span
            key={k}
            className="flex-1 rounded-[1px] transition-colors duration-150"
            style={{
              background:
                k < lit ? (k === 10 ? "var(--acc)" : "#fff") : "var(--pill-inactive-alt)",
            }}
          />
        ))}
      </span>
    </a>
  );
}

export function BrandCards() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section
      id="brands"
      ref={ref}
      className="flex flex-col gap-6"
      style={{ padding: "0 clamp(16px,3vw,40px) clamp(48px,7vw,112px)" }}
    >
      <h2 className="m-0 font-archivo text-sm font-extrabold uppercase tracking-[0.14em]">
        In the house
      </h2>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}
      >
        {brands.map((b, i) => {
          const lit = Math.round(
            Math.max(0, Math.min(1, progress * 1.3 - i * 0.08)) * b.level
          );
          return <BrandCard key={b.id} brand={b} index={i} lit={lit} />;
        })}
      </div>
    </section>
  );
}
