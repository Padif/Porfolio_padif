"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  target,
  suffix = "",
  delay = 0,
  className,
}: {
  target: number;
  suffix?: string;
  delay?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        if (reduce) {
          setValue(target);
          return;
        }
        const t0 = performance.now() + delay;
        const dur = 1500;
        const step = (now: number) => {
          if (now < t0) {
            requestAnimationFrame(step);
            return;
          }
          const p = Math.min((now - t0) / dur, 1);
          const e = 1 - (1 - p) ** 3;
          setValue(Math.round(e * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, target]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
