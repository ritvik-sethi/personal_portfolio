import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { summary } from "@/lib/content";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ritvik Sethi | Portfolio",
    template: "%s | Ritvik Sethi",
  },
  description: summary,
  applicationName: "Ritvik Sethi Portfolio",
  authors: [{ name: "Ritvik Sethi", url: siteUrl }],
  creator: "Ritvik Sethi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ritvik Sethi",
    title: "Ritvik Sethi | Portfolio",
    description: summary,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritvik Sethi | Portfolio",
    description: summary,
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-navy font-sans">{children}</body>
    </html>
  );
}
