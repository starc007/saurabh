"use client";

import { Tabs, TabsList, TabsTrigger } from "./beui/Tabs";

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
    <div className="mb-7 overflow-x-auto pb-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
      <Tabs value={active} onValueChange={(v) => onChange(v as FilterValue)} variant="pill">
        <TabsList className="min-w-max">
          {FILTERS.map((f) => {
            const count = counts?.[f.value];
            return (
              <TabsTrigger key={f.value} value={f.value}>
                <span className="inline-flex items-center gap-1.5">
                  {f.label}
                  {count !== undefined ? (
                    <span className="font-mono text-[10px] opacity-70">{count}</span>
                  ) : null}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default FilterChips;
