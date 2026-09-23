import { SharedLayoutBg } from "./beui/SharedLayoutBg";
import Link from "next/link";
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
      <SharedLayoutBg className="-mt-2" inset={10}>
        {FEATURED_PROJECTS.filter(project => !["Tracwell", "beUI", "beUI Pro"].includes(project.title)).slice(0, 5).map(project => <div key={project.id ?? project.title}><ProjectItem project={{ ...project, description: SUMMARIES[project.title] ?? project.description }} /></div>)}
      </SharedLayoutBg>
      <Link href="/projects" className="text-link mt-4 text-[12px] text-ink-2">All projects </Link>
    </CustomSection>
  );
}
