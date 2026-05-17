"use client";

import React from "react";
import CustomSection from "./CustomSection";
import { FEATURED_PROJECTS } from "@/utils/constant";
import { ArrowRight } from "lucide-react";
import FeaturedProjectItem from "./FeaturedProjectItem";
import { useRouter } from "next/navigation";
import { Button } from "./beui/Button";

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
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/projects")}
          className="group text-ink-2 hover:text-ink hover:border-ink-3"
        >
          View all projects
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </CustomSection>
  );
};

export default ProjectSection;
