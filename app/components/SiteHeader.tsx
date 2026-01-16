"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type SiteHeaderProps = {
  language: Language;
  t: TranslationValues;
  darkMode: boolean;
  toggleLanguage: () => void;
  toggleDarkMode: () => void;
};

export default function SiteHeader({
  language,
  t,
  darkMode,
  toggleLanguage,
  toggleDarkMode,
}: SiteHeaderProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm ${language === "th" ? "font-anuphan" : ""}`}
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-xl font-display">
          6
        </div>
        <span className="font-bold text-xl font-display hidden sm:block">CAT</span>
      </div>
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide absolute left-1/2 -translate-x-1/2">
        <a
          className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible"
          href="#"
        >
          <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
          <span className="relative z-10">{t.nav.home}</span>
        </a>
        <a
          className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible"
          href="#"
        >
          <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
          <span className="relative z-10">{t.nav.about}</span>
        </a>
        <a
          className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible"
          href="#"
        >
          <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
          <span className="relative z-10">{t.nav.services}</span>
        </a>
        <a
          className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible"
          href="#"
        >
          <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
          <span className="relative z-10">{t.nav.contact}</span>
        </a>
      </nav>
      <div className="hidden md:flex items-center gap-3 ml-auto">
        <button
          className="px-3 py-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-all font-anuphan font-medium text-sm"
          onClick={toggleLanguage}
          title={language === "en" ? "เปลี่ยนเป็นภาษาไทย" : "Switch to English"}
        >
          {language === "en" ? "TH" : "EN"}
        </button>
        <button
          className="p-2.5 bg-black dark:bg-white rounded-full hover:scale-105 transition-transform"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <a
          className="flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:scale-105 transition-transform group"
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
    </header>
  );
}
