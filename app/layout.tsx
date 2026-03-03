import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeGlow } from "@/components/ThemeGlow";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});


export const metadata: Metadata = {
  metadataBase: new URL("https://example.vercel.app"),
  title: {
    default: "HIBA Hedil — Portfolio",
    template: "%s · HIBA Hedil"
  },
  icons:{
    icon:"/favicon.ico",
  },
  description: "Portfolio — Projets techniques, web, et créations visuelles",
  openGraph: {
    title: "HIBA Hedil — Portfolio",
    description: "Projets techniques, web, et créations visuelles.",
    url: "/",
    siteName: "HIBA Hedil",
    locale: "fr_FR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">
        <ThemeGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}