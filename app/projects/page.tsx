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
    <>
      <motion.div
        key="projects-all"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="-mt-10"
      >
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-secondary hover:text-foreground transition-colors mb-16 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Profile
        </button>

        <CustomSection title="Projects">
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
    </>
  );
};

export default ProjectPage;
