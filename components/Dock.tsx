"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Github,
  Home,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dock as BeDock, DockItem, DockSeparator } from "./beui/Dock";
import { Tooltip } from "./beui/Tooltip";

type DockItemDef = { icon: LucideIcon; label: string; href: string };

const DOCK_ITEMS: DockItemDef[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Code, label: "Projects", href: "/projects" },
  { icon: Github, label: "Github", href: "https://github.com/starc007" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/saurra3h" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/starc007",
  },
  { icon: Mail, label: "Mail", href: "mailto:saurabh10102@gmail.com" },
];

const Dock: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-7 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 26 }}
        className="pointer-events-auto"
      >
        <BeDock
          // size={28}
          // magnification={46}
          // distance={100}
          className="px-1.5"
        >
          {DOCK_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const active =
              (item.href === "/" && pathname === "/") ||
              (item.href === "/projects" && pathname.startsWith("/projects"));
            const isInternal = item.href.startsWith("/");
            const isExternal = item.href.startsWith("http");
            const Inner = (
              <Icon
                size={17}
                strokeWidth={1.8}
                className={active ? "text-ink" : "text-ink/40"}
              />
            );

            return (
              <React.Fragment key={i}>
                <DockItem aria-label={item.label} active={active}>
                  <Tooltip
                    content={item.label}
                    side="top"
                    wrapperClassName="h-full w-full items-center justify-center"
                  >
                    {isInternal ? (
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-full w-full items-center justify-center"
                      >
                        {Inner}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer noopener" : undefined}
                        aria-label={item.label}
                        className="flex h-full w-full items-center justify-center"
                      >
                        {Inner}
                      </a>
                    )}
                  </Tooltip>
                </DockItem>
                {i === 1 ? <DockSeparator /> : null}
              </React.Fragment>
            );
          })}
        </BeDock>
      </motion.div>
    </div>
  );
};

export default Dock;
