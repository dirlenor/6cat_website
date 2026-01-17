"use client";

import SiteScaffold from "../components/SiteScaffold";
import { useSiteContext } from "../components/SiteContext";

export default function AboutPage() {
  return (
    <SiteScaffold>
      <AboutContent />
    </SiteScaffold>
  );
}

function AboutContent() {
  const { t } = useSiteContext();

  return (
    <main className="min-h-screen bg-background-dark text-text-dark px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute right-10 top-10 h-3 w-3 rounded-full bg-primary"></div>
          <div className="absolute left-12 bottom-12 h-2 w-2 rounded-full bg-primary/80"></div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                {t.aboutPage.kicker}
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold text-white">
                {t.aboutPage.title}
              </h1>
              <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl">
                {t.aboutPage.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t.aboutPage.dnaTitle}
                </p>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.aboutPage.dnaItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t.aboutPage.studioTitle}
                </p>
                <div className="mt-5 space-y-3 text-sm text-white/70">
                  {t.aboutPage.studioLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.aboutPage.phases.map((card) => (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{card.tag}</p>
                  <h2 className="mt-4 text-xl font-display font-semibold text-white">{card.title}</h2>
                  <p className="mt-3 text-sm text-white/70">{card.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-primary/10 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {t.aboutPage.promiseTitle}
              </p>
              <h2 className="mt-4 text-2xl md:text-3xl font-display font-semibold text-white">
                {t.aboutPage.promiseHeadline}
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/70">
                {t.aboutPage.promiseBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
