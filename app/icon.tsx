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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontWeight: 900,
            fontSize: 28,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#D40000",
          }}
        >
          11
        </span>
        <div style={{ width: 20, height: 2, background: "#111111", marginTop: 2 }} />
      </div>
    ),
    { ...size }
  );
}
