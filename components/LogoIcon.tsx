type LogoIconProps = {
  size: number;
  accent?: string;
  className?: string;
};

/**
 * Route E: a solid ink square, "2e" over "11" stacked bottom-left, 11 in
 * the accent colour, white "2e". Used for the favicon and anywhere the
 * wordmark would render under ~20px.
 */
export function LogoIcon({ size, accent = "#D40000", className = "" }: LogoIconProps) {
  const pad = size * 0.12;
  const stack = size * 0.5;

  return (
    <div
      role="img"
      aria-label="2e11"
      className={className}
      style={{
        width: size,
        height: size,
        background: "#111111",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: pad,
        boxSizing: "border-box",
        fontFamily: "var(--font-archivo), Archivo, sans-serif",
        fontWeight: 900,
        fontStretch: "62%",
        lineHeight: 0.8,
        fontSize: stack,
        letterSpacing: "-0.01em",
      }}
    >
      <span>2e</span>
      <span style={{ color: accent }}>11</span>
    </div>
  );
}
