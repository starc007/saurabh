"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} });

function subscribe(callback: () => void) {
  const sync = (event: StorageEvent) => {
    if (event.key !== "theme" && event.key !== null) return;
    document.documentElement.classList.toggle("dark", event.newValue === "dark");
    callback();
  };
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", sync);
  return () => {
    window.removeEventListener("themechange", callback);
    window.removeEventListener("storage", sync);
  };
}

function snapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function toggle() {
  const next = snapshot() === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", next === "dark");
  try { localStorage.setItem("theme", next); } catch { /* Theme still works when storage is unavailable. */ }
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, snapshot, () => "light" as const);
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
