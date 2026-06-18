"use client";

import CustomSection from "./CustomSection";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface Role {
  company: string;
  role: string;
  period: string;
  url?: string;
  current?: boolean;
}

const ROLES: Role[] = [
  {
    company: "NodeOps",
    role: "Frontend Engineer",
    period: "2024 – Present",
    url: "https://nodeops.network",
    current: true,
  },
  {
    company: "Bitbns",
    role: "Frontend Engineer",
    period: "2022 – 2024",
    url: "https://bitbns.com",
  },
];

const About = () => {
  return (
    <CustomSection title="About" id="about">
      <p
        className="text-[14px] text-ink-2 leading-[1.7] mb-7 max-w-125"
        style={{ textWrap: "pretty" } as React.CSSProperties}
      >
        I&apos;m a frontend engineer based in India. I build small, fast tools for
        developers and crypto products. I care a lot about how they look and
        feel. These days I&apos;m deep into agentic payments and AI + crypto, and
        shipping{" "}
        <a
          href="https://beui.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-ink underline decoration-edge underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          beUI
        </a>{" "}
        — bespoke motion components for React.
        Always down to talk tech or anime.
      </p>

      <div className="flex flex-col gap-3">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4, ease }}
            className="flex items-baseline justify-between gap-4 py-1"
          >
            <div className="flex items-baseline gap-2.5 min-w-0">
              <span className="text-[14px] font-semibold text-ink tracking-[-0.01em]">
                {r.url ? (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {r.company}
                  </a>
                ) : (
                  r.company
                )}
              </span>
              {r.current && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
              )}
              <span className="text-[12px] text-ink-2 truncate">{r.role}</span>
            </div>
            <span className="text-[11px] text-ink-3 font-mono whitespace-nowrap shrink-0">
              {r.period}
            </span>
          </motion.div>
        ))}
      </div>
    </CustomSection>
  );
};

export default About;
