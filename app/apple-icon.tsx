import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <div
          style={{
            width: "76%",
            height: "76%",
            borderRadius: "50%",
            background: "#c6f432",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 800, color: "#000", letterSpacing: "-3px" }}>
            11
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
