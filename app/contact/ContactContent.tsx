"use client";

import { useSiteContext } from "../components/SiteContext";

export default function ContactContent() {
  const { t } = useSiteContext();

  return (
    <main className="min-h-screen bg-background-dark text-text-dark px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="absolute -top-20 right-6 h-48 w-48 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="absolute bottom-8 left-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                {t.contactPage.kicker}
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold text-white">
                {t.contactPage.title}
              </h1>
              <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl">
                {t.contactPage.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <form className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {t.contactPage.nameLabel}
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder={t.contactPage.namePlaceholder}
                    type="text"
                    name="name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {t.contactPage.emailLabel}
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder={t.contactPage.emailPlaceholder}
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    className="mt-2 w-full min-h-[160px] resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder={t.contactPage.messagePlaceholder}
                    name="message"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {t.contactPage.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary text-black font-semibold text-sm tracking-wide py-3 hover:bg-primary/90 transition-colors"
                >
                  {t.contactPage.submit}
                </button>
              </form>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t.contactPage.studioLabel}
                </p>
                <h2 className="mt-4 text-xl font-display font-semibold text-white">
                  {t.contactPage.studioCity}
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  {t.contactPage.studioAddress}
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                  <div className="relative h-[280px]">
                    <iframe
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=Tha-sai%20Nonthaburi%2011000&output=embed"
                      title="6CAT Agency Map"
                    ></iframe>
                    <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80">
                      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80 opacity-60"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                      </span>
                      {t.contactPage.studioAddress}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-sm text-white/80">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {t.contactPage.emailTitle}
                    </p>
                    <p className="mt-2">hello@6catagency.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {t.contactPage.phoneTitle}
                    </p>
                    <p className="mt-2">+66 82 000 0000</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {t.contactPage.hoursTitle}
                    </p>
                    <p className="mt-2">{t.contactPage.hoursValue}</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-4 text-xs uppercase tracking-[0.25em] text-white/70">
                  {t.contactPage.note}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
