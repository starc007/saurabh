"use client"

import React, { useRef } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, Code, Github, Twitter, Linkedin, Mail, LucideIcon } from 'lucide-react';

const DOCK_ITEMS = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Code, label: 'Projects', href: '/projects' },
  { icon: Github, label: 'Github', href: 'https://github.com/starc007' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/saurra3h' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/starc007' },
  { icon: Mail, label: 'Mail', href: 'mailto:saurabh10102@gmail.com' },
];

const DockIcon = ({ mouseX, item }: { mouseX: MotionValue<number>; item: { icon: LucideIcon; label: string; href: string } }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [42, 68, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      style={{ width }}
      className="aspect-square rounded-2xl bg-zinc-900/40 flex items-center justify-center text-zinc-500 hover:text-accent hover:bg-zinc-800/60 border border-zinc-800/30 transition-colors relative group"
    >
      <item.icon className="w-5 h-5" />
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-zinc-950/90 backdrop-blur-md text-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg border border-[#a3e635]/20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap font-serif italic shadow-xl">
        {item.label}
      </span>
    </motion.a>
  );
};

const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center z-[50] pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-[72px] gap-3 px-5 pb-3.5 mx-auto pointer-events-auto bg-zinc-950/40 backdrop-blur-2xl border border-zinc-900/50 rounded-[28px] shadow-2xl shadow-black/50"
      >
        {DOCK_ITEMS.map((item, i) => (
          <React.Fragment key={i}>
            <DockIcon mouseX={mouseX} item={item} />
            {i === 1 && <div className="w-px h-10 bg-zinc-800/50 mb-1.5 mx-1" />}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
