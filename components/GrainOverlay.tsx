export function GrainOverlay() {
  return (
    <svg
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        mixBlendMode: "multiply",
        opacity: "var(--grain-opacity)",
        zIndex: 50,
      }}
    >
      <filter id="grain2e11">
        <feTurbulence type="fractalNoise" baseFrequency={0.9} numOctaves={3} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain2e11)" />
    </svg>
  );
}
