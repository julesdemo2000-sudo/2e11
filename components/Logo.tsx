import { knobDegFor } from "@/lib/volume-context";

type LogoProps = {
  vol: number;
  /** font-size (number = px, or any CSS size string e.g. a clamp()); everything else is sized in em from this */
  size?: number | string;
  className?: string;
};

/**
 * The 2e11 lockup: a dial badge (accent circle, black "11", white pointer
 * that rotates with volume) + the "2e11" wordmark, gap 0.22em. Scales
 * entirely from font-size since every dimension below is in em.
 */
export function Logo({ vol, size = 26, className = "" }: LogoProps) {
  const deg = knobDegFor(vol);

  return (
    <span
      className={`inline-flex items-center text-white font-unbounded font-extrabold leading-none ${className}`}
      style={{ gap: "0.22em", fontSize: size, letterSpacing: "0.02em" }}
    >
      <span
        className="relative inline-flex items-center justify-center flex-none rounded-full text-black"
        style={{ width: "1.05em", height: "1.05em", background: "var(--acc)" }}
      >
        <span
          style={{
            fontSize: "0.68em",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            paddingRight: "0.03em",
          }}
        >
          11
        </span>
        <span
          className="absolute inset-0 transition-transform duration-[120ms]"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <span
            className="absolute rounded bg-white"
            style={{
              left: "calc(50% - 0.08em)",
              top: "-0.24em",
              width: "0.16em",
              height: "0.36em",
              borderRadius: "0.04em",
              boxShadow: "0 0 0 1px #000",
            }}
          />
        </span>
      </span>
      <span>2e11</span>
    </span>
  );
}
