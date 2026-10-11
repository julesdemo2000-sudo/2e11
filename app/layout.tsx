import type { Metadata } from "next";
import { Unbounded, Archivo, Hanken_Grotesk } from "next/font/google";
import { VolumeProvider } from "@/lib/volume-context";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-unbounded",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://2e11.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "2e11 · Media, music & digital brands",
  description:
    "2e11 is a holding company for media, music and digital brands — clrfy.io, getfoh, Records & publishing and whatever's next. Maximum is ten. We go one louder.",
  openGraph: {
    title: "2e11 · Media, music & digital brands",
    description:
      "A house of media, music and digital brands: clrfy.io, getfoh, Records & publishing and an open channel for new pitches.",
    url: siteUrl,
    siteName: "2e11",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2e11 · Media, music & digital brands",
    description:
      "A house of media, music and digital brands: clrfy.io, getfoh, Records & publishing and an open channel for new pitches.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${archivo.variable} ${hanken.variable}`}>
      <body>
        <VolumeProvider>{children}</VolumeProvider>
      </body>
    </html>
  );
}
