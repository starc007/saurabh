import CustomSection from "./CustomSection";
import { TECH_STACK } from "@/utils/constant";

const TechStack = () => {
  return (
    <CustomSection title="Stack">
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 border border-edge rounded-md text-[12px] font-mono text-ink-2 hover:border-ink-3 hover:text-ink transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </CustomSection>
  );
};

export default TechStack;
