import type { Project } from "./constant";

export function getProjectMetrics(project: Pick<Project, "users" | "metrics">): string[] {
  return [
    ...(typeof project.users === "number" && project.users > 0
      ? [`${project.users >= 100000 ? new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(project.users).toLowerCase() : project.users.toLocaleString("en-US")}+ users`]
      : []),
    ...(project.metrics ?? []),
  ];
}
