"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

// Expo-out: a long, smooth deceleration — the "very smooth" glide.
const EASE = [0.16, 1, 0.3, 1] as const;

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    case "scale":
      return { scale: 0.92 };
    case "fade":
    default:
      return {};
  }
}

/**
 * Reveals a block as it scrolls into view: it slides + fades in along the
 * chosen axis with a smooth expo-out glide. Honors prefers-reduced-motion
 * (falls back to a plain fade with no movement).
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 36,
  duration = 0.7,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : offsetFor(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduce ? 0.4 : duration,
        delay: reduce ? 0 : delay,
        ease: EASE,
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------- staggered groups ------------------------- */

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/**
 * Wrap a set of <RevealItem> children to make them cascade in one after
 * another as the group enters the viewport.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  direction = "up",
  distance = 36,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : offsetFor(direction, distance);
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...from },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: reduce ? 0.4 : 0.7, ease: EASE },
        },
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// kept for back-compat
export { containerVariants };
