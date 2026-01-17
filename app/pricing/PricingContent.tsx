"use client";

import { useSiteContext } from "../components/SiteContext";

export default function PricingContent() {
  const { t } = useSiteContext();
  const { pricingPage } = t;

  return (
    <main className="min-h-screen bg-background-dark text-text-dark px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            {pricingPage.kicker}
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold text-white">
            {pricingPage.title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl">
            {pricingPage.intro}
          </p>
        </header>

        <section className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {pricingPage.websiteSubtitle}
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold text-white">
              {pricingPage.websiteTitle}
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
              {pricingPage.websiteDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPage.packages.map((pkg) => (
              <article
                key={pkg.name}
                className="relative rounded-3xl border border-white/10 bg-black/40 p-6 md:p-7 flex flex-col gap-6"
              >
                {pkg.badge && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {pkg.badge}
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                      {pkg.tag}
                    </p>
                    <h3 className="mt-2 text-xl font-display font-semibold text-white">
                      {pkg.name}
                    </h3>
                    <div className="mt-3 text-2xl md:text-3xl font-display font-bold text-primary">
                      {pkg.price}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {pricingPage.labels.included}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {pkg.prep.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                      {pricingPage.labels.prep}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/75">
                      {pkg.prep.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {pricingPage.labels.excluded}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {pkg.excluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-medium text-white/85">
                  {pkg.customNote}
                </p>
                <button
                  type="button"
                  className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition-transform"
                >
                  {pricingPage.packageCta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {pricingPage.crmSubtitle}
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold text-white">
              {pricingPage.crmTitle}
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
              {pricingPage.crmDescription}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPage.crmPlans.map((plan) => (
                <article
                  key={plan.name}
                  className="rounded-3xl border border-white/10 bg-black/50 p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-display font-semibold text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-semibold text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-white/75">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm font-medium text-white/85">
              {pricingPage.crmNote}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="w-full rounded-full border border-primary/60 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                {pricingPage.crmCtaContact}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
