"use client";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/section-heading";
import {
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineCode,
  HiOutlineCollection,
  HiOutlineDeviceMobile,
  HiOutlineDownload,
  HiOutlineExternalLink,
  HiOutlineEye,
  HiOutlineLightningBolt,
  HiOutlineStar,
  HiOutlineViewGrid,
  HiOutlineX,
  HiStar,
} from "react-icons/hi";
import { useLanguageStore } from "@/store/useLanguageStore";
import { getTranslations, showingText } from "@/lib/translations";
import {
  previewBg,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SITE } from "@/lib/site";
import Link from "next/link";

const FILTERS: {
  id: "all" | ProjectCategory;
  icon: typeof HiOutlineViewGrid;
  key: "filter_all" | "filter_web" | "filter_app" | "filter_uiux";
}[] = [
  { id: "all", icon: HiOutlineViewGrid, key: "filter_all" },
  { id: "web", icon: HiOutlineCode, key: "filter_web" },
  { id: "app", icon: HiOutlineDeviceMobile, key: "filter_app" },
  { id: "uiux", icon: HiOutlineCollection, key: "filter_uiux" },
];

const METRIC_ICONS = {
  users: HiOutlineEye,
  star: HiOutlineStar,
  layers: HiOutlineCollection,
  download: HiOutlineDownload,
  eye: HiOutlineEye,
};

const Project = () => {
  const lang = useLanguageStore((state) => state.language);
  const t = getTranslations(lang);
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [modal, setModal] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const visible = useMemo(
    () => PROJECTS.filter((p) => filter === "all" || p.cat === filter),
    [filter],
  );

  const catLabel = (cat: ProjectCategory) =>
    cat === "web" ? t.cat_web : cat === "app" ? t.cat_app : t.cat_uiux;
  return (
    <section id="projects" className="scroll-mt-28 pt-24 sm:pt-28">
      <FadeIn>
        <SectionHeading
          badge={t.projects_badge}
          badgeIcon={
            <HiOutlineLightningBolt className="h-3.5 w-3.5 text-violet-400" />
          }
          titleA={t.projects_h1_a}
          titleB={t.projects_h1_b}
          sub1={t.projects_sub1}
          sub2={t.projects_sub2}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <div
          className="flex flex-wrap justify-center gap-2 sm:justify-start"
          role="group"
        >
          {FILTERS.map((f) => {
            const count =
              f.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.cat === f.id).length;
            const active = filter === f.id;
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "filter-chip inline-flex items-center gap-2 rounded-full border border-line bg-veil px-4 py-2 text-[13px] font-medium text-body transition hover:border-line hover:text-fore",
                  active && "active",
                )}
                aria-pressed={active}
              >
                <Icon className="h-3.5 w-3.5" />
                {t[f.key]}
                <span className="rounded-full bg-veil-2 px-1.5 text-[10px] font-semibold tabular-nums">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-xs font-medium text-faint" aria-live="polite">
          {showingText(lang, visible.length, PROJECTS.length)}
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visible.map((p, i) => {
          const MetricIcon = METRIC_ICONS[p.metric.icon];
          return (
            <FadeIn key={p.id} delay={Math.min(i * 0.07, 0.42)}>
              <article
                role="button"
                tabIndex={0}
                onClick={() => setModal(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setModal(p);
                  }
                }}
                className="card-glow spotlight group relative cursor-pointer overflow-hidden rounded-3xl bg-panel/80 text-left backdrop-blur-sm outline-none hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-violet-400/80"
                style={{ ["--accent" as string]: p.accent }}
              >
                <div
                  className="relative aspect-16/10 overflow-hidden border-b border-line bg-surface"
                  style={previewBg(p)}
                >
                  <div className="bg-grid-sm absolute inset-0" />
                  <div className="absolute inset-0 flex items-end justify-center p-4">
                    {p.images && (
                      <div
                        className="animate-float-soft relative w-full h-full max-w-[85%] max-h-[85%] rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl mock-rise"
                        style={{ animationDelay: `-${(i * 1.7) % 5}s` }}
                      >
                        <Image
                          src={p.images[0]}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 80vw, 30vw"
                          className="object-cover brightness-85 contrast-95"
                        />
                        {/* <div className="absolute inset-0 bg-black/30 dark:bg-black/40 pointer-events-none" /> */}
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-surface/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex scale-90 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold tracking-wide text-zinc-900 uppercase shadow-2xl transition-transform duration-300 group-hover:scale-100">
                      <HiOutlineEye className="h-3.5 w-3.5" /> {t.view}
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 z-10">
                    <span className="flex items-center gap-1.5 rounded-full border border-line bg-veil px-2.5 py-1 text-[10px] font-semibold text-body backdrop-blur-md">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: p.accent }}
                      />
                      {catLabel(p.cat)}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5">
                    {p.featured && (
                      <span
                        className="flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold"
                        style={{ background: `${p.accent}26`, color: p.accent }}
                      >
                        <HiStar className="h-2.5 w-2.5" /> {t.featured}
                      </span>
                    )}
                    <span className="rounded-full border border-line bg-veil px-2.5 py-1 text-[10px] font-semibold tabular-nums text-body backdrop-blur-md">
                      {p.year}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold text-fore">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-relaxed text-body">
                    {p.tagline[lang]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line bg-veil px-2 py-1 text-[10px] font-medium text-body"
                      >
                        {tech}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="rounded-md border border-line bg-veil px-2 py-1 text-[10px] font-medium text-faint">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto">
                    <div className="my-5 h-px bg-linear-to-r from-line via-line to-transparent" />
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-xs text-faint">
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-md"
                          style={{
                            background: `${p.accent}1a`,
                            color: p.accent,
                          }}
                        >
                          <MetricIcon className="h-3 w-3" />
                        </span>
                        <span>
                          <span className="font-bold tabular-nums text-fore">
                            {p.metric.value}
                          </span>{" "}
                          {p.metric.label[lang]}
                        </span>
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs font-bold"
                        style={{ color: p.accent }}
                      >
                        {t.details}{" "}
                        <HiOutlineArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.4} className="mt-14 sm:mt-16">
        <SpotlightCard className="overflow-hidden rounded-3xl bg-panel/80 p-8 text-center backdrop-blur-sm sm:p-10">
          <h3 className="relative font-display text-2xl font-bold text-fore sm:text-3xl">
            {t.cta_title}
          </h3>
          <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-body sm:text-base">
            {t.cta_sub}
          </p>
          <div className="relative mt-5 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="shadow-btn group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition duration-300 hover:-translate-y-0.5"
            >
              <FaGithub className="relative h-4 w-4" />
              <span className="relative">{t.cta_btn}</span>
            </Link>
            <div className="flex items-center gap-5 text-xs font-medium text-faint">
              <span>{SITE.githubRepos} Repos</span>
              <span>{SITE.githubStars} Stars</span>
              <span>{SITE.githubCommits} Commits/yr</span>
            </div>
          </div>
        </SpotlightCard>
      </FadeIn>

      {modal && (
        <div className="fixed inset-0 z-70 flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label={t.close}
            onClick={() => setModal(null)}
          />
          <div
            role="dialog"
            aria-modal
            aria-labelledby="modalTitle"
            className="card-glow relative w-full max-w-3xl overflow-hidden rounded-3xl bg-panel shadow-soft"
          >
            <button
              type="button"
              aria-label={t.close}
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/80 text-body backdrop-blur-md transition hover:rotate-90 hover:text-fore"
            >
              <HiOutlineX className="h-4 w-4" />
            </button>
            <div className="max-h-[86vh] overflow-y-auto overscroll-contain">
              <div
                className="relative aspect-16/8 overflow-hidden sm:aspect-16/7"
                style={previewBg(modal)}
              >
                <div className="bg-grid-sm absolute inset-0" />
                {modal.images && modal.images.length >= 3 && (
                  <div className="relative inset-0 flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden">
                    {/* 1. KONTEN GALERI (Kotak-kotak Gambar) */}
                    {/* Menggunakan perspective agar efek miring/rotasi terlihat 3D */}
                    <div
                      className="relative w-full h-56 sm:h-64"
                      style={{ perspective: "1000px" }}
                    >
                      {modal.images.map((imgSrc, idx) => {
                        const length = modal.images.length;

                        // 🌟 LOGIKA PERHITUNGAN OFFSET YANG DIPERBAIKI (Circular Index)
                        // Menghasilkan nilai melingkar (contoh untuk 3 gambar): -1, 0, 1
                        let offset = idx - activeImageIndex;
                        if (offset < -1 && length > 2) offset = length + offset;
                        if (offset > 1 && length > 2) offset = offset - length;

                        // Menentukan visibilitas: Hanya tampilkan Kiri (-1), Tengah (0), Kanan (1)
                        const isCenter = offset === 0;
                        const isLeft = offset === -1;
                        const isRight = offset === 1;
                        const isVisible = isCenter || isLeft || isRight;

                        // Mendefinisikan class dinamis berdasarkan offset posisi
                        const posClass = isCenter
                          ? "w-[65%] h-full z-30 scale-100 opacity-100 rotate-y-0" // Gambar Utama di Tengah
                          : isLeft
                            ? "w-[35%] h-[75%] z-20 opacity-60 rotate-y-[8deg] -translate-x-[75%] scale-95" // Gambar Kiri (Miring Kiri)
                            : isRight
                              ? "w-[35%] h-[75%] z-20 opacity-60 rotate-y-[-8deg] translate-x-[75%] scale-95" // Gambar Kanan (Miring Kanan)
                              : "w-0 h-0 z-0 opacity-0"; // Untuk gambar yang disembunyikan

                        return (
                          <div
                            key={idx}
                            // Klik gambar samping untuk menjadikannya utama di tengah
                            onClick={() => setActiveImageIndex(idx)}
                            className={cn(
                              // Kelas Default untuk semua kotak gambar
                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-700 ease-in-out rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl flex items-center justify-center",
                              posClass, // <--- Memasukkan kelas posisi dinamis
                              !isVisible && "pointer-events-none", // Nonaktifkan klik gambar yang tidak terlihat
                            )}
                            style={{
                              // Menambahkan blur tipis khusus untuk gambar samping (opsional)
                              filter:
                                !isCenter && isVisible
                                  ? "blur(0.3px)"
                                  : "blur(0px)",
                            }}
                          >
                            {/* Menggunakan object-contain agar gambar landscape/portrait tampil utuh di bingkai */}
                            <Image
                              src={imgSrc}
                              alt={`${modal.title} - ${idx}`}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className={cn(
                                "object-contain transition-all duration-300 p-2",
                                !isCenter && "brightness-70 contrast-90", // Lebih redup untuk gambar samping
                              )}
                            />
                            {/* Overlay gelap tambahan khusus gambar samping agar makin menyatu */}
                            {!isCenter && isVisible && (
                              <div className="absolute inset-0 bg-black/45 pointer-events-none transition-opacity duration-300" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* 2. INDIKATOR TITIK (Dots) DI BAWAH GAMBAR */}
                    <div className="flex items-center justify-center gap-2 mt-4 z-40">
                      {modal.images.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={cn(
                            "h-2 rounded-full transition-all duration-300 cursor-pointer",
                            activeImageIndex === idx
                              ? "w-6 bg-violet-400" // Titik aktif memanjang dan berwarna aksen
                              : "w-2 bg-white/30 hover:bg-white/60", // Titik tidak aktif
                          )}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-9">
                <h3
                  id="modalTitle"
                  className="font-display text-2xl font-bold text-fore sm:text-3xl"
                >
                  {modal.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-body sm:text-[15px]">
                  {modal.desc[lang]}
                </p>
                <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-2xl border border-line bg-veil">
                  {[
                    [t.role, modal.role[lang]],
                    [t.year, String(modal.year)],
                    [t.type, modal.type[lang]],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="border-r border-line p-4 last:border-r-0 sm:p-5"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                        {k}
                      </p>
                      <p className="mt-1.5 truncate text-xs font-semibold text-fore sm:text-sm">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
                <h4 className="mt-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                  {t.key_features}
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {modal.features.map((f) => (
                    <li
                      key={f.en}
                      className="flex items-start gap-2.5 rounded-xl border border-line bg-veil p-3.5"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `${modal.accent}1f`,
                          color: modal.accent,
                        }}
                      >
                        <HiOutlineCheck className="h-3 w-3" />
                      </span>
                      <span className="text-[13px] leading-snug text-body">
                        {f[lang]}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={modal.demoUrl}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white"
                  >
                    <HiOutlineExternalLink className="h-4 w-4" /> {t.demo}
                  </a>
                  <a
                    href={modal.sourceUrl}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-veil px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-body"
                  >
                    <FaGithub className="h-4 w-4" /> {t.source}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
