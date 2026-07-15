import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Arsid — Edge AI & Full-Stack Developer",
  description:
    "Computer Science student at VIT-AP building hardware-integrated software, Edge AI systems, and open source developer tools.",
  openGraph: {
    title: "Parth Arsid — Edge AI & Full-Stack Developer",
    description:
      "Computer Science student at VIT-AP building hardware-integrated software, Edge AI systems, and open source developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
