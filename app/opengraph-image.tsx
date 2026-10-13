import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "2e11 — turned up to eleven";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const heroData = await readFile(
  join(process.cwd(), "public/images/brand/founder-hero-studio-cutout.png"),
  "base64"
);
const heroSrc = `data:image/png;base64,${heroData}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#ECE7DC",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -20,
            top: -60,
            fontWeight: 900,
            fontSize: 620,
            lineHeight: 0.8,
            color: "#D40000",
            letterSpacing: "-0.03em",
            display: "flex",
          }}
        >
          11
        </div>
        <img
          src={heroSrc}
          alt=""
          height={630}
          style={{ position: "absolute", right: 60, bottom: 0, objectFit: "contain" }}
        />
        <div
          style={{
            position: "absolute",
            left: 64,
            bottom: 64,
            display: "flex",
            flexDirection: "column",
            fontWeight: 900,
            fontSize: 96,
            lineHeight: 0.8,
            color: "#111111",
            letterSpacing: "-0.01em",
          }}
        >
          <div style={{ display: "flex" }}>2e11</div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 500, marginTop: 20, color: "#55534E" }}>
            Turned up to eleven.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
