import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { Barlow } from "next/font/google";

import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Michael Henrique Jacob",
  description: "portfólio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className="scrollWindow h-full w-full snap-y snap-mandatory scroll-smooth"
    >
      <body
        className={`${barlow.className} scrollWindow scroll-smooth bg-[#BEC4C1] dark:bg-[#0B2527]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
