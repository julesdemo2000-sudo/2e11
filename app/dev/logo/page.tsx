import { Logo } from "@/components/Logo";
import { LogoIcon } from "@/components/LogoIcon";

export const metadata = {
  robots: { index: false, follow: false },
};

const colourways = [
  { name: "Ink + signal on paper", bg: "#ECE7DC", fg: "ink" as const, ac: "#D40000", label: "#111111" },
  { name: "White + signal on ink", bg: "#111111", fg: "white" as const, ac: "#D40000", label: "#FFFFFF" },
  { name: "Ink + white on signal", bg: "#D40000", fg: "ink" as const, ac: "#FFFFFF", label: "#111111" },
  { name: "Ink + signal on white", bg: "#FFFFFF", fg: "ink" as const, ac: "#D40000", label: "#111111" },
  { name: "One colour, white on ink", bg: "#111111", fg: "white" as const, ac: "#FFFFFF", label: "#FFFFFF" },
];

const sizes = [300, 120, 64, 40, 32, 20];

export default function DevLogoPage() {
  return (
    <div className="min-h-screen bg-paper p-10 text-ink">
      <h1 className="display text-4xl">2e11 logo system</h1>
      <p className="label mt-2 normal-case tracking-normal">
        Internal reference — not linked anywhere. Route B (wordmark) and route E (icon).
      </p>

      <h2 className="label mt-10 text-base font-semibold">Sizes — wordmark min. 20px tall, then switch to the icon</h2>
      <div className="mt-4 flex flex-wrap items-end gap-10 border-[1.5px] border-ink p-6">
        {sizes.map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <Logo size={s} />
            <span className="label text-[10px]">{s}</span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-2">
          <LogoIcon size={32} />
          <span className="label text-[10px]">16 icon</span>
        </div>
      </div>

      <h2 className="label mt-10 text-base font-semibold">Colourways</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
        {colourways.map((w) => (
          <div key={w.name} className="flex flex-col justify-between gap-6 border-[1.5px] border-ink p-4" style={{ background: w.bg }}>
            <div className="flex flex-1 items-center justify-center">
              <Logo size={70} tone={w.fg} accent={w.ac} />
            </div>
            <div className="label text-[10px]" style={{ color: w.label }}>
              {w.name}
            </div>
          </div>
        ))}
      </div>

      <h2 className="label mt-10 text-base font-semibold">Icon</h2>
      <div className="mt-4 flex gap-6 border-[1.5px] border-ink p-6">
        <LogoIcon size={110} />
        <LogoIcon size={64} />
        <LogoIcon size={32} />
      </div>

      <h2 className="label mt-10 text-base font-semibold">Avatar</h2>
      <div className="mt-4 flex h-[130px] w-[130px] items-center justify-center rounded-full bg-ink">
        <Logo size={52} tone="white" />
      </div>
    </div>
  );
}
