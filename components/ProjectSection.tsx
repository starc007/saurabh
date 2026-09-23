import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CustomSection from "./CustomSection";
import { FEATURED_PROJECTS } from "@/utils/constant";
import ProjectItem from "./ProjectItem";

const SUMMARIES: Record<string, string> = {
  beUI: "Open-source motion components for React and Next.js.",
  "beUI Pro": "Production-ready components and blocks, with lifetime access.",
  "Hydra Agent": "Autonomous liquidity management for Uniswap v4.",
  "Programmable Virtual Addresses": "Rule-based token payments on Tempo. Live on testnet.",
  Sentinel: "Reputation and spending limits for AI agent wallets.",
};

export default function ProjectSection() {
  return (
    <CustomSection title="More projects" id="projects">
      <div className="-mt-2">
        {FEATURED_PROJECTS.slice(2, 7).map(project => <ProjectItem key={project.id ?? project.title} project={{ ...project, description: SUMMARIES[project.title] ?? project.description }} />)}
      </div>
      <Link href="/projects" className="text-link mt-4 text-[12px] text-ink-2">All projects <ArrowRight size={13} /></Link>
    </CustomSection>
  );
}
