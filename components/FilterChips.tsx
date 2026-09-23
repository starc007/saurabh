"use client";

import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

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
  const id = useId();
  const reducedMotion = useReducedMotion();
  const [keyboardSwitch, setKeyboardSwitch] = useState(false);

  return (
    <LayoutGroup id={id}>
    <div className="mb-3 flex flex-wrap gap-1" role="group" aria-label="Filter projects">
      {FILTERS.map(({ value, label }) => (
        <button key={value} type="button" aria-pressed={active === value}
          onClick={(event) => {
            setKeyboardSwitch(event.detail === 0);
            onChange(value);
          }}
          className={`filter-button ${active === value ? "is-active" : ""}`}>
          {active === value && (
            <motion.span
              aria-hidden="true"
              className="filter-selection"
              layoutId="filter-selection"
              initial={false}
              transition={reducedMotion || keyboardSwitch
                ? { duration: 0 }
                : { type: "spring", stiffness: 360, damping: 32, mass: 0.6 }}
            />
          )}
          <span className="filter-label">{label}</span><span className="filter-label font-mono text-[10px] text-ink-3">{counts?.[value]}</span>
        </button>
      ))}
    </div>
    </LayoutGroup>
  );
};

export default FilterChips;
