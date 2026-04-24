import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.a2slabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A2S Labs | Intelligent Infrastructure & AI Automation",
    template: "%s | A2S Labs",
  },
  description:
    "A2S Labs builds the intelligent infrastructure that powers tomorrow's leaders — from AI automation and custom platforms to secure, scalable web systems.",
  keywords: [
    "AI automation",
    "intelligent infrastructure",
    "custom web applications",
    "workflow automation",
    "AI-powered tools",
    "systems advisory",
    "AI Agency",
    "AI Solutions",
    "AI Consulting",
    "AI Services",
    "n8n",
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
    title: "A2S Labs | Intelligent Infrastructure & AI Automation",
    description:
      "Building the intelligent infrastructure for tomorrow's leaders. AI automation, custom platforms, and secure web systems that scale.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "A2S Labs – Intelligent Infrastructure & AI Automation",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@a2slabs",
    creator: "@a2slabs",
    title: "A2S Labs | Intelligent Infrastructure & AI Automation",
    description:
      "Building the intelligent infrastructure for tomorrow's leaders. AI automation, custom platforms, and secure web systems that scale.",
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

import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1J33DJ23EQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1J33DJ23EQ');
            `,
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} antialiased bg-[#0F172A] text-white`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
