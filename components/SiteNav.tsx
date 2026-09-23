"use client";

import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { House, FolderClosed } from "lucide-react";
import { useId } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const pathname = usePathname();
  const navigationId = useId();
  const reducedMotion = useReducedMotion();
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
        <LayoutGroup id={navigationId}>
          <div className="nav-tabs">
            {[{ href: "/", label: "Home", icon: House }, { href: "/projects", label: "Projects", icon: FolderClosed }].map(item => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className="nav-tab" aria-label={item.label} title={item.label} aria-current={active ? "page" : undefined}>
                  {active && <motion.span
                    className="nav-tab-indicator"
                    aria-hidden="true"
                    layoutId="active-navigation"
                    initial={false}
                    transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 32, mass: 0.6 }}
                  />}
                  <item.icon className="nav-tab-label" size={15} strokeWidth={1.75} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </LayoutGroup>
        <ThemeToggle />
      </nav>
    </header>
  );
}
