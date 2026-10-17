import { getTranslations, roles } from "@/lib/translations";
import { useLanguageStore } from "@/store/useLanguageStore";
import { FadeIn } from "../ui/FadeIn";
import { SITE } from "@/lib/site";
import { Typewriter } from "react-simple-typewriter";
import { ScrollTo } from "../ui/ScrollTo";
import {
  HiOutlineArrowRight,
  HiOutlineCode,
  HiOutlinePaperAirplane,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";
import { SocialLinks } from "../ui/SosialLinks";
import { SiReact } from "react-icons/si";
import { DividerLabel } from "../ui/section-heading";
import { MARQUEE_SKILLS } from "@/lib/skills";

const Hero = () => {
  const lang = useLanguageStore((state) => state.language);
  const t = getTranslations(lang);

  return (
    <section id="home" className="scroll-mt-20 pt-26 lg:pt-50">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-veil px-4 py-1.5 text-xs font-medium text-body">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.badge}
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-7 font-mono text-sm text-accent sm:text-base">
              <span className="text-faint">{"//"} </span>
              {t.greet}
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <h1 className="mt-3 text-nowrap font-display text-4xl font-bold leading-[1.05] tracking-tight text-fore md:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="mt-4 flex min-h-[1.35em] items-center font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              <span className="grad-text">
                <Typewriter
                  key={lang}
                  words={roles[lang]}
                  loop={0}
                  cursor={false}
                  typeSpeed={75}
                  deleteSpeed={40}
                  delaySpeed={2100}
                />
              </span>
              <span
                className="animate-caret ml-1.5 inline-block h-[0.8em] w-0.75 rounded-full bg-accent"
                aria-hidden
              />
            </h2>
          </FadeIn>
          <FadeIn delay={0.26}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              {t.intro}
            </p>
          </FadeIn>
          <FadeIn
            delay={0.32}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ScrollTo
              to="projects"
              className="shadow-btn group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">{t.cta_work}</span>
              <HiOutlineArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ScrollTo>
            <ScrollTo
              to="contact"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-line bg-veil px-7 py-4 text-sm font-bold uppercase tracking-wider text-body transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-veil-2 hover:text-fore"
            >
              <HiOutlinePaperAirplane className="h-4 w-4" />
              {t.cta_touch}
            </ScrollTo>
          </FadeIn>
          <FadeIn
            delay={0.4}
            className="mt-11 flex flex-wrap items-center gap-x-5 gap-y-4"
          >
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">
              {t.find}
              <span className="h-px w-8 bg-line" aria-hidden />
            </p>
            <SocialLinks />
          </FadeIn>
        </div>
        <FadeIn
          delay={0.22}
          className="relative mx-auto aspect-square w-72 sm:w-96 lg:w-full lg:max-w-md"
        >
          <div className="orb absolute inset-[12%] rounded-full bg-violet-600/25 blur-3xl" />
          <div className="orb absolute inset-[30%] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="animate-ring-spin absolute inset-0 rounded-full border border-dashed border-faint/40" />
          <div className="animate-ring-spin-rev absolute inset-[9%] rounded-full border border-dotted border-faint/30" />

          <div className="animate-orbit absolute inset-0">
            {[
              {
                pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
                Icon: SiReact,
                label: "React",
                color: "text-accent",
              },
              {
                pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                Icon: HiOutlineShieldCheck,
                label: "Security",
                color: "text-emerald-400",
              },
              {
                pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                Icon: HiOutlineSparkles,
                label: "AI",
                color: "text-fuchsia-400",
              },
              {
                pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                Icon: HiOutlineCode,
                label: "Code",
                color: "text-accent-2",
              },
            ].map(({ pos, Icon, label, color }) => (
              <div key={label} className={`absolute ${pos}`}>
                <div className="animate-orbit-rev shadow-soft flex items-center gap-2 rounded-2xl border border-line bg-panel/90 px-3 py-2 backdrop-blur">
                  <Icon className={`h-4 w-4 ${color}`} />
                  <span className="text-[11px] font-semibold text-body">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute inset-[19%] rounded-full p-0.75"
            style={{
              background:
                "conic-gradient(from 120deg, #a78bfa, #e879f9, #22d3ee, #a78bfa)",
            }}
          >
            <div className="shadow-soft flex h-full w-full items-center justify-center rounded-full bg-panel">
              <span className="grad-text font-display text-6xl font-bold sm:text-7xl">
                {SITE.initials}
              </span>
            </div>
          </div>

          <div className="absolute -top-1 right-0 z-20 sm:-right-3">
            <div className="animate-float-soft shadow-soft flex items-center gap-2.5 rounded-2xl border border-line bg-panel/95 px-4 py-2.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-body">{t.open}</span>
            </div>
          </div>

          <div className="absolute -bottom-2 left-0 z-20 sm:-left-4">
            <div
              className="animate-float-soft shadow-soft rounded-2xl border border-white/10 bg-[#0a0a12] px-4 py-3 font-mono text-[11px] leading-relaxed"
              style={{ animationDelay: "-3.5s" }}
            >
              <p>
                <span className="text-violet-400">$ </span>
                <span className="text-zinc-300">whoami</span>
              </p>
              <p className="text-emerald-400">
                putra.adif
                <span className="animate-caret ml-0.5 inline-block h-[0.9em] w-0.5 rounded-sm bg-emerald-400" />
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.35} className="mt-20 sm:mt-30">
        <DividerLabel>{t.best}</DividerLabel>
        <div className="marquee marquee-mask mt-7 overflow-hidden border-y border-line py-5">
          <div className="marquee-track animate-marquee flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex items-center gap-3 pr-3"
                aria-hidden={copy === 1}
              >
                {MARQUEE_SKILLS.map((skill) => (
                  <li
                    key={`${copy}-${skill.name}`}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-veil px-4 py-2 text-sm font-medium text-body"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: skill.color }}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
