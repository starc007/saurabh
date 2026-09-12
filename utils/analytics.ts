import { createTracwell, type TracwellClient } from "tracwell";
import type { FilterValue } from "@/components/FilterChips";

let analytics: TracwellClient | undefined;

// Called by the root Client Component after mount, never during SSR.
export function initializeAnalytics() {
  if (typeof document === "undefined" || process.env.NODE_ENV !== "production") {
    return;
  }

  analytics ??= createTracwell({
    projectKey: "tw_live_abb277a0c7f74480990d1418c4f43b68",
    collectionMode: "product",
    consent: "granted",
    respectDoNotTrack: true,
  });
}

export function trackProjectFilterApplied(category: FilterValue, resultCount: number) {
  analytics?.track("project_filter_applied", {
    category,
    result_count: resultCount,
  });
}
