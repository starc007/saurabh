import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Footer from "@/components/Footer";
import SiteNav from "@/components/SiteNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TracwellAnalytics } from "@/components/TracwellAnalytics";

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
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.classList.toggle('dark',localStorage.getItem('theme')==='dark')}catch{}` }} />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased relative min-h-screen bg-canvas text-ink`}
      >
        <TracwellAnalytics />
        <ThemeProvider>

          <main className="max-w-156 mx-auto px-6 sm:px-8 pt-8 sm:pt-18 pb-8 sm:pb-12">
            <SiteNav />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
