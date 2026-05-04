import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Saurabh — Design Engineer & Product Builder",
  description:
    "Design Engineer building fast, precise tools for developers and crypto-native experiences. React, Next.js, Rust.",
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
    title: "Saurabh — Design Engineer & Product Builder",
    description:
      "Design Engineer building fast, precise tools for developers and crypto-native experiences.",
    url: "https://saura3h.xyz",
    siteName: "Saurabh",
    images: [{ url: "/profile.png" }],
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased relative min-h-screen bg-canvas text-ink`}
      >
        <ThemeProvider>
          <main className="max-w-[680px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-40 sm:pb-52">
            {children}
            <Footer />
          </main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
