import { motion } from "framer-motion";
import React from "react";

const CustomSection: React.FC<{
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}> = ({ title, children, id, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-20 scroll-mt-24 ${className}`}
      id={id}
    >
      <div className="flex items-center gap-3 mb-7">
        <span className="text-[11px] font-semibold text-ink-3 uppercase tracking-[0.18em] whitespace-nowrap">
          {title}
        </span>
        <div className="h-px flex-1 bg-edge-subtle" />
      </div>
      {children}
    </motion.section>
  );
};

export default CustomSection;
