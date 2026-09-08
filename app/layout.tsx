import type { Metadata } from "next";
import { Instrument_Serif, Caveat, Inter } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.title,
  description: profile.blurb.join(" "),
  openGraph: {
    title: profile.title,
    description: profile.blurb[0],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${caveat.variable} ${inter.variable}`}
    >
      <body>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
