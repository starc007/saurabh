import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/utils/constant";

export default function ProjectItem({ project }: { project: Project; index?: number; isLast?: boolean }) {
  const demo = project.demoLink || project.demo;
  const source = project.githubLink || project.github;
  const primary = demo || source;
  return (
    <article className="project-row group" data-preview-title={project.title} data-preview-description={project.description} data-preview-detail={(project.techStack || project.tech || []).join(" · ")}>
      <div className="min-w-0 flex-1">
        <h3 className="text-[13px] font-medium tracking-[-0.015em]">
          {primary ? <a href={primary} target="_blank" rel="noopener noreferrer" className="text-link">{project.title}<ArrowUpRight size={12} className="project-arrow" /></a> : project.title}
        </h3>
        <p className="mt-1 text-[12px] leading-[1.65] text-ink-2">{project.description}</p>
        {project.note && <p className="mt-1 text-[11px] leading-relaxed text-ink-3">{project.note}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-2 pt-0.5">
        <span className="text-[10px] font-mono text-ink-3">{project.year}</span>
        {source ? <a href={source} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label={`View ${project.title} source on GitHub`}><Github size={14} /></a> : <span className="w-8" aria-hidden="true" />}
      </div>
    </article>
  );
}
