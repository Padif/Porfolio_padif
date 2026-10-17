"use client";

import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  badge,
  badgeIcon,
  titleA,
  titleB,
  sub1,
  sub2,
}: {
  badge: string;
  badgeIcon?: ReactNode;
  titleA: string;
  titleB: string;
  sub1: string;
  sub2: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-veil px-4 py-1.5 text-xs font-medium text-body">
        {badgeIcon}
        {badge}
      </span>
      <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-fore sm:text-6xl">
        {titleA}{" "}
        <span className="relative inline-block">
          <span className="grad-text">{titleB}</span>
          <svg
            className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3"
            viewBox="0 0 220 14"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M3 10.5C60 3 160 3 217 8.5"
              stroke={`url(#${id})`}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="220" y2="0">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <p className="mt-7 text-base leading-relaxed text-body sm:text-lg">
        {sub1} <span className="font-medium text-fore/70">{sub2}</span>
      </p>
    </div>
  );
}

export function DividerLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span
        className="h-px w-12 bg-linear-to-r from-transparent to-violet-400/60 sm:w-20"
        aria-hidden
      />
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
        {children}
      </p>
      <span
        className="h-px w-12 bg-linear-to-l from-transparent to-cyan-400/60 sm:w-20"
        aria-hidden
      />
    </div>
  );
}
