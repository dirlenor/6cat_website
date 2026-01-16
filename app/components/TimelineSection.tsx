"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type TimelineSectionProps = {
  t: TranslationValues;
};

export default function TimelineSection({ t }: TimelineSectionProps) {
  return (
    <section className="relative z-10 w-full px-6 md:px-12 py-24 md:py-32 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="inline-block h-[1px] w-10 bg-gray-300 dark:bg-neutral-700"></span>
            <span>{t.timeline.kicker}</span>
            <span className="inline-block h-[1px] w-10 bg-gray-300 dark:bg-neutral-700"></span>
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-black dark:text-white leading-tight">
            {t.timeline.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
            {t.timeline.description}
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto rounded-3xl border border-gray-200 dark:border-neutral-800 bg-black/90 dark:bg-neutral-900 p-6 text-white text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {t.timeline.promiseLabel}
          </p>
          <p className="mt-4 text-lg md:text-xl font-semibold">
            {t.timeline.promiseTitle}
          </p>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {t.timeline.promiseDescription}
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-3 h-px bg-gray-200 dark:bg-neutral-800"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.timeline.steps.map((step, index) => (
              <div key={step.title} className="relative md:pt-10">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary timeline-pulse-dot md:left-1/2 md:-translate-x-1/2 md:top-0"></div>
                <div className="rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary">
                      {step.label}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-neutral-400">
                      {t.timeline.stepPrefix} {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-display font-semibold text-black dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
                    {step.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
