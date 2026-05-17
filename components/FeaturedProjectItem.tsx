"use client";

import { ArrowUpRight, Github } from "lucide-react";
import React, { useState } from "react";
import { Project } from "@/utils/constant";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedNumber } from "./beui/AnimatedNumber";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FeaturedProjectItem: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index, isLast }) => {
  const [hovered, setHovered] = useState(false);
  const stack = project.techStack || project.tech || [];
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group py-6 cursor-default ${!isLast ? "border-b border-edge-subtle" : ""}`}
    >
      {/* Hover fill */}
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

      <motion.div
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.2, ease }}
        className="relative flex justify-between items-start gap-5"
      >
        {/* Number prefix */}
        <span className="text-[11px] font-mono text-lime pt-1.5 tabular-nums select-none">
          {num}
        </span>

        <div className="flex-1 min-w-0">
          {/* Title + tags */}
          <div className="flex items-baseline gap-2.5 flex-wrap mb-1.5">
            <h3 className="text-[18px] font-bold text-ink tracking-[-0.02em] group-hover:text-lime transition-colors duration-200">
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
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-lime bg-lime-bg px-2 py-0.5 rounded-sm">
                <AnimatedNumber value={project.users} duration={1.6} />
                <span>+ users</span>
              </span>
            )}
          </div>

          {/* Description */}
          <p
            className="text-[13.5px] text-ink-2 leading-[1.6] mb-3 max-w-125"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
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

          {/* Note */}
          {project.note && (
            <p className="mt-3 flex items-start gap-2 text-[12px] text-ink-2 italic leading-[1.5] max-w-125">
              <span className="text-lime not-italic select-none mt-[2px]">↳</span>
              <span>{project.note}</span>
            </p>
          )}
        </div>

        {/* Date + links */}
        <div className="flex flex-col items-end gap-2.5 shrink-0 pt-1.5">
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
                <Github size={14} />
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
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProjectItem;
