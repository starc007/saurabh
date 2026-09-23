"use client";

import { SharedLayoutBg } from "./beui/SharedLayoutBg";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <header className="profile-header enter">
      <Link href="/" aria-label="Saurabh home" className="profile-avatar">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/profile.png" alt="" width={44} height={44} />
      </Link>
      <div>
        <Link href="/" className="profile-name">Saurabh</Link>
        <p className="profile-role">Design engineer & product builder</p>
      </div>
      <nav aria-label="Main navigation" className="profile-nav">
        <SharedLayoutBg inset={7} style={{ flexDirection: "row", width: "auto", gap: 13 }}>
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
        <Link href="/projects" aria-current={pathname === "/projects" ? "page" : undefined}>Projects</Link>
        </SharedLayoutBg>
        <ThemeToggle />
      </nav>
    </header>
  );
}
