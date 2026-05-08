"use client";

import { motion } from "framer-motion";

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
    <div className="flex items-center gap-1.5 flex-wrap mb-7">
      {FILTERS.map((f) => {
        const isActive = active === f.value;
        const count = counts?.[f.value];
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={`relative px-3 py-1.5 text-[12px] font-medium rounded-full transition-colors ${
              isActive
                ? "text-ink"
                : "text-ink-2 hover:text-ink"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-bg"
                className="absolute inset-0 rounded-full bg-canvas-raised border border-edge"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              {f.label}
              {count !== undefined && (
                <span className={`text-[10px] font-mono ${isActive ? "text-lime" : "text-ink-3"}`}>
                  {count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
