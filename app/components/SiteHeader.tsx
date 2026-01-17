"use client";

import { useEffect, useState } from "react";
import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type SiteHeaderProps = {
  language: Language;
  t: TranslationValues;
  toggleLanguage: () => void;
};

export default function SiteHeader({
  language,
  t,
  toggleLanguage,
}: SiteHeaderProps) {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-sm ${language === "th" ? "font-anuphan" : ""}`}
    >
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center relative">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl font-display">
              6
            </div>
            <span className="font-bold text-xl font-display hidden sm:block">CAT</span>
            <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white/70">
              {viewportSize.width}×{viewportSize.height}
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide absolute left-1/2 -translate-x-1/2">
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.home}</span>
            </a>
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.about}</span>
            </a>
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.services}</span>
            </a>
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.contact}</span>
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <button
              className="px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all font-anuphan font-medium text-sm"
              onClick={toggleLanguage}
              title={language === "en" ? "เปลี่ยนเป็นภาษาไทย" : "Switch to English"}
            >
              {language === "en" ? "TH" : "EN"}
            </button>
            <a
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform group"
              href="#"
            >
              {t.nav.hireAgency}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <button className="lg:hidden text-2xl">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
