"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type AboutSectionProps = {
  t: TranslationValues;
};

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="relative z-10 w-full px-6 md:px-12 py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="inline-block h-[1px] w-10 bg-gray-300 dark:bg-neutral-700"></span>
            <span>{t.about.kicker}</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-black dark:text-white leading-tight">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
            {t.about.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.about.principles.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-neutral-800 text-sm font-semibold text-black dark:text-white bg-white/70 dark:bg-neutral-900/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 p-8">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
            <div className="absolute right-10 top-10 h-3 w-3 rounded-full bg-primary about-pulse-dot"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {t.about.manifestoTitle}
            </p>
            <div className="mt-6 space-y-5">
              {t.about.manifesto.map((line, index) => (
                <div key={line} className="flex items-start gap-4">
                  <span className="text-xl font-display font-bold text-black/20 dark:text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base md:text-lg text-black dark:text-white leading-relaxed">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.focus.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 dark:border-neutral-800 bg-black/90 dark:bg-neutral-900 p-6 text-white"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  {item.label}
                </p>
                <h3 className="mt-4 text-2xl font-display font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
