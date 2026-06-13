"use client";

import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import { Project } from "@/utils/constant";
import { motion } from "motion/react";
import { Tooltip } from "./beui/Tooltip";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProjectItem: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index }) => {
  const date = project.date || project.year;
  const primaryLink =
    project.demoLink || project.demo || project.githubLink || project.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4, ease }}
      className="group relative rounded-lg border border-edge-subtle bg-canvas transition-colors duration-200 hover:border-edge hover:bg-canvas-raised/40"
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
            <h3 className="shrink-0 text-[13.5px] font-semibold text-ink tracking-[-0.01em] transition-colors duration-200 [@media(hover:hover)]:group-hover:text-accent">
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

        {/* Row 2 — one-line description */}
        <p className="mt-0.5 truncate text-[12px] text-ink-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
