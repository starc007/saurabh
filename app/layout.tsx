import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import { ProgressiveBlur } from "@/components/ProgressiveBlur";
import { ThemeProvider } from "@/components/ThemeProvider";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saura3h.xyz"),
  title: "Saurabh | Design Engineer & Product Builder",
  description:
    "Frontend engineer building tools for developers and crypto products. Works with React, Next.js, and Rust.",
  keywords: [
    "Saurabh",
    "Design Engineer",
    "Product Builder",
    "React",
    "Next.js",
    "Rust",
    "Solana",
    "Frontend Engineer",
  ],
  authors: [{ name: "Saurabh", url: "https://saura3h.xyz" }],
  creator: "Saurabh",
  icons: { icon: "/profile.png" },
  openGraph: {
    title: "Saurabh | Design Engineer & Product Builder",
    description:
      "Design Engineer building fast, precise tools for developers and crypto-native experiences.",
    url: "https://saura3h.xyz",
    siteName: "Saurabh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh | Design Engineer & Product Builder",
    description:
      "Design Engineer building fast, precise tools for developers and crypto-native experiences.",
    creator: "@saurra3h",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&d)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${instrumentSerif.variable} antialiased relative min-h-screen bg-canvas text-ink`}
      >
        <ThemeProvider>
          <main className="max-w-170 mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-40 sm:pb-52">
            {children}
            <Footer />
          </main>
          <ProgressiveBlur position="top" />
          <ProgressiveBlur position="bottom" />
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
