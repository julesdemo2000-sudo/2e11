import Link from "next/link";
import { services, elevenRule, ourOwn } from "@/content";

export function ThreeColumns() {
  return (
    <section className="flex flex-wrap">
      <div className="box-border flex-[1_1_340px] py-12 px-page">
        <div className="display flex items-center gap-3.5 text-[48px] leading-none">
          What we make <span className="inline-block h-[3px] w-7 bg-ink" />
        </div>
        <div className="mt-6">
          {services.map((s) => (
            <div
              key={s.n}
              className="label grid items-center border-b-[1.5px] border-ink py-3"
              style={{ gridTemplateColumns: "44px minmax(0,1fr) 20px" }}
            >
              <span className="font-semibold">{s.n}</span>
              <span>{s.t}</span>
              <span className="text-right">+</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative box-border flex flex-[1_1_340px] flex-col gap-[22px] bg-signal py-12 px-page">
        <div className="display flex items-center gap-3.5 text-[48px] leading-[0.95] text-white">
          {elevenRule.heading[0]}
          <br />
          {elevenRule.heading[1]} <span className="inline-block h-[3px] w-7 bg-white" />
        </div>
        {elevenRule.paragraphs.map((p) => (
          <p key={p} className="label m-0 whitespace-pre-line leading-[1.65]">
            {p}
          </p>
        ))}
        <p className="label mt-auto mb-0 whitespace-pre-line italic">{elevenRule.italic}</p>
        <div
          aria-hidden
          className="absolute right-0 bottom-0"
          style={{
            width: 0,
            height: 0,
            borderLeft: "90px solid transparent",
            borderBottom: "90px solid #111111",
          }}
        />
      </div>

      <div className="box-border flex-[1_1_300px] py-12 px-page">
        <div className="display flex items-center gap-3.5 text-[48px] leading-none">
          {ourOwn.heading} <span className="inline-block h-[3px] w-7 bg-ink" />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {ourOwn.products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="block border-[1.5px] border-ink p-[18px] no-underline"
            >
              <div className="display text-[40px] leading-none">{p.name}</div>
              <div className="label mt-2 text-muted-on-paper">{p.description}</div>
            </Link>
          ))}
          <div className="label">{ourOwn.footer}</div>
        </div>
      </div>
    </section>
  );
}
