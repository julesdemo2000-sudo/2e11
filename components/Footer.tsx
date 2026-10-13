import { footer } from "@/content";

const BARCODE_WIDTHS = [3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 2, 1, 4, 1, 3, 1, 1, 2, 4, 1, 2, 3, 1, 1, 2, 1, 4, 2, 1];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div
        className="flex flex-wrap items-center gap-10 py-12 px-page"
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}
      >
        <div
          className="label flex-none border-l-[1.5px] border-[#555] pl-4 leading-[1.5]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {footer.vertical[0]}
          <br />
          <span className="text-signal">■</span> {footer.vertical[1]}
        </div>

        <div className="flex-[1_1_360px]">
          <div className="display text-signal" style={{ fontSize: "clamp(48px,5vw,76px)", lineHeight: 0.9 }}>
            {footer.headline[0]}
            <br />
            {footer.headline[1]}
          </div>
          <div className="my-4 h-1 w-[220px] rounded-sm bg-white" />
          <div className="label whitespace-pre-line text-muted-on-ink">{footer.sub}</div>
        </div>

        <div className="flex flex-[1_1_280px] flex-col gap-3 label">
          <div className="display text-2xl normal-case tracking-normal">{footer.contactHeading}</div>
          <div className="h-0.5 w-[22px] bg-white" />
          {footer.links.map((l) => (
            <a key={l.label} href={l.href} className="text-white no-underline">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-none flex-col items-center gap-[18px]">
          <svg
            width="150"
            height="150"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Round studio stamp: creative, digital, media, sound, with 11 at the centre"
            className="motion-safe:animate-[spin_40s_linear_infinite] motion-reduce:animate-none"
          >
            <defs>
              <path id="ringFooter" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
            </defs>
            <circle cx="100" cy="100" r="96" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <text fontFamily="var(--font-plex-mono), monospace" fontSize="14" fill="#FFFFFF" letterSpacing="3">
              <textPath href="#ringFooter">{footer.stampLabel}</textPath>
            </text>
            <text
              x="100"
              y="124"
              textAnchor="middle"
              fontFamily="var(--font-archivo), sans-serif"
              fontWeight="900"
              fontStretch="62%"
              fontSize="72"
              fill="#D40000"
            >
              11
            </text>
          </svg>
          <div className="flex h-[34px] items-end gap-0.5 bg-paper px-2 py-1.5">
            {BARCODE_WIDTHS.map((w, i) => (
              <div
                key={i}
                style={{ width: w * 2, height: "100%", background: i % 2 === 0 ? "#111111" : "transparent" }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="label border-t-[1.5px] border-[#2A2A2A] px-page py-5 text-muted-on-ink"
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}
      >
        © {new Date().getFullYear()} {footer.legalName}. Company No. {footer.companyNo}. {footer.registeredIn}.
      </div>
    </footer>
  );
}
