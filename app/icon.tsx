import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#111111",
          padding: 4,
          fontWeight: 900,
          fontSize: 16,
          lineHeight: 0.8,
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
        }}
      >
        <span>2e</span>
        <span style={{ color: "#D40000" }}>11</span>
      </div>
    ),
    { ...size }
  );
}
