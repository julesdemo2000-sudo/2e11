import { ImageResponse } from "next/og";

export const alt = "2e11 — media, music & digital brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          gap: 28,
          background: "#000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "#c6f432",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 48, fontWeight: 800, color: "#000", letterSpacing: "-2px" }}>
              11
            </span>
          </div>
          <span style={{ fontSize: 104, fontWeight: 800, color: "#fff", letterSpacing: "1px" }}>
            2e11
          </span>
        </div>
        <span style={{ fontSize: 30, fontWeight: 300, color: "#cfcfcf" }}>
          Media, music &amp; digital brands
        </span>
      </div>
    ),
    { ...size }
  );
}
