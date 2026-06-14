"use client";

import { ArrowUpRight, Github } from "lucide-react";
import React, { useState } from "react";
import { Project } from "@/utils/constant";
import { motion, useReducedMotion } from "motion/react";
import { Tooltip } from "./beui/Tooltip";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
// Apple-form spring — the morph character of the Dynamic Island, a touch snappier
// since rows expand on hover dozens of times.
const ISLAND_SPRING = { type: "spring", duration: 0.5, bounce: 0.2 } as const;

const ProjectItem: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const [isTouch] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );
  const reduce = useReducedMotion();
  const stack = project.techStack || project.tech || [];
  const date = project.date || project.year;
  const primaryLink =
    project.demoLink || project.demo || project.githubLink || project.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4, ease }}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      className="group relative rounded-lg bg-canvas transition-colors duration-200 hover:bg-canvas-raised"
    >
      {/* Overlay link makes the whole row a target; inner actions sit above it. */}
      {primaryLink && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      )}

      <div className="pointer-events-none relative z-10 px-3 py-2">
        {/* Row 1 — title + tags on the left, date + actions on the right */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="shrink-0 text-[13.5px] font-semibold text-ink tracking-[-0.01em]">
              {project.title}
            </h3>
            {project.tag?.slice(0, 1).map((t, idx) => (
              <span
                key={idx}
                className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-sm ${
                  t === "Hackathon"
                    ? "bg-accent-bg text-accent"
                    : "bg-canvas-raised text-ink-2"
                }`}
              >
                {t}
              </span>
            ))}
            {project.users && (
              <span className="shrink-0 text-[10px] font-medium text-accent">
                {project.users.toLocaleString()}+
              </span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            {date && (
              <span className="text-[11px] font-mono text-ink-3 whitespace-nowrap">
                {date}
              </span>
            )}
            <div className="pointer-events-auto flex items-center gap-0.5">
              {project.githubLink && (
                <Tooltip content="Source" side="top">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source on GitHub"
                    className="relative z-20 grid h-6 w-6 place-items-center rounded text-ink-3 transition-colors hover:bg-canvas-raised hover:text-ink"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={12} />
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
                    className="relative z-20 grid h-6 w-6 place-items-center rounded text-ink-3 transition-colors hover:bg-accent-bg hover:text-accent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 [@media(hover:hover)]:group-hover:-translate-y-0.5 [@media(hover:hover)]:group-hover:translate-x-0.5"
                    />
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        </div>

        {/* Hover-expand — collapsed to the first description line, springs open to
            the full description + tech + note, morphing like the Dynamic Island. */}
        <motion.div
          initial={false}
          animate={{ height: open || isTouch ? "auto" : "1.25rem" }}
          transition={reduce ? { duration: 0 } : { height: ISLAND_SPRING }}
          style={{ overflow: "hidden" }}
          className="mt-0.5"
        >
          <p className="text-[12px] leading-5 text-ink-2">
            {project.description}
          </p>
          <div className="flex flex-col gap-1.5 pt-2">
            {stack.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                {stack.slice(0, 6).map((s, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && (
                      <span className="text-ink-3 text-[10px]">·</span>
                    )}
                    <span className="text-[11px] text-ink-3 font-mono">
                      {s}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}
            {project.note && (
              <p className="flex items-start gap-2 text-[12px] text-ink-2 italic leading-[1.5]">
                <span className="text-accent not-italic select-none mt-[2px]">
                  ↳
                </span>
                <span>{project.note}</span>
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
