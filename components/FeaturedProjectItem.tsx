"use client";

import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import { Project } from "@/utils/constant";
import { motion } from "motion/react";
import { AnimatedNumber } from "./beui/AnimatedNumber";
import { Tooltip } from "./beui/Tooltip";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FeaturedProjectItem: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index }) => {
  const stack = project.techStack || project.tech || [];
  const num = String(index + 1).padStart(2, "0");
  const date = project.date || project.year;
  const primaryLink =
    project.demoLink || project.demo || project.githubLink || project.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease }}
      className="group relative rounded-xl border border-edge-subtle bg-canvas transition-colors duration-200 hover:border-edge hover:bg-canvas-raised/40"
    >
      {/* Overlay link makes the whole card a target; inner actions sit above it. */}
      {primaryLink && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      )}

      <div className="pointer-events-none relative z-10 flex gap-4 px-4 py-4">
        {/* Number prefix */}
        <span className="text-[11px] font-mono text-accent pt-1.5 tabular-nums select-none">
          {num}
        </span>

        <div className="min-w-0 flex-1">
          {/* Title row — title + tags on the left, date on the right */}
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <div className="flex min-w-0 items-baseline gap-2.5 flex-wrap">
              <h3 className="text-[18px] font-bold text-ink tracking-[-0.02em] transition-colors duration-200 [@media(hover:hover)]:group-hover:text-accent">
                {project.title}
              </h3>
              {project.tag?.map((t, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-sm ${
                    t === "Hackathon"
                      ? "bg-accent-bg text-accent"
                      : "bg-canvas-raised text-ink-2"
                  }`}
                >
                  {t}
                </span>
              ))}
              {project.users && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent bg-accent-bg px-2 py-0.5 rounded-sm">
                  <AnimatedNumber value={project.users} duration={1.6} />
                  <span>+ users</span>
                </span>
              )}
            </div>
            {date && (
              <span className="shrink-0 text-[11px] font-mono text-ink-3 whitespace-nowrap pt-0.5">
                {date}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            className="text-[13.5px] text-ink-2 leading-[1.6] max-w-125"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            {project.description}
          </p>

          {/* Note */}
          {project.note && (
            <p className="mt-3 flex items-start gap-2 text-[12px] text-ink-2 italic leading-[1.5] max-w-125">
              <span className="text-accent not-italic select-none mt-[2px]">↳</span>
              <span>{project.note}</span>
            </p>
          )}

          {/* Footer — tech stack on the left, actions on the right */}
          <div className="mt-3.5 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-1.5 flex-wrap">
              {stack.slice(0, 5).map((s, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="text-ink-3 text-[10px]">·</span>}
                  <span className="text-[11px] text-ink-3 font-mono">{s}</span>
                </React.Fragment>
              ))}
            </div>

            <div className="pointer-events-auto flex shrink-0 items-center gap-1">
              {project.githubLink && (
                <Tooltip content="Source" side="top">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source on GitHub"
                    className="relative z-20 grid h-7 w-7 place-items-center rounded-md text-ink-3 transition-colors hover:bg-canvas-raised hover:text-ink"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} />
                  </a>
                </Tooltip>
              )}
              {project.demoLink && (
                <Tooltip content="Live demo" side="top">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open live demo"
                    className="relative z-20 grid h-7 w-7 place-items-center rounded-md text-ink-3 transition-colors hover:bg-accent-bg hover:text-accent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 [@media(hover:hover)]:group-hover:-translate-y-0.5 [@media(hover:hover)]:group-hover:translate-x-0.5"
                    />
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectItem;
