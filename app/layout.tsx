import type { Metadata } from "next";
import { Instrument_Serif, Caveat, Inter, Courier_Prime } from "next/font/google";
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

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
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
      className={`${instrumentSerif.variable} ${caveat.variable} ${inter.variable} ${courierPrime.variable}`}
    >
      <body>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
