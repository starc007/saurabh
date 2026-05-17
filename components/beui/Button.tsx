"use client";

import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";
import { forwardRef, type ReactNode, useRef } from "react";
import { cn } from "@/utils/cn";

/* ============================================================
 * Base Button
 * ============================================================ */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pressScale?: number;
  children?: ReactNode;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "bg-ink text-canvas hover:bg-ink/90",
  secondary:
    "border border-edge bg-canvas-raised text-ink hover:border-ink-3 hover:bg-canvas-sunken",
  ghost: "text-ink-2 hover:text-ink hover:bg-canvas-raised",
  outline: "border border-edge bg-transparent text-ink hover:bg-canvas-raised",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-full",
  md: "h-10 px-5 text-sm gap-2 rounded-full",
  lg: "h-12 px-6 text-base gap-2 rounded-full",
  icon: "h-8 w-8 rounded-lg",
};

const PRESS_SPRING = { type: "spring" as const, stiffness: 500, damping: 30, mass: 0.6 };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", pressScale = 0.93, className, children, ...rest },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      type="button"
      whileTap={{ scale: pressScale }}
      whileHover={{ scale: 1.02 }}
      transition={PRESS_SPRING}
      className={cn(
        "inline-flex items-center justify-center font-medium select-none transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANT_CLASS[variant],
        SIZE_CLASS[size],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
});

/* ============================================================
 * Stateful Button (idle → loading → success / error)
 * ============================================================ */

export type ButtonState = "idle" | "loading" | "success" | "error";

export interface StatefulButtonProps extends Omit<ButtonProps, "children"> {
  state?: ButtonState;
  children: ReactNode;
  loadingText?: ReactNode;
  successText?: ReactNode;
  errorText?: ReactNode;
  icon?: ReactNode;
}

const SWAP_SPRING = { type: "spring" as const, stiffness: 460, damping: 30, mass: 0.55 };

function Slot({ keyId, children }: { keyId: string; children: ReactNode }) {
  return (
    <motion.span
      key={keyId}
      initial={{ y: 14, opacity: 0, filter: "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ y: -14, opacity: 0, filter: "blur(6px)" }}
      transition={SWAP_SPRING}
      className="inline-flex items-center gap-2 whitespace-nowrap"
    >
      {children}
    </motion.span>
  );
}

export const StatefulButton = forwardRef<HTMLButtonElement, StatefulButtonProps>(function StatefulButton(
  {
    state = "idle",
    children,
    loadingText = "Loading",
    successText = "Done",
    errorText = "Try again",
    icon,
    disabled,
    ...rest
  },
  ref,
) {
  const isBusy = state === "loading";
  return (
    <Button ref={ref} disabled={disabled || isBusy} aria-busy={isBusy} {...rest}>
      <motion.span
        layout
        transition={SWAP_SPRING}
        className="relative inline-flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {state === "idle" ? (
            <Slot keyId="idle">
              {children}
              {icon}
            </Slot>
          ) : null}
          {state === "loading" ? (
            <Slot keyId="loading">
              <Loader2 className="h-4 w-4 animate-spin" />
              {loadingText}
            </Slot>
          ) : null}
          {state === "success" ? (
            <Slot keyId="success">
              <Check className="h-4 w-4" />
              {successText}
            </Slot>
          ) : null}
          {state === "error" ? (
            <Slot keyId="error">
              <X className="h-4 w-4" />
              {errorText}
            </Slot>
          ) : null}
        </AnimatePresence>
      </motion.span>
    </Button>
  );
});

/* ============================================================
 * Magnetic Button
 * ============================================================ */

import { useMotionValue, useSpring } from "framer-motion";

export interface MagneticButtonProps extends ButtonProps {
  strength?: number;
  magneticClassName?: string;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(function MagneticButton(
  { strength = 0.25, magneticClassName, children, ...rest },
  ref,
) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", magneticClassName)}
    >
      <Button ref={ref} {...rest}>
        {children}
      </Button>
    </motion.div>
  );
});
