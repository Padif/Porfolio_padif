"use client";
import { getTranslations } from "@/lib/translations";
import { useLanguageStore } from "@/store/useLanguageStore";
import Link from "next/link";
import {
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineX,
} from "react-icons/hi";
import { HiOutlineCodeBracket, HiOutlineEnvelope } from "react-icons/hi2";
import { ScrollTo } from "../ui/ScrollTo";
import { cn } from "@/lib/cn";
import { useThemeStore } from "@/store/useThemeStore";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NAV_ITEMS = [
  { to: "home", key: "nav_home", icon: HiOutlineHome },
  { to: "skills", key: "nav_skills", icon: HiOutlineCodeBracket },
  { to: "projects", key: "nav_projects", icon: HiOutlineBriefcase },
  { to: "contact", key: "nav_contact", icon: HiOutlineEnvelope },
] as const;

export function Navbar() {
  const { language, toggleLanguage } = useLanguageStore();
  const { theme, toggleTheme } = useThemeStore();
  const t = getTranslations(language);

  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="shadow-soft mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-line bg-surface/60 px-4 py-2 backdrop-blur-xl sm:px-5">
        <ScrollTo
          to="home"
          className="font-display text-lg font-bold tracking-tight text-fore"
        >
          Putra<span className="grad-text">AdiF</span>
          <span className="text-violet-400">.</span>
        </ScrollTo>

        <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <ScrollTo
                  to={item.to}
                  className="flex items-center gap-1 rounded-lg px-1.5 lg:px-4 py-2 text-body transition hover:bg-veil-2 hover:text-fore"
                  activeClass="nav-link-active"
                >
                  <Icon className="h-4 w-4" />
                  {t[item.key]}
                </ScrollTo>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          {/* toogle language */}
          <div className="flex items-center rounded-full border border-line p-0.5 text-[11px] font-semibold">
            {(["id", "en"] as const).map((code) => {
              const active = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={toggleLanguage}
                  className={cn(
                    "cursor-pointer rounded-full px-2.5 py-1 transition",
                    active
                      ? "bg-veil-2 text-fore"
                      : "text-faint hover:text-body",
                  )}
                >
                  {code.toUpperCase()}
                </button>
              );
            })}
          </div>
          {/* toggle dark mode */}
          <button
            type="button"
            aria-label={t.theme_toggle}
            onClick={toggleTheme}
            className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line text-body transition duration-300 hover:bg-veil-2 hover:text-fore focus-visible:ring-2 focus-visible:ring-violet-400/80"
          >
            <HiOutlineSun
              className={cn(
                "absolute h-4 w-4 transition-all duration-500",
                theme === "light" && "icon-off",
              )}
              aria-hidden
            />
            <HiOutlineMoon
              className={cn(
                "absolute h-4 w-4 transition-all duration-500",
                theme === "dark" && "icon-off",
              )}
              aria-hidden
            />
          </button>
          {/* download cv */}
          <Link
            href="/putra_adi_f-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-btn group relative overflow-hidden rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:brightness-110 inline-flex"
          >
            <span
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden="true"
            ></span>
            <span className="relative text-nowrap">Download CV</span>
          </Link>
          {/* menu */}
          <button
            type="button"
            aria-label={open ? t.menu_close : t.menu_open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line text-body transition hover:bg-veil-2 md:hidden"
          >
            {open ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden shadow-soft mx-auto mt-2 rounded-2xl border border-line bg-surface/90 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-3 py-2 ">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <ScrollTo
                      key={item.to}
                      to={item.to}
                      onClick={close}
                      className="flex items-center gap-2 rounded-xl px-2 py-2.5 text-sm font-medium text-body transition hover:bg-veil-2 hover:text-fore"
                      activeClass="bg-veil font-semibold text-fore"
                    >
                      <Icon className="h-4 w-4" />
                      {t[item.key]}
                    </ScrollTo>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
