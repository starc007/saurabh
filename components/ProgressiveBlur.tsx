import React from "react";

// Stacked backdrop-blur layers, each revealed by an offset gradient mask, so the
// blur ramps up gradually toward the edge instead of a single hard cut. The
// canvas-colored tint underneath keeps text legible as it scrolls behind.
const LAYERS: { blur: number; stops: [number, number, number, number] }[] = [
  { blur: 0.5, stops: [0, 12.5, 25, 37.5] },
  { blur: 1, stops: [12.5, 25, 37.5, 50] },
  { blur: 2, stops: [25, 37.5, 50, 62.5] },
  { blur: 4, stops: [37.5, 50, 62.5, 75] },
  { blur: 8, stops: [50, 62.5, 75, 87.5] },
  { blur: 16, stops: [62.5, 75, 87.5, 100] },
];

export function ProgressiveBlur({
  position,
  className,
}: {
  position: "top" | "bottom";
  className?: string;
}) {
  // Edge sits where the blur is strongest: top bar ramps "to top", bottom "to bottom".
  const dir = position === "top" ? "to top" : "to bottom";
  const edge = position === "top" ? "-top-2 h-24" : "-bottom-2 h-28";
  const tint =
    position === "top"
      ? "linear-gradient(to bottom, var(--canvas) 0%, transparent 100%)"
      : "linear-gradient(to top, var(--canvas) 0%, transparent 100%)";

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-x-0 z-40 ${edge} ${className ?? ""}`}
    >
      {LAYERS.map((layer, i) => {
        const mask = `linear-gradient(${dir}, rgba(0,0,0,0) ${layer.stops[0]}%, rgba(0,0,0,1) ${layer.stops[1]}%, rgba(0,0,0,1) ${layer.stops[2]}%, rgba(0,0,0,0) ${layer.stops[3]}%)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${layer.blur}px)`,
              WebkitBackdropFilter: `blur(${layer.blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
      {/* Soft canvas fade so content dissolves into the edge, not just blurs. */}
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: tint }}
      />
    </div>
  );
}
