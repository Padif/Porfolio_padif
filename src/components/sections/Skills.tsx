import {
  HiOutlineBookOpen,
  HiOutlineCloud,
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FadeIn } from "../ui/FadeIn";
import { DividerLabel, SectionHeading } from "../ui/section-heading";
import { useLanguageStore } from "@/store/useLanguageStore";
import { getTranslations } from "@/lib/translations";
import { LEARNING, SKILL_CATS } from "@/lib/skills";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SkillBar } from "../ui/SkillBar";
import { CountUp } from "../ui/CountUp";

function mix(c: string, pct: number) {
  return `color-mix(in srgb, ${c} ${pct}%, var(--color-fore))`;
}

const catIcons = {
  layout: HiOutlineDesktopComputer,
  server: HiOutlineServer,
  cloud: HiOutlineCloud,
} as const;

const Skills = () => {
  const lang = useLanguageStore((state) => state.language);
  const t = getTranslations(lang);
  return (
    <section id="skills" className="scroll-mt-28 pt-24 sm:pt-25">
      <FadeIn>
        <SectionHeading
          badge={t.skills_badge}
          badgeIcon={<HiOutlineSparkles className="h-3.5 w-3.5 text-accent" />}
          titleA={t.skills_h1_a}
          titleB={t.skills_h1_b}
          sub1={t.skills_sub1}
          sub2={t.skills_sub2}
        />
      </FadeIn>
      <FadeIn delay={0.3} className="mt-16 sm:mt-20">
        <DividerLabel>{t.dive}</DividerLabel>
      </FadeIn>

      <div className="mt-9 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {SKILL_CATS.map((cat, idx) => {
          const Icon = catIcons[cat.icon];
          return (
            <FadeIn key={cat.key} delay={0.15 + idx * 0.12}>
              <SpotlightCard
                as="article"
                className="flex flex-col rounded-3xl bg-panel/80 p-6 backdrop-blur-sm sm:p-7 h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                      style={{
                        borderColor: `${cat.c}30`,
                        background: `${cat.c}12`,
                        color: mix(cat.c, 72),
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-fore">
                        {t[cat.key]}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-faint">
                        {t.techs_count}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p
                      className="font-display text-3xl font-bold tabular-nums"
                      style={{ color: mix(cat.c, 72) }}
                    >
                      <CountUp target={cat.avg} suffix="%" delay={250} />
                    </p>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {t.avg_label}
                    </p>
                  </div>
                </div>
                <div className="my-6 h-px bg-line" />
                <div className="flex flex-1 flex-col justify-between gap-3">
                  {cat.skills.map((s, i) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      v={s.v}
                      c={cat.c}
                      c2={cat.c2}
                      delay={200 + i * 90}
                    />
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn className="mt-16 text-center sm:mt-20">
        <DividerLabel>{t.learning_title}</DividerLabel>
        <p className="mt-3 text-sm text-faint">{t.learning_sub}</p>
      </FadeIn>
      <div className="mt-9 grid gap-5 sm:grid-cols-3">
        {LEARNING.map((l, idx) => (
          <FadeIn key={l.name} delay={0.1 + idx * 0.1}>
            <SpotlightCard
              as="article"
              className="rounded-3xl bg-panel/80 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${l.c}30`,
                      background: `${l.c}12`,
                      color: mix(l.c, 72),
                    }}
                  >
                    <HiOutlineBookOpen className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-base font-bold text-fore">
                      {l.name}
                    </h3>
                    <p className="mt-0.5 truncate text-xs text-faint">
                      {t[l.key]}
                    </p>
                  </div>
                </div>
                <CountUp
                  target={l.v}
                  suffix="%"
                  delay={150}
                  className="shrink-0 text-lg font-bold tabular-nums"
                />
              </div>
              <SkillBar
                name={l.name}
                v={l.v}
                c={l.c}
                c2={l.c2}
                delay={0}
                hideLabel
              />
              <p className="mt-3.5 flex items-center gap-2 text-[11px] font-medium text-faint">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ background: l.c }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{ background: l.c }}
                  />
                </span>
                {t.in_progress}
              </p>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
