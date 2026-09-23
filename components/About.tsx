import Image from "next/image";
import CustomSection from "./CustomSection";

const ROLES = [
  { company: "NodeOps", icon: "/companies/nodeops.png", period: "2024 — Present", url: "https://nodeops.network" },
  { company: "Bitbns", icon: "/companies/bitbns.png", period: "2022 — 2024", url: "https://bitbns.com" },
];

export default function About() {
  return (
    <CustomSection title="Experience" id="about">
      <div className="space-y-4">
        {ROLES.map(role => (
          <div key={role.company} className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-link gap-2 text-[13px] font-medium">
                <Image unoptimized src={role.icon} alt="" width={20} height={20} className="shrink-0 rounded-[5px]" />
                {role.company}
              </a>
              <span className="pl-7 text-[12px] text-ink-2 sm:pl-0">Frontend Engineer</span>
            </div>
            <span className="shrink-0 text-[10px] font-mono text-ink-3">{role.period}</span>
          </div>
        ))}
      </div>
    </CustomSection>
  );
}
