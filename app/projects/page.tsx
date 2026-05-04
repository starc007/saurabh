"use client";

import { ALL_PROJECTS } from "@/utils/constant";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import CustomSection from "@/components/CustomSection";
import ProjectItem from "@/components/ProjectItem";

const ProjectPage = () => {
  const router = useRouter();
  return (
    <motion.div
      key="projects-all"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="-mt-8"
    >
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-[12px] font-medium text-ink-2 hover:text-ink transition-colors mb-14 group"
      >
        <ArrowLeft
          size={13}
          className="group-hover:-translate-x-0.5 transition-transform"
        />
        Back
      </button>

      <CustomSection title="All Projects">
        <div className="flex flex-col">
          {[...ALL_PROJECTS].map((project, i, arr) => (
            <ProjectItem
              key={`all-${i}`}
              project={project}
              index={i}
              isLast={i === arr.length - 1}
            />
          ))}
        </div>
      </CustomSection>
    </motion.div>
  );
};

export default ProjectPage;
