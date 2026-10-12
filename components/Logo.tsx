type LogoProps = {
  /** font-size in px — everything else derives from this */
  size: number;
  tone?: "ink" | "white";
  accent?: string;
  /** the 11 is lifted by this fraction of size (default 0.22) */
  raise?: number;
  className?: string;
};

/**
 * Route B, "Over the line": lowercase 2e11, a hairline at the cap height of
 * the 2 (ten, the limit), the 11 raised through it in the accent colour.
 * Tuned at 40/120/300px against the design reference; locked as em-relative
 * fractions of `size` so it holds proportion at any size.
 */
export function Logo({ size, tone = "ink", accent = "#D40000", raise = 0.22, className = "" }: LogoProps) {
  const fg = tone === "white" ? "#FFFFFF" : "#111111";
  const lift = size * raise;
  const lineTop = size * raise + size * 0.07;
  const hair = Math.max(1, size * 0.018);

  return (
    <div
      role="img"
      aria-label="2e11"
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: "var(--font-archivo), Archivo, sans-serif",
        fontWeight: 900,
        fontStretch: "62%",
        lineHeight: 0.8,
        letterSpacing: "-0.01em",
        paddingTop: lift,
        color: fg,
      }}
    >
      <span style={{ fontSize: size }}>2e</span>
      <span
        style={{
          fontSize: size,
          color: accent,
          display: "inline-block",
          transform: `translateY(-${lift}px)`,
        }}
      >
        11
      </span>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: lineTop,
          height: hair,
          background: fg,
        }}
      />
    </div>
  );
}
