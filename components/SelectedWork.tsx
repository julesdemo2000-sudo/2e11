import Image from "next/image";
import Link from "next/link";
import { selectedWork } from "@/content";

export function SelectedWork() {
  return (
    <section className="flex flex-wrap bg-ink text-white">
      <div className="flex min-h-[72px] flex-[0_0_72px] items-center justify-center bg-signal py-7 text-ink">
        <div
          className="display whitespace-nowrap text-[30px]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Selected work —
        </div>
      </div>
      <div
        className="grid min-w-0 flex-[999_1_560px] gap-7 py-10 px-page"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {selectedWork.map((w) => (
          <Link
            key={w.n}
            href={w.href}
            target={w.external ? "_blank" : undefined}
            rel={w.external ? "noreferrer" : undefined}
            className="group flex flex-col gap-3 text-white no-underline"
          >
            <div className="label text-[15px] text-signal">{w.n}/</div>
            <div
              className="relative box-border flex flex-col overflow-hidden border border-[#2E2E2E] p-[18px] transition-transform duration-200 group-hover:-translate-y-1"
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
            <div className="label -mt-2 text-muted-on-ink">{w.kind}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
