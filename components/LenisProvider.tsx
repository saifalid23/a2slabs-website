"use client";

import { ReactNode } from "react";

// Lenis disabled — native CSS scroll-snap handles cinematic snap transitions.
// Re-enable here if switching away from snap layout.
export default function LenisProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
