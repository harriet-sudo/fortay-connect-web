"use client";

import { forwardRef } from "react";

/**
 * Bold decorative circle/ring elements in brand teal & purple.
 * Use as section-bridging graphic accents — always behind content.
 */

type Props = {
  color?: "teal" | "purple";
  /** CSS classes for positioning (absolute + inset overrides) */
  className?: string;
  /** Ring (hollow) or filled disc */
  variant?: "ring" | "disc";
  size?: string;
};

const colorMap = {
  teal: "border-primary bg-primary",
  purple: "border-purple bg-purple",
};

const DecorativeCircle = forwardRef<HTMLDivElement, Props>(({
  color = "purple",
  className = "",
  variant = "ring",
  size = "h-64 w-64 md:h-96 md:w-96",
}, ref) => {
  const base = `pointer-events-none absolute z-0 rounded-full ${size} ${className}`;

  if (variant === "ring") {
    return (
      <div
        ref={ref}
        className={`${base} border-[32px] md:border-[44px] ${colorMap[color].split(" ")[0]} bg-transparent`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={ref}
      className={`${base} ${colorMap[color].split(" ")[1]}`}
      aria-hidden="true"
    />
  );
});

DecorativeCircle.displayName = "DecorativeCircle";

export default DecorativeCircle;
