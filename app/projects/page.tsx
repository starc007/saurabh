"use client";

import { EVERY_PROJECT } from "@/utils/constant";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import CustomSection from "@/components/CustomSection";
import ProjectItem from "@/components/ProjectItem";
import FilterChips, { FilterValue } from "@/components/FilterChips";

const ProjectPage = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterValue>("all");

  const counts = useMemo(
    () => ({
      all: EVERY_PROJECT.length,
      product: EVERY_PROJECT.filter((p) => p.categories?.includes("product")).length,
      experiment: EVERY_PROJECT.filter((p) => p.categories?.includes("experiment")).length,
      web3: EVERY_PROJECT.filter((p) => p.categories?.includes("web3")).length,
      hackathon: EVERY_PROJECT.filter((p) => p.categories?.includes("hackathon")).length,
    }),
    []
  );

  const filtered = useMemo(() => {
    if (filter === "all") return EVERY_PROJECT;
    return EVERY_PROJECT.filter((p) => p.categories?.includes(filter));
  }, [filter]);

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
        <FilterChips active={filter} onChange={setFilter} counts={counts} />

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            {filtered.length === 0 ? (
              <p className="text-[13px] text-ink-3 py-8 text-center">
                No projects in this category yet.
              </p>
            ) : (
              filtered.map((project, i, arr) => (
                <ProjectItem
                  key={`${filter}-${project.title}-${i}`}
                  project={project}
                  index={i}
                  isLast={i === arr.length - 1}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </CustomSection>
    </motion.div>
  );
};

export default ProjectPage;
