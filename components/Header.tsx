"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { TextReveal } from "./beui/TextReveal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const HEADLINE_START = 0.25;
const HEADLINE_STAGGER = 0.08;
// 2 words "Design Engineer" then 3 "& Product Builder." — bio appears after.
const BIO_DELAY = HEADLINE_START + 5 * HEADLINE_STAGGER + 0.35;

const Header = () => {
  return (
    <header className="mb-20" id="home">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-7"
      >
        {/* Top row: profile + theme toggle */}
        <motion.div
          variants={item}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-edge flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="Saurabh"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[12px] font-semibold text-ink-2 tracking-wide">
              saurabh
            </span>
          </div>
          <ThemeToggle />
        </motion.div>

        {/* Headline — word-by-word slide-up + blur */}
        <div className="flex flex-col gap-1 font-pixel">
          <TextReveal
            as="h1"
            text="Design Engineer"
            delay={HEADLINE_START}
            stagger={HEADLINE_STAGGER}
            blur={10}
            yOffset="50%"
            className="text-[36px] sm:text-[44px] font-bold leading-[1.05] text-ink"
          />
          <TextReveal
            as="h1"
            text="& Product Builder."
            delay={HEADLINE_START + 2 * HEADLINE_STAGGER}
            stagger={HEADLINE_STAGGER}
            blur={10}
            yOffset="50%"
            className="text-[36px] sm:text-[44px] font-bold leading-[1.05] text-ink-2"
          >
            <span className="sr-only">.</span>
          </TextReveal>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: BIO_DELAY, duration: 0.55, ease }}
          className="text-[15px] text-ink-2 leading-[1.65] max-w-[460px]"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          I build tools for developers and crypto products. Mostly with React,
          Next.js, and Rust.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: BIO_DELAY + 0.15, duration: 0.55, ease }}
          className="flex gap-2.5 flex-wrap"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-canvas text-[13px] font-semibold rounded-full hover:opacity-85 transition-opacity"
          >
            Resume
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://cal.com/saurra3h/30min"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 border border-edge text-ink-2 text-[13px] font-semibold rounded-full hover:text-ink hover:border-ink-3 transition-colors"
          >
            Book a call
          </a>
          <a
            href="https://x.com/saurra3h"
            target="_blank"
            className="inline-flex items-center gap-1 px-4 py-2 border border-edge text-ink-2 text-[13px] font-semibold rounded-full hover:text-ink hover:border-ink-3 transition-colors"
          >
            @saurra3h
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
