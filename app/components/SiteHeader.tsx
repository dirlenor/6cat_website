"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
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
  const [themeIndex, setThemeIndex] = useState(0);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  const themeColors = ["195 245 60", "255 212 73", "53 197 255", "255 107 107"];

  const applyThemeColor = (index: number) => {
    const nextIndex = ((index % themeColors.length) + themeColors.length) % themeColors.length;
    const color = themeColors[nextIndex];
    document.documentElement.style.setProperty("--color-primary", color);
    document.body.style.setProperty("--color-primary", color);
    localStorage.setItem("themeColorIndex", String(nextIndex));
    setThemeIndex(nextIndex);
    setIsThemeMenuOpen(false);
  };

  useEffect(() => {
    const updateSize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const savedIndex = Number(localStorage.getItem("themeColorIndex") || 0);
    if (!Number.isNaN(savedIndex)) {
      applyThemeColor(savedIndex);
    }
  }, []);

  useEffect(() => {
    if (!isThemeMenuOpen || !paletteRef.current) return;
    const swatches = paletteRef.current.querySelectorAll("button");
    gsap.fromTo(
      paletteRef.current,
      { opacity: 0, scale: 0.8, y: -6 },
      { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: "power2.inOut" }
    );
    gsap.fromTo(
      swatches,
      { opacity: 0, scale: 0.6, y: -6 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.32,
        ease: "power2.inOut",
        stagger: 0.05,
      }
    );
  }, [isThemeMenuOpen]);

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
              href="#home"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.home}</span>
            </a>
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#about"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.about}</span>
            </a>
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#services"
            >
              <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
              <span className="relative z-10">{t.nav.services}</span>
            </a>
            <a
              className="relative group hover:text-white transition-colors px-3 py-2 overflow-visible"
              href="#contact"
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
            <div className="relative">
              <button
                className="p-2.5 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 transition-all"
                onClick={() => setIsThemeMenuOpen((open) => !open)}
                title="Change theme color"
                aria-label="Change theme color"
              >
                <span
                  className="block h-4 w-4 rounded-full"
                  style={{ backgroundColor: `rgb(${themeColors[themeIndex]})` }}
                ></span>
              </button>
              {isThemeMenuOpen && (
                <div
                  ref={paletteRef}
                  className="absolute right-0 mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-2 backdrop-blur origin-top-right"
                >
                  {themeColors.map((color, index) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => applyThemeColor(index)}
                      className="h-5 w-5 rounded-full border border-white/20 hover:scale-110 transition-transform"
                      style={{ backgroundColor: `rgb(${color})` }}
                      aria-label={`Theme color ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
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
