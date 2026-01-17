"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type TestimonialsSectionProps = {
  t: TranslationValues;
};

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  return (
    <section className="relative z-10 w-full px-6 md:px-12 py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              {t.testimonials.kicker}
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-display font-bold text-black dark:text-white">
              {t.testimonials.title}
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-gray-600 dark:text-neutral-400">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/80 p-6 md:p-8 shadow-sm"
            >
              <p className="text-sm md:text-base text-gray-700 dark:text-neutral-300 leading-relaxed">
                “{item.quote}”
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-black dark:text-white">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-neutral-500 mt-1">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
