"use client";

import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

const SOCIALS: { href: string; label: string; Icon: IconType }[] = [
  { href: SITE.github, label: "GitHub", Icon: FaGithub },
  { href: SITE.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: SITE.instagram, label: "Instagram", Icon: FaInstagram },
  { href: SITE.twitter, label: "X / Twitter", Icon: FaXTwitter },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {SOCIALS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-veil text-body transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:text-fore hover:shadow-lg hover:shadow-violet-500/20"
        >
          <Icon size={18} aria-hidden />
        </a>
      ))}
    </div>
  );
}
