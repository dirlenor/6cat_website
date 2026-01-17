"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type ContactSectionProps = {
  t: TranslationValues;
};

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative z-10 w-full px-6 md:px-12 py-24 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              {t.contact.kicker}
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-display font-bold text-black dark:text-white">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-neutral-400 max-w-xl">
              {t.contact.description}
            </p>
            <div className="mt-8 rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/80 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {t.contact.quickLabel}
              </p>
              <p className="mt-3 text-lg font-semibold text-black dark:text-white">
                {t.contact.quickTitle}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                {t.contact.quickDescription}
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/80 p-6 md:p-8 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-gray-400 dark:text-neutral-500">
                {t.contact.form.nameLabel}
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black/20 px-4 py-3 text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder={t.contact.form.namePlaceholder}
                type="text"
                name="name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-gray-400 dark:text-neutral-500">
                {t.contact.form.emailLabel}
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black/20 px-4 py-3 text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder={t.contact.form.emailPlaceholder}
                type="email"
                name="email"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-gray-400 dark:text-neutral-500">
                {t.contact.form.messageLabel}
              </label>
              <textarea
                className="mt-2 w-full min-h-[140px] resize-none rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black/20 px-4 py-3 text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder={t.contact.form.messagePlaceholder}
                name="message"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary text-black font-semibold text-sm tracking-wide py-3 hover:bg-primary/90 transition-colors"
            >
              {t.contact.form.submit}
            </button>
            <p className="text-xs text-gray-400 dark:text-neutral-500">
              {t.contact.form.disclaimer}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
