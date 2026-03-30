import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import { Project } from "@/utils/constant";
import { motion } from "framer-motion";

const ProjectItem: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index, isLast }) => {
  const stack = project.techStack || project.tech || [];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`py-5 group ${!isLast ? "border-b border-border/30" : ""}`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
            <h3 className="text-[16px] font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
              {project.title}
            </h3>
            {project.tag &&
              project.tag.map((t, idx) => (
                <span
                  key={`tag-${idx}`}
                  className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                    t === "Hackathon" || t === "Open Source"
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                      : "bg-surface text-secondary"
                  }`}
                >
                  {t}
                </span>
              ))}
            {project.users && (
              <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                {project.users} users
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-[13px] text-secondary leading-relaxed mb-2 max-w-[540px]">
            {project.description}
          </p>

          {/* Tech stack - dot separated */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {stack.slice(0, 6).map((s, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-border text-[10px]">·</span>}
                <span className="text-[11px] text-secondary/70 font-medium">
                  {s}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Date + links */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="text-[12px] text-secondary/60 whitespace-nowrap">
            {project.date || project.year}
          </span>
          <div className="flex gap-2.5 items-center">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/50 hover:text-foreground transition-colors"
              >
                <Github size={14} />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/50 hover:text-accent transition-colors"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectItem;
