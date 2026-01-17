"use client";

import { useSiteContext } from "../components/SiteContext";

const imageVariants = [
  "from-primary/40 via-white/10 to-black/70",
  "from-black/40 via-primary/30 to-white/10",
  "from-primary/30 via-black/60 to-black/20",
  "from-white/10 via-primary/40 to-black/70",
];

export default function ServicesContent() {
  const { t } = useSiteContext();
  const { servicesPage } = t;

  return (
    <main className="min-h-screen bg-background-dark text-text-dark px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            {servicesPage.kicker}
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold text-white">
            {servicesPage.title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl">
            {servicesPage.intro}
          </p>
        </header>

        <div className="space-y-12">
          {servicesPage.sections.map((section, index) => {
            const reversed = index % 2 === 1;
            return (
              <section
                key={section.title}
                className="rounded-[32px] border border-white/10 bg-black/40 p-6 md:p-8"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}
                >
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        {section.subtitle}
                      </p>
                      <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold text-white">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm md:text-base text-white/70">
                        {section.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        {servicesPage.labels.ideal}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {section.idealFor.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        {servicesPage.labels.features}
                      </p>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition-transform"
                    >
                      {section.cta}
                    </button>
                  </div>

                  <div className="relative min-h-[260px] md:min-h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-black/50">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${imageVariants[index % imageVariants.length]}`}
                    ></div>
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.5),transparent_60%)]"></div>
                    <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/70">
                      {section.title}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="rounded-[36px] border border-white/10 bg-primary/10 p-8 md:p-12">
          <p className="text-sm md:text-base text-white/80 max-w-3xl">
            {servicesPage.outro}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="w-full rounded-full border border-primary/60 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              {servicesPage.outroPrimary}
            </button>
            <button
              type="button"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition-transform"
            >
              {servicesPage.outroSecondary}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
