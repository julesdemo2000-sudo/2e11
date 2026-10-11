"use client";

import { Logo } from "./Logo";
import { useVolume } from "@/lib/volume-context";
import { footerColumns } from "@/content";

export function Footer() {
  const { vol } = useVolume();

  return (
    <footer
      className="flex flex-col gap-10"
      style={{ padding: "clamp(40px,5vw,72px) clamp(16px,3vw,40px) 24px" }}
    >
      <div
        className="grid text-[15px]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: 32,
        }}
      >
        {footerColumns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-2.5">
            <span className="font-extrabold">{col.heading}</span>
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noreferrer" : undefined}
                className="text-text-secondary no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Logo vol={vol} size="clamp(44px,17vw,320px)" />
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-text-muted">
        <span className="mr-auto">© 2026 2e11 · Pronounced &ldquo;to eleven&rdquo;</span>
        <a href="#top" className="text-text-muted">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
