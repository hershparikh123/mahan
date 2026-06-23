import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahan Plumbing, Heating & AC — Montville, NJ",
  description:
    "Family-run plumbing, heating, and air conditioning in Montville, NJ. Honest pricing, the same people each time, and help when something goes wrong.",
  keywords: [
    "plumbing Montville NJ",
    "HVAC Morris County",
    "emergency plumber NJ",
    "heating repair Montville",
    "sewer line repair",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
