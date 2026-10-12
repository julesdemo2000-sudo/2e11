import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://2e11.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "2e11 — Creative studio. Digital, media & sound.",
  description:
    "2e11 is a creative studio that builds its own products, makes media and writes music. Same team, same standard: as far as it goes, then one more.",
  openGraph: {
    title: "2e11 — Turned up to eleven.",
    description:
      "A creative studio covering digital products, media, design, music and production. Owns clrfy.io and getfoh.com.",
    url: siteUrl,
    siteName: "2e11",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2e11 — Turned up to eleven.",
    description:
      "A creative studio covering digital products, media, design, music and production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
