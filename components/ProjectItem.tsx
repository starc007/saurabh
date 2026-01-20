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
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-8 md:pl-10 group"
    >
      {/* Timeline Line & Node */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
        {!isLast && (
          <div className="absolute top-[34px] bottom-0 left-0 w-[1px] bg-zinc-900 group-hover:bg-accent/20 transition-colors" />
        )}
        <div className="absolute top-8 -left-[4px] w-[9px] h-[9px] rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-accent group-hover:bg-accent group-hover:glow-lime transition-all duration-500" />
      </div>

      <div className="pb-10 md:pb-12 group-hover:translate-x-1 transition-transform duration-500">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] md:text-[11px] font-mono font-bold text-zinc-700 uppercase tracking-widest bg-zinc-950/50 px-2 py-0.5 rounded border border-zinc-900 shrink-0">
                {project.year || project.date || "2025"}
              </span>
              {project.users && (
                <div className="flex sm:hidden items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/5 border border-accent/20">
                  <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] font-mono text-accent uppercase font-bold tracking-tighter">
                    {project.users}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-[17px] md:text-[19px] font-semibold text-white group-hover:text-accent transition-colors tracking-tight">
                {project.title}
              </h3>
              {project.users && (
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/5 border border-accent/20 group-hover:border-accent/40 transition-all">
                  <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] font-mono text-accent uppercase font-bold tracking-tighter">
                    {project.users} Users
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 items-center mt-1 md:mt-0">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-white transition-all transform hover:scale-110"
              >
                <Github size={15} />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-accent transition-all transform hover:scale-110"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-[13px] md:text-[14px] text-zinc-500 leading-relaxed mb-4 max-w-[580px] opacity-60 group-hover:opacity-100 group-hover:text-zinc-300 transition-all duration-500 ease-out">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          {stack.slice(0, 8).map((s, idx) => (
            <span
              key={idx}
              className="text-[8px] md:text-[9px] font-mono uppercase tracking-wider text-zinc-700 border border-zinc-900/50 px-2 py-0.5 rounded-full group-hover:border-zinc-800 group-hover:text-zinc-600 transition-colors"
            >
              {s}
            </span>
          ))}
          {project.tag &&
            project.tag.map((t, idx) => (
              <span
                key={`tag-${idx}`}
                className="text-[8px] md:text-[9px] font-serif italic text-accent/40 group-hover:text-accent/60 transition-colors px-1"
              >
                • {t}
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectItem;
