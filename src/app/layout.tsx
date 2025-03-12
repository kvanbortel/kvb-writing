import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaylavb.com'),
  title: {
    default: "Kayla Writes | Writer & Storyteller",
    template: "%s | Kayla Writes"
  },
  description: "Kayla Van Bortel's writing portfolio and blog. Exploring storytelling through fantasy novels, short fiction, and interactive narratives.",
  keywords: ["writer", "author", "fantasy", "novels", "creative writing", "storytelling", "fiction"],
  creator: "Kayla Van Bortel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaylavb.com",
    siteName: "Kayla Writes",
    title: "Kayla Writes | Writer & Storyteller",
    description: "Kayla Van Bortel's writing portfolio and blog. Exploring storytelling through fantasy novels, short fiction, and interactive narratives.",
    images: [
      {
        url: "/kvb-writing/Kayla2023-small.png",
        width: 600,
        height: 900,
        alt: "Kayla Van Bortel"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayla Writes | Writer & Storyteller",
    description: "Kayla Van Bortel's writing portfolio and blog. Exploring storytelling through fantasy novels, short fiction, and interactive narratives.",
    images: ["/kvb-writing/Kayla2023-small.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Root Layout Component
 * 
 * Application-wide layout wrapper featuring:
 * - HTML document structure
 * - Font loading (Geist Sans and Mono)
 * - Meta tags and SEO configuration
 * - Google Analytics integration
 * - Skip link for accessibility
 * - Header and footer components
 * - Dark mode compatibility
 * 
 * @component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Kayla Writes" />
        <link rel="canonical" href="https://kaylavb.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6N6DG6XJWC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6N6DG6XJWC');
          `}
        </Script>
        <SkipLink />
        <Header />
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <footer className="mt-auto py-8 text-center text-sm text-gray-500" role="contentinfo">
          <p>© {new Date().getFullYear()} Kayla Writes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
