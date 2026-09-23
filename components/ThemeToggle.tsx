"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" onClick={toggle} className="icon-button theme-toggle" data-theme={theme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      <Sun className="theme-sun" size={15} aria-hidden="true" />
      <Moon className="theme-moon" size={15} aria-hidden="true" />
    </button>
  );
}
