"use client";

import Lottie from "lottie-react";
import spaceCatAnimation from "../../lottie/Space Cat.json";
import HeroParticles from "./HeroParticles";
import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type HeroSectionProps = {
  t: TranslationValues;
  heroSectionRef: React.RefObject<HTMLElement>;
  scrollingTextRef: React.RefObject<HTMLDivElement>;
  heroTitleRef: React.RefObject<HTMLHeadingElement>;
};

export default function HeroSection({
  t,
  heroSectionRef,
  scrollingTextRef,
  heroTitleRef,
}: HeroSectionProps) {
  const cornerText = t.hero.cornerLines.join(" ");

  return (
    <section
      id="home"
      ref={heroSectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full -mt-20"
    >
      <HeroParticles />
      <div ref={scrollingTextRef} className="hidden" />
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="h-full w-full">
          <Lottie animationData={spaceCatAnimation} loop={true} />
        </div>
      </div>
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h2
          ref={heroTitleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-black dark:text-white leading-[0.9] drop-shadow-sm"
          style={{ transformStyle: "preserve-3d", perspective: "1000px", opacity: 0 }}
        >
          {t.hero.title}
        </h2>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm md:text-base hover:scale-105 transition-transform group">
            {t.hero.exploreMore}
            <svg
              className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium text-sm md:text-base hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all group">
            {t.hero.getQuote}
            <svg
              className="w-4 h-4 inline-block ml-2 group-hover:rotate-12 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="w-full bg-primary py-3 overflow-hidden">
          <div className="flex items-center gap-10 whitespace-nowrap animate-scroll text-xs md:text-sm font-semibold tracking-wide text-black/80">
            <span className="px-6">{t.heroBottom.marquee}</span>
            <span className="px-6">{t.heroBottom.marquee}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
