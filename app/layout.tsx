import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.a2slabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A2S Labs | Business Automation & Custom Systems",
    template: "%s | A2S Labs",
  },
  description:
    "A2S Labs helps growing businesses automate operations, streamline workflows, and build custom internal tools — saving time and improving visibility.",
  keywords: [
    "business automation",
    "workflow automation",
    "custom web applications",
    "internal tools",
    "WhatsApp automation",
    "systems advisory",
    "Pakistan",
    "A2S Labs",
  ],
  authors: [{ name: "A2S Labs", url: siteUrl }],
  creator: "A2S Labs",
  publisher: "A2S Labs",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "A2S Labs",
    title: "A2S Labs | Business Automation & Custom Systems",
    description:
      "Smart automation and custom systems for growing businesses. Streamline workflows, eliminate bottlenecks, and build tools that scale with you.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "A2S Labs – Smart Automation & Custom Systems",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@a2slabs",
    creator: "@a2slabs",
    title: "A2S Labs | Business Automation & Custom Systems",
    description:
      "Smart automation and custom systems for growing businesses. Streamline workflows, eliminate bottlenecks, and build tools that scale with you.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "f0U8Z_zXe1k-nM0W6JbV3jEWb0hg2ulR6Yw64DqEGPo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
