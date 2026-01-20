import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh | Full Stack Developer & Product Builder",
  description:
    "Saurabh is a Full Stack Developer and Product Builder. He is currently working on Draft, a product that helps you build your product faster and easier.",
  keywords: [
    "Saurabh",
    "Full Stack Developer",
    "Product Builder",
    "Draft",
    "Product Development",
    "Product Management",
    "Product Design",
    "Product Strategy",
    "Product Marketing",
    "Product Sales",
    "Product Support",
    "Product Engineering",
    "Product Development",
    "Product Management",
    "Product Design",
    "Product Strategy",
    "Product Marketing",
    "Product Sales",
    "Product Support",
    "Product Engineering",
  ],
  authors: [{ name: "Saurabh", url: "https://saura3h.xyz" }],
  creator: "Saurabh",
  publisher: "Saurabh",
  icons: {
    icon: "/profile.png",
  },
  openGraph: {
    title: "Saurabh | Full Stack Developer & Product Builder",
    description:
      "Saurabh is a Full Stack Developer and Product Builder. He is currently working on Draft, a product that helps you build your product faster and easier.",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-zinc-400 pt-20 md:pt-32 pb-48 md:pb-64 selection:bg-accent selection:text-black`}
      >
        <Cursor />
        <div className="max-w-[720px] mx-auto px-8 lg:px-0">
          {children}
          <Footer />
        </div>
        <Dock />
      </body>
    </html>
  );
}
