import React from 'react'
import CustomSection from './CustomSection'
import { RECENT_PROJECTS } from '@/utils/constant'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import ProjectItem from './ProjectItem'
import { useRouter } from 'next/navigation'


const ProjectSection = () => {
    const router = useRouter()
    return (
        <CustomSection title="Recent Projects" id="projects">
            <div className="flex flex-col">
                {RECENT_PROJECTS.map((project, i) => (
                    <ProjectItem
                        key={`recent-${i}`}
                        project={project}
                        index={i}
                        isLast={i === RECENT_PROJECTS.length - 1}
                    />
                ))}
            </div>
            <motion.button
                whileHover={{ x: 5 }}
                onClick={() => router.push('/projects')}
                className="mt-4 flex items-center gap-3 text-[11px] uppercase font-bold tracking-[0.3em] text-zinc-700 hover:text-accent transition-all group"
            >
                <div className="w-8 h-[1px] bg-zinc-900 group-hover:bg-accent transition-colors" />
                View Archive <ChevronRight size={12} />
            </motion.button>
        </CustomSection>
    )
}

export default ProjectSection