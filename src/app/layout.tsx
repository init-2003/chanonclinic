import type { Metadata } from "next";
import { Archivo, Maitree, Instrument_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import "./clinic-grid.css";
import "lenis/dist/lenis.css";
import "./inertial-scroll.css";
import { createSeoMetadata } from "@/lib/seo";

const rulerFont = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-ruler", display: "swap" });

const maitree = Maitree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-maitree",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
});

export const metadata: Metadata = createSeoMetadata(process.env);

import MotionProvider from "@/components/ui/motion/MotionProvider";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${maitree.variable} ${instrumentSans.variable} ${notoSansThai.variable} ${rulerFont.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#112a23] bg-[#f2f7f4] selection:bg-[#1b7a5a]/20 selection:text-[#146348] relative">
        {/* Subtle 2% SVG Paper Grain Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-multiply bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <MotionProvider><SmoothScrollProvider>{children}</SmoothScrollProvider></MotionProvider>
      </body>
    </html>
  );
}
