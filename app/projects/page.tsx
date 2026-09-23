"use client";

import { EVERY_PROJECT } from "@/utils/constant";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import CustomSection from "@/components/CustomSection";
import ProjectItem from "@/components/ProjectItem";
import FilterChips, { FilterValue } from "@/components/FilterChips";
import { trackProjectFilterApplied } from "@/utils/analytics";

const ProjectPage = () => {
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

  const previousFilter = useRef(filter);
  useEffect(() => {
    // Record the committed filter result, skipping initial mount and reselection.
    if (previousFilter.current === filter) return;
    previousFilter.current = filter;
    trackProjectFilterApplied(filter, filtered.length);
  }, [filter, filtered.length]);

  return (
    <div className="enter">
      <Link href="/" className="text-link mb-6 text-[12px] text-ink-2">
        <ArrowLeft size={13} /> Home
      </Link>

      <CustomSection title="All Projects">
        <FilterChips active={filter} onChange={setFilter} counts={counts} />

        <div key={filter} className="filter-results" aria-live="polite">
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
        </div>
      </CustomSection>
    </div>
  );
};

export default ProjectPage;
