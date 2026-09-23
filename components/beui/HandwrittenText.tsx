"use client";

import { motion, useReducedMotion } from "motion/react";

type Stroke = {
  path: string;
  /** Relative pen travel, used to keep drawing speed consistent. */
  weight: number;
};

type HandwrittenTextProps = {
  label: string;
  strokes: readonly Stroke[];
  viewBox: string;
  className?: string;
  duration?: number;
  decorative?: boolean;
};

/** Draws supplied centerline lettering once when it enters the viewport. */
export function HandwrittenText({
  label,
  strokes,
  viewBox,
  className,
  duration = 2,
  decorative = false,
}: HandwrittenTextProps) {
  const reduceMotion = useReducedMotion();
  const totalWeight = strokes.reduce((total, stroke) => total + stroke.weight, 0);
  const drawDuration = Number.isFinite(duration) ? Math.max(0, duration) : 2;

  return (
    <motion.svg
      viewBox={viewBox}
      className={className}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="drawn"
      viewport={{ once: true, amount: 0.8 }}
    >
      {strokes.map((stroke, index) => {
        const elapsedWeight = strokes.slice(0, index).reduce((total, preceding) => total + preceding.weight, 0);
        const delay = totalWeight > 0 ? (elapsedWeight / totalWeight) * drawDuration : 0;
        const segmentDuration = totalWeight > 0 ? (stroke.weight / totalWeight) * drawDuration : 0;

        return (
          <motion.path
            key={index}
            d={stroke.path}
            className="handwritten-stroke"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              drawn: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: { duration: reduceMotion ? 0 : segmentDuration, delay: reduceMotion ? 0 : delay, ease: "linear" },
                  opacity: { duration: 0, delay: reduceMotion ? 0 : delay },
                },
              },
            }}
          />
        );
      })}
    </motion.svg>
  );
}
