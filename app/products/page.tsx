import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ourOwn } from "@/content";

export const metadata: Metadata = {
  title: "Products — 2e11",
  description: "clrfy.io and getfoh.com, the products 2e11 runs itself.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="py-16">
        <h1 className="display m-0" style={{ fontSize: "var(--display-l)" }}>
          Our own.
        </h1>
        <div className="mt-12 flex flex-col gap-10">
          {ourOwn.products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block border-[1.5px] border-ink p-10 no-underline transition-colors hover:bg-ink"
            >
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div
                  className="display text-[clamp(48px,8vw,120px)] leading-none group-hover:text-white"
                >
                  {p.name}
                </div>
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-signal text-[22px] font-black text-ink">
                  ↗
                </span>
              </div>
              <div className="label mt-4 text-muted-on-paper group-hover:text-muted-on-ink">
                {p.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
