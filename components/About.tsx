import CustomSection from "./CustomSection";

const ROLES = [
  { company: "NodeOps", period: "2024 — Present", url: "https://nodeops.network" },
  { company: "Bitbns", period: "2022 — 2024", url: "https://bitbns.com" },
];

export default function About() {
  return (
    <CustomSection title="Experience" id="about">
      <div className="space-y-4">
        {ROLES.map(role => (
          <div key={role.company} className="flex items-baseline justify-between gap-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-link text-[13px] font-medium">{role.company}</a>
              <span className="text-[12px] text-ink-2">Frontend Engineer</span>
            </div>
            <span className="shrink-0 text-[10px] font-mono text-ink-3">{role.period}</span>
          </div>
        ))}
      </div>
    </CustomSection>
  );
}
