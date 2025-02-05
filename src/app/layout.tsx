import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
});

export const metadata: Metadata = {
  title: 'Michael Henrique Jacob',
  description: 'portfólio'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="snap-y snap-mandatory h-full w-full scroll-smooth scrollWindow ">
       <body className={`${ barlow.className} bg-[#BEC4C1] dark:bg-[#0B2527] scrollWindow  scroll-smooth`}>
       {children}
       <Analytics/>
      </body>
    </html>
  )
}


