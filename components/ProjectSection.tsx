import React from 'react'
import CustomSection from './CustomSection'
import { PROJECTS } from '@/constant'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'


const ProjectSection = () => {
    return (
        <CustomSection title="Selected Works" id="projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex flex-col p-6 rounded-3xl border border-foreground/5 hover:border-accent/30 transition-all relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-[10px] font-mono text-foreground/50 tracking-widest uppercase">
                                {project.year} — {project.category}
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-foreground/5 border border-foreground/5 text-foreground/50 hover:text-accent transition-all shadow-lg backdrop-blur-sm"
                                    >
                                        <Github size={14} />
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-foreground/5 border border-foreground/5 text-foreground/50 hover:text-accent transition-all shadow-lg backdrop-blur-sm"
                                    >
                                        <ArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-serif italic text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                            {project.title}
                        </h3>

                        <p className="text-[13px] text-foreground/50 leading-relaxed mb-6 group-hover:text-foreground/40 transition-colors">
                            {project.description}
                        </p>

                    </motion.div>
                ))}
            </div>
        </CustomSection>
    )
}

export default ProjectSection