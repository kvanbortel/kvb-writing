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
  title: "Kayla Writes",
  description: "Kayla Van Bortel's writer website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Kayla Writes" />
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
        <footer className="mt-auto py-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kayla Writes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
