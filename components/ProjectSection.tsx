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
                    <ProjectItem key={project.id} project={project} index={i} />
                ))}
            </div>
            <motion.button
                whileHover={{ x: 5 }}
                onClick={() => router.push('/projects')}
                className="mt-8 flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-accent hover:text-white transition-colors"
            >
                View All Works <ChevronRight size={12} />
            </motion.button>
        </CustomSection>
    )
}

export default ProjectSection