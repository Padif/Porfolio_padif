"use client";

import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -20,
  duration: 500,
  spyThrottle: 100,
};

export function ScrollTo({
  to,
  children,
  className,
  activeClass,
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  activeClass?: string;
  onClick?: () => void;
}) {
  return (
    <ScrollLink
      to={to}
      {...scrollProps}
      className={cn("cursor-pointer", className)}
      activeClass={activeClass}
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  );
}
