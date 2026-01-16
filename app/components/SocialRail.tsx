"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type SocialRailProps = {
  t: TranslationValues;
};

export default function SocialRail({ t }: SocialRailProps) {
  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-40 mix-blend-difference text-gray-500 dark:text-neutral-400">
      <a
        className="writing-mode-vertical rotate-180 hover:text-primary transition-colors flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
        href="#"
        style={{ writingMode: "vertical-rl" }}
      >
        {t.social.facebook}
      </a>
      <a
        className="writing-mode-vertical rotate-180 hover:text-primary transition-colors flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
        href="#"
        style={{ writingMode: "vertical-rl" }}
      >
        {t.social.instagram}
      </a>
    </div>
  );
}
