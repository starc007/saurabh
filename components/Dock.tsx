"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Home, Code, Mail, LucideIcon } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";

type DockItem =
  | { type: "lucide"; icon: LucideIcon; label: string; href: string }
  | { type: "custom"; icon: React.FC<{ size?: number; className?: string }>; label: string; href: string };

const DOCK_ITEMS: DockItem[] = [
  { type: "lucide", icon: Home, label: "Home", href: "/" },
  { type: "lucide", icon: Code, label: "Projects", href: "/projects" },
  { type: "custom", icon: GithubIcon, label: "Github", href: "https://github.com/starc007" },
  { type: "custom", icon: XIcon, label: "Twitter", href: "https://x.com/saurra3h" },
  { type: "custom", icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/starc007" },
  { type: "lucide", icon: Mail, label: "Mail", href: "mailto:saurabh10102@gmail.com" },
];

const DockIcon = ({
  mouseX,
  item,
}: {
  mouseX: MotionValue<number>;
  item: DockItem;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [38, 54, 38]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      style={{ width }}
      className="aspect-square rounded-xl flex items-center justify-center text-ink-2 hover:text-ink border border-edge bg-canvas-raised hover:bg-canvas-sunken transition-colors relative group"
    >
      {item.type === "lucide" ? (
        <item.icon className="w-3.75 h-3.75" strokeWidth={1.8} />
      ) : (
        <item.icon size={15} />
      )}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-ink text-canvas text-[10px] font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {item.label}
      </span>
    </motion.a>
  );
};

const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-7 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 26 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center h-14 gap-2 px-4 pointer-events-auto bg-canvas/80 backdrop-blur-xl border border-edge rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
      >
        {DOCK_ITEMS.map((item, i) => (
          <React.Fragment key={i}>
            <DockIcon mouseX={mouseX} item={item} />
            {i === 1 && <div className="w-px h-6 bg-edge mx-0.5" />}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
