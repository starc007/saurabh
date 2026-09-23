"use client";


export type FilterValue = "all" | "product" | "experiment" | "web3" | "hackathon";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "product", label: "Products" },
  { value: "experiment", label: "Experiments" },
  { value: "web3", label: "Web3" },
  { value: "hackathon", label: "Hackathons" },
];

const FilterChips: React.FC<{
  active: FilterValue;
  onChange: (value: FilterValue) => void;
  counts?: Partial<Record<FilterValue, number>>;
}> = ({ active, onChange, counts }) => {
  return (
    <div className="mb-3 flex flex-wrap gap-1" role="group" aria-label="Filter projects">
      {FILTERS.map(({ value, label }) => (
        <button key={value} type="button" aria-pressed={active === value}
          onClick={() => onChange(value)}
          className={`filter-button ${active === value ? "is-active" : ""}`}>
          {label}<span className="font-mono text-[10px] text-ink-3">{counts?.[value]}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
