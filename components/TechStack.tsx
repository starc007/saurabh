import CustomSection from "./CustomSection";
import { TECH_STACK } from "@/utils/constant";

const TechStack = () => {
  return (
    <CustomSection title="Tech Stack">
      <div className="flex flex-wrap gap-2.5">
        {TECH_STACK.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-surface border border-border rounded-full text-[13px] font-medium text-foreground/80 hover:border-secondary/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </CustomSection>
  );
};

export default TechStack;
