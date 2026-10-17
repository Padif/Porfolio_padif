"use client";

import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "aside";
}) {
  return (
    <Tag
      className={cn("card-glow spotlight shadow-soft relative", className)}
      onMouseMove={onSpotlightMove}
    >
      {children}
    </Tag>
  );
}
