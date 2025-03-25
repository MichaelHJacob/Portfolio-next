import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Michael Henrique Jacob",
  description: "Portfólio de Michael Henrique Jacob",
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
    <html lang="pt-BR" className={`${montserrat.variable} h-full w-full`}>
      <body className={`bg-backgroundPrimary`}>
        {children}
        <Analytics />
        <Script
          defer
          src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"
        />
      </body>
    </html>
  );
}
