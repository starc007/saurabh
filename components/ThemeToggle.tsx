"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" onClick={toggle} className="icon-button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      <span key={theme} className="theme-icon">{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</span>
    </button>
  );
}
