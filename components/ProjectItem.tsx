import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react'
import { Project } from '@/utils/constant';
import { motion } from 'framer-motion';


const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-zinc-900/30 last:border-0 hover:bg-zinc-900/10 px-4 -mx-4 rounded-xl transition-all duration-300"
    >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 mb-4 sm:mb-0">
            <span className="text-[11px] font-mono text-zinc-800 uppercase tracking-widest min-w-[60px]">
                {project.year || project.date || '2024'}
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <h3 className="text-[17px] font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <span className="text-[12px] font-serif italic text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    {project.category}
                </span>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <p className="hidden md:block text-[13px] text-zinc-800 group-hover:text-zinc-700 transition-colors max-w-[240px] truncate text-right">
                {project.description}
            </p>

            <div className="flex gap-4">
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 hover:text-accent transition-colors"
                    >
                        <Github size={16} />
                    </a>
                )}
                {project.demoLink && (
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 hover:text-accent transition-colors"
                    >
                        <ArrowUpRight size={18} />
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);
export default ProjectItem