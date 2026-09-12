"use client";

import { useEffect } from "react";
import { initializeAnalytics } from "@/utils/analytics";

export function TracwellAnalytics() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return null;
}
