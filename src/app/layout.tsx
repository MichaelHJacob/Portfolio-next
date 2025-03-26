import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { WebSite, WithContext } from "schema-dts";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Michael Henrique Jacob | Desenvolvedor Web Front-End",
  description:
    "Desenvolvedor web especializado em React, Next.js e TypeScript. Crio interfaces modernas, responsivas e performáticas. Confira meus projetos e entre em contato!",
  openGraph: {
    title: "Michael Henrique Jacob | Desenvolvedor Web Front-End",
    description:
      "Desenvolvedor web especializado em React, Next.js e TypeScript. Crio interfaces modernas, responsivas e performáticas. Confira meus projetos e entre em contato!",
  },
  verification: {
    google: "u2e4xEUe9TChs3vZywjhf_vrGmeRXYd56eMZOupAr1Q",
    me: "michael_h.jacob@outlook.com",
    other: {
      ["msvalidate.01"]: "983F53CD12679969F251FD584D892E08",
    },
  },
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Michael H. Jacob",
  alternateName: ["Michael Henrique Jacob", "MichaelHJacob"],
  url: "https://michaelhjacob.vercel.app",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
