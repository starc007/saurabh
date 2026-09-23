import CustomSection from "./CustomSection";
import { TECH_STACK } from "@/utils/constant";

export default function TechStack() {
  return (
    <CustomSection title="Tools I reach for">
      <p className="text-[12px] leading-6 text-ink-2">{TECH_STACK.join(" · ")}</p>
    </CustomSection>
  );
}
