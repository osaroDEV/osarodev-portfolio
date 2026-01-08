import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "osaroDEV | AI Frontend Developer & Creative Technologist",
  description:
    "Award-winning portfolio of osaroDEV - Crafting exceptional digital experiences with AI-powered frontend development, stunning animations, and cutting-edge web technologies.",
  keywords: [
    "Frontend Developer",
    "AI Developer",
    "React Developer",
    "Next.js Developer",
    "Creative Developer",
    "Web Developer",
    "UI/UX",
    "Portfolio",
  ],
  authors: [{ name: "osaroDEV" }],
  openGraph: {
    title: "osaroDEV | AI Frontend Developer",
    description:
      "Crafting exceptional digital experiences with AI-powered frontend development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "osaroDEV | AI Frontend Developer",
    description:
      "Crafting exceptional digital experiences with AI-powered frontend development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {/* Animated Background */}
        <div className="gradient-bg">
          <div className="gradient-orb gradient-orb-1" />
          <div className="gradient-orb gradient-orb-2" />
          <div className="gradient-orb gradient-orb-3" />
        </div>

        {/* Grid Pattern */}
        <div className="grid-pattern" />

        {/* Noise Overlay for texture */}
        <div className="noise-overlay" />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
