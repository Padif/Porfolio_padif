"use client";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "./CountUp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, on };
}

export function SkillBar({
  name,
  v,
  c,
  c2,
  delay,
  hideLabel = false,
}: {
  name: string;
  v: number;
  c: string;
  c2: string;
  delay: number;
  hideLabel?: boolean;
}) {
  const { ref, on } = useReveal();
  return (
    <div ref={ref} className={hideLabel ? "mt-4" : undefined}>
      {!hideLabel && (
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <span className="text-sm font-semibold text-fore">{name}</span>
          <CountUp
            target={v}
            suffix="%"
            delay={delay}
            className="text-sm font-bold tabular-nums"
          />
        </div>
      )}
      <div
        className="h-2 overflow-hidden rounded-full bg-veil-2"
        role="progressbar"
        aria-valuenow={v}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <div
          className={`skill-fill relative h-full overflow-hidden rounded-full ${on ? "on" : ""}`}
          style={{
            width: on ? `${v}%` : "0%",
            background: `linear-gradient(90deg,${c},${c2})`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
