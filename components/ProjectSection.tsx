"use client";

import React from "react";
import CustomSection from "./CustomSection";
import { FEATURED_PROJECTS } from "@/utils/constant";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FeaturedProjectItem from "./FeaturedProjectItem";
import { useRouter } from "next/navigation";

const ProjectSection = () => {
  const router = useRouter();
  return (
    <CustomSection title="Featured" id="projects">
      <div className="flex flex-col">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedProjectItem
            key={`featured-${i}`}
            project={project}
            index={i}
            isLast={i === FEATURED_PROJECTS.length - 1}
          />
        ))}
      </div>
      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/projects")}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-2 hover:text-ink border border-edge px-4 py-2 rounded-full hover:border-ink-3 transition-colors group"
        >
          View all projects
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      </div>
    </CustomSection>
  );
};

export default ProjectSection;
