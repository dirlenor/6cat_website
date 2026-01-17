"use client";

import { useSiteContext } from "./SiteContext";

export default function FooterSection() {
  const { t } = useSiteContext();

  return (
    <footer className="relative z-10 w-full px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] bg-primary text-black px-6 py-12 md:px-12 md:py-14">
          <div className="absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></div>
          <div className="relative z-10 flex flex-col gap-10">
            <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="text-sm font-semibold">
                hello@6catagency.com
                <div className="mt-2 text-xs font-medium opacity-70">
                  +66 82 000 0000
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.35em]">
                  {t.footer.city}
                </div>
                <div className="mt-2 text-sm font-semibold">
                  {t.footer.addressLine1}
                  <div className="mt-2 text-xs font-medium opacity-70">
                    {t.footer.addressLine2}
                  </div>
                </div>
              </div>

              <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center text-center pointer-events-none">
                <div className="text-xs font-semibold uppercase tracking-[0.35em]">
                  6CAT AGENCY
                </div>
                <div className="mt-6 text-4xl md:text-6xl font-display font-black tracking-tight uppercase">
                  {t.footer.title}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 text-xs font-semibold uppercase tracking-[0.25em] md:items-end">
                <a className="hover:opacity-70 transition-opacity" href="#home">
                  {t.footer.nav.home}
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#about">
                  {t.footer.nav.about}
                </a>
                <a className="hover:opacity-70 transition-opacity" href="/services">
                  {t.footer.nav.services}
                </a>
                <a className="hover:opacity-70 transition-opacity" href="/pricing">
                  {t.footer.nav.pricing}
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#projects">
                  {t.footer.nav.projects}
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#contact">
                  {t.footer.nav.contact}
                </a>
                <a className="hover:opacity-70 transition-opacity" href="/policy">
                  {t.footer.nav.policy}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-black/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.25em] md:flex-row md:items-center md:justify-between">
              <span>{t.footer.copyright}</span>
              <span>{t.footer.designBy}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
