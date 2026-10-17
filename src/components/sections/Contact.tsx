"use client";
import { useLanguageStore } from "@/store/useLanguageStore";
import { FadeIn } from "../ui/FadeIn";
import { getTranslations, rotatingWords } from "@/lib/translations";
import { useEffect, useState } from "react";
import { SpotlightCard } from "../ui/SpotlightCard";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { SITE } from "@/lib/site";
import {
  HiOutlineCheck,
  HiOutlineClock,
  HiOutlineDuplicate,
  HiOutlineLocationMarker,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/cn";
import { SocialLinks } from "../ui/SosialLinks";

const TOPICS: {
  value: ContactInput["topic"];
  key: "chip1" | "chip2" | "chip3" | "chip4";
}[] = [
  { value: "web-project", key: "chip1" },
  { value: "collaboration", key: "chip2" },
  { value: "cybersecurity", key: "chip3" },
  { value: "just-saying-hi", key: "chip4" },
];

const fieldClass =
  "peer w-full rounded-2xl border border-line bg-veil px-4 pb-2.5 pt-6 text-sm font-medium text-fore caret-violet-400 outline-none transition-all duration-300 placeholder:text-transparent hover:border-line focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:shadow-[0_0_0_4px_rgb(139_92_246/0.12)]";

const labelClass =
  "pointer-events-none absolute left-4 top-7 -translate-y-1/2 text-sm text-faint transition-all duration-300 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-violet-300 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em]";

const Contact = () => {
  const lang = useLanguageStore((state) => state.language);
  const t = getTranslations(lang);
  const [wordIndex, setWordIndex] = useState(0);
  const [time, setTime] = useState("--:--");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "web-project",
      message: "",
    },
  });

  // const message = form.watch("message") ?? "";
  const message = useWatch({ control: form.control, name: "message" }) ?? "";

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: SITE.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords[lang].length);
    }, 3000);
    return () => clearInterval(id);
  }, [lang]);

  async function onSubmit(values: ContactInput) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      form.setError("root", { message: t.err_generic });
      return;
    }
    form.reset();
    setToast(true);
    window.setTimeout(() => setToast(false), 2600);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  }

  const submitting = form.formState.isSubmitting;

  return (
    <section id="contact" className="scroll-mt-28 pt-24 sm:pt-28">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-veil px-4 py-1.5 text-xs font-medium text-body">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.avail}
        </span>
        <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-fore sm:text-6xl">
          {t.contact_h1_a} <span className="grad-text">{t.contact_h1_b}</span>
        </h2>
        <p className="mt-7 text-base leading-relaxed text-body sm:text-lg">
          {t.contact_sub1}{" "}
          <span className="font-semibold text-violet-300">
            {rotatingWords[lang][wordIndex]}
          </span>{" "}
          {t.contact_sub2}
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <FadeIn delay={0.15} className="lg:col-span-5">
          <SpotlightCard
            as="aside"
            className="flex h-full flex-col rounded-3xl bg-panel/80 backdrop-blur-sm"
          >
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-cyan-600 font-display text-xl font-bold text-white">
                  {SITE.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-fore">
                    {SITE.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-body">
                    {t.contact_role}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                {t.info}
              </p>
              <div className="mt-3 space-y-1.5">
                <a
                  href={SITE.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-veil"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-body group-hover:text-violet-300">
                    <HiOutlinePhone size={18} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {t.phone}
                    </span>
                    <span className="text-sm font-medium text-fore">
                      {SITE.phone}
                    </span>
                  </span>
                </a>
                <div className="group flex items-center gap-4 rounded-2xl p-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-body">
                    <HiOutlineMail size={18} />
                  </span>
                  <a href={`mailto:${SITE.email}`} className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {t.email}
                    </span>
                    <span className="block truncate text-sm font-medium text-fore">
                      {SITE.email}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={cn(
                      "flex shrink-0 items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[11px] font-medium text-faint",
                      copied &&
                        "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
                    )}
                  >
                    <HiOutlineDuplicate size={13} />
                    {copied ? t.copied : t.copy}
                  </button>
                </div>
                <div className="flex items-center gap-4 p-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-body">
                    <HiOutlineLocationMarker size={18} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {t.loc}
                    </span>
                    <span className="text-sm font-medium text-fore">
                      {SITE.location}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-body">
                    <HiOutlineClock size={18} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {t.time}
                    </span>
                    <span className="text-sm font-medium text-fore">
                      {time} · {SITE.timezoneLabel}
                    </span>
                  </span>
                </div>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                {t.find_on}
              </p>
              <SocialLinks className="mt-3" />

              <div className="mt-auto pt-8">
                <div className="flex items-center gap-3.5 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <HiOutlinePaperAirplane size={16} />
                  </span>
                  <p className="text-xs leading-relaxed text-body">
                    {t.resp1}{" "}
                    <span className="font-semibold text-emerald-400">
                      {t.resp2}
                    </span>{" "}
                    {t.resp3}
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

        <FadeIn delay={0.3} className="lg:col-span-7">
          <SpotlightCard className="rounded-3xl bg-panel/80 backdrop-blur-sm">
            <form
              className="p-7 sm:p-8 lg:p-10"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-fore">
                    {t.form_title}
                  </h3>
                  <p className="mt-1.5 text-sm text-faint">{t.form_sub}</p>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full border border-line bg-veil px-3 py-1.5 text-[11px] font-medium text-faint sm:inline-flex">
                  <HiOutlineShieldCheck className="h-3.5 w-3.5" />
                  {t.safe}
                </span>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label={t.label_name}
                  error={form.formState.errors.name ? t.err_name : undefined}
                >
                  <input
                    id="name"
                    placeholder=" "
                    className={fieldClass}
                    {...form.register("name")}
                  />
                </Field>
                <Field id="phone" label={t.label_phone}>
                  <input
                    id="phone"
                    type="tel"
                    placeholder=" "
                    className={fieldClass}
                    {...form.register("phone")}
                  />
                </Field>
                <Field
                  id="email"
                  className="sm:col-span-2"
                  label={t.label_email}
                  error={form.formState.errors.email ? t.err_email : undefined}
                >
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    className={fieldClass}
                    {...form.register("email")}
                  />
                </Field>

                <fieldset className="sm:col-span-2">
                  <legend className="text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                    {t.legend}
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TOPICS.map((topic) => (
                      <label key={topic.value}>
                        <input
                          type="radio"
                          value={topic.value}
                          className="peer sr-only"
                          {...form.register("topic")}
                        />
                        <span className="inline-flex cursor-pointer select-none items-center rounded-full border border-line bg-veil px-4 py-2 text-xs font-medium text-body transition peer-checked:border-violet-500/60 peer-checked:bg-violet-500/15 peer-checked:text-fore">
                          {t[topic.key]}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field
                  id="message"
                  className="sm:col-span-2"
                  label={t.label_msg}
                  error={form.formState.errors.message ? t.err_msg : undefined}
                >
                  <textarea
                    id="message"
                    rows={5}
                    maxLength={500}
                    placeholder=" "
                    className={`${fieldClass} resize-none pb-8`}
                    {...form.register("message")}
                  />
                  <span
                    className={cn(
                      "pointer-events-none absolute right-4 bottom-3.5 text-[11px] font-medium tabular-nums text-faint",
                      message.length > 450 && "text-amber-400",
                      message.length >= 500 && "text-red-400",
                    )}
                  >
                    {message.length}/500
                  </span>
                </Field>

                <div className="flex flex-col-reverse items-stretch justify-between gap-5 sm:col-span-2 sm:flex-row sm:items-center">
                  <p className="flex items-center justify-center gap-2 text-xs text-faint sm:justify-start">
                    <HiOutlineLockClosed className="h-3.5 w-3.5" />
                    {t.privacy}
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="shadow-btn group relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 px-8 py-4 text-sm font-bold tracking-[0.08em] text-white uppercase disabled:opacity-60"
                  >
                    <HiOutlinePaperAirplane className="relative h-4 w-4" />
                    <span className="relative">
                      {submitting ? t.sending : t.send}
                    </span>
                  </button>
                </div>
                {form.formState.errors.root && (
                  <p className="sm:col-span-2 text-sm text-red-400">
                    {form.formState.errors.root.message}
                  </p>
                )}
              </div>
            </form>
          </SpotlightCard>
        </FadeIn>
      </div>

      <div
        role="status"
        className={cn(
          "fixed bottom-6 left-1/2 z-60 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-500",
          toast
            ? "translate-y-0 opacity-100"
            : "invisible translate-y-8 opacity-0",
        )}
      >
        <div className="flex items-start gap-3.5 rounded-2xl border border-emerald-500/25 bg-panel/90 p-4 shadow-soft backdrop-blur-xl">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
            <HiOutlineCheck size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-fore">{t.toast_title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-body">
              {t.toast_sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function Field({
  id,
  label,
  children,
  error,
  className,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", error && "shake", className)}>
      {children}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {error && (
        <p className="mt-2 text-xs font-medium text-red-400">{error}</p>
      )}
    </div>
  );
}
export default Contact;
