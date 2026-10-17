import { TranslationKey } from "./translations";

export const MARQUEE_SKILLS = [
  { name: "React", color: "#a78bfa" },
  { name: "Next.js", color: "#e879f9" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "JavaScript", color: "#facc15" },
  { name: "Node.js", color: "#3c873a" },
  { name: "MongoDB", color: "#4db33d" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
  { name: "Git", color: "#f05032" },
  { name: "GitHub", color: "#2c4457" },
  { name: "Nest.js", color: "#e0234e" },
  { name: "Express.js", color: "#7a0d0d" },
  { name: "GraphQL", color: "#e535ab" },
] as const;

export const SKILL_CATS = [
  {
    key: "cat_frontend" as const satisfies TranslationKey,
    c: "#a78bfa",
    c2: "#8b5cf6",
    avg: 90,
    icon: "layout",
    skills: [
      { name: "HTML/CSS", v: 95 },
      { name: "JavaScript", v: 90 },
      { name: "React/Next.js", v: 88 },
      { name: "TypeScript", v: 85 },
      { name: "Tailwind CSS", v: 92 },
    ],
  },
  {
    key: "cat_backend" as const satisfies TranslationKey,
    c: "#22d3ee",
    c2: "#0891b2",
    avg: 81,
    icon: "server",
    skills: [
      { name: "Node.js", v: 85 },
      { name: "Nets.Js", v: 70 },
      { name: "PostgreSQL", v: 78 },
      { name: "REST APIs", v: 88 },
      { name: "GraphQL", v: 75 },
    ],
  },
  {
    key: "cat_devops" as const satisfies TranslationKey,
    c: "#34d399",
    c2: "#059669",
    avg: 77,
    icon: "cloud",
    skills: [
      { name: "Docker", v: 70 },
      { name: "AWS", v: 65 },
      { name: "CI/CD", v: 78 },
      { name: "Linux", v: 72 },
      { name: "Git", v: 90 },
    ],
  },
] as const;

export const LEARNING = [
  { name: "Bun", v: 30, c: "#fb923c", c2: "#f97316", key: "learn_bun_d" },
  {
    name: "Cyber Scurity",
    v: 55,
    c: "#60a5fa",
    c2: "#3b82f6",
    key: "learn_cyberScurity_d",
  },
  {
    name: "Three.js",
    v: 35,
    c: "#e879f9",
    c2: "#c084fc",
    key: "learn_three_d",
  },
] as const satisfies readonly {
  name: string;
  v: number;
  c: string;
  c2: string;
  key: TranslationKey;
}[];
