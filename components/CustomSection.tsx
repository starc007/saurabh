import { motion } from 'framer-motion';
import React from 'react'

const CustomSection: React.FC<{ title: string; children: React.ReactNode; id?: string; className?: string }> = ({ title, children, id, className = "" }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-24 scroll-mt-24 ${className}`}
            id={id}
        >
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/50 whitespace-nowrap">{title}</h2>
                <div className="h-px w-full bg-foreground/5" />
            </div>
            {children}
        </motion.section>
    )
}

export default CustomSection