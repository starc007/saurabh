import React from "react";
import CustomSection from "./CustomSection";
import { TECH_STACK } from "@/utils/constant";

const TechStack = () => {
  return (
    <CustomSection title="Tech Stack">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TECH_STACK.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 group p-2 rounded-lg hover:bg-foreground/5 transition-colors border border-transparent hover:border-foreground/5"
          >
            <div className="w-1 h-1 rounded-full bg-foreground/15 group-hover:bg-accent group-hover:glow-lime transition-all duration-300" />
            <span className="text-[12px] font-mono text-foreground/50 group-hover:text-foreground transition-colors duration-300 tracking-tight">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </CustomSection>
  );
};

export default TechStack;
