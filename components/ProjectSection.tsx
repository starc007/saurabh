"use client";

import React from "react";
import CustomSection from "./CustomSection";
import { RECENT_PROJECTS } from "@/utils/constant";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { useRouter } from "next/navigation";

const ProjectSection = () => {
  const router = useRouter();
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
      <div className="mt-5">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/projects")}
          className="text-[12px] font-medium text-ink-2 hover:text-ink border border-edge px-4 py-2 rounded-full hover:border-ink-3 transition-colors"
        >
          View all projects →
        </motion.button>
      </div>
    </CustomSection>
  );
};

export default ProjectSection;
