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
      <div className="mt-6 flex justify-start">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push("/projects")}
          className="text-[13px] font-semibold text-foreground px-5 py-2.5 border-[1.5px] border-border rounded-full hover:bg-surface transition-colors"
        >
          View all projects →
        </motion.button>
      </div>
    </CustomSection>
  );
};

export default ProjectSection;
