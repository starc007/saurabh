"use client";

import { ArrowUpRight, Github } from "lucide-react";
import React, { useState } from "react";
import { Project } from "@/utils/constant";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProjectItem: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index, isLast }) => {
  const [hovered, setHovered] = useState(false);
  const stack = project.techStack || project.tech || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group py-4 cursor-default ${!isLast ? "border-b border-edge-subtle" : ""}`}
    >
      {/* Hover fill — slides in from left */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover-bg"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.25, ease }}
            className="absolute inset-0 -mx-4 rounded-lg bg-canvas-raised pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          {/* Title + tags */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className="text-[14px] font-semibold text-ink tracking-[-0.01em] group-hover:text-lime transition-colors duration-200">
              {project.title}
            </h3>
            {project.tag?.map((t, idx) => (
              <span
                key={idx}
                className={`text-[10px] font-medium px-2 py-0.5 rounded-sm ${
                  t === "Hackathon"
                    ? "bg-lime-bg text-lime"
                    : "bg-canvas-raised text-ink-2"
                }`}
              >
                {t}
              </span>
            ))}
            {project.users && (
              <span className="text-[10px] font-medium text-lime bg-lime-bg px-2 py-0.5 rounded-sm">
                {project.users.toLocaleString()} users
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-[13px] text-ink-2 leading-[1.6] mb-2.5 max-w-125" style={{ textWrap: "pretty" } as React.CSSProperties}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {stack.slice(0, 5).map((s, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-ink-3 text-[10px]">·</span>}
                <span className="text-[11px] text-ink-3 font-mono">{s}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Date + links */}
        <div className="flex flex-col items-end gap-2.5 shrink-0 pt-0.5">
          <span className="text-[11px] text-ink-3 whitespace-nowrap font-mono">
            {project.date || project.year}
          </span>
          <div className="flex gap-2 items-center">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-ink transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={13} />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-lime transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
