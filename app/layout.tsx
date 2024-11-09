import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://developer-portfolio-ibrahim-memons-projects.vercel.app"
  ),
  title: "Davide Zangrando",
  description: "Developer Portfolio By Davide Zangrando",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Davide Zangrando"],
  openGraph: {
    title: "Davide Zangrando",
    description: "Software Engineer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
