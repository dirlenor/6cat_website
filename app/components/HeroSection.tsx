"use client";

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
      <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden pointer-events-none z-10">
        <div className="w-full overflow-hidden">
          <div ref={scrollingTextRef} className="flex animate-scroll whitespace-nowrap">
            <h1 className="text-[35vw] font-display font-bold text-primary opacity-90 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-normal dark:opacity-80 scale-110 whitespace-nowrap inline-block">
              6CAT AGENCY
            </h1>
            <h1 className="text-[35vw] font-display font-bold text-primary opacity-90 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-normal dark:opacity-80 scale-110 whitespace-nowrap inline-block ml-[10vw]">
              6CAT AGENCY
            </h1>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2
          ref={heroTitleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-black dark:text-white leading-[0.9] drop-shadow-sm"
          style={{ transformStyle: "preserve-3d", perspective: "1000px", opacity: 0 }}
        >
          {t.hero.title}
        </h2>
        <div className="mt-6 max-w-4xl lg:max-w-5xl mx-auto text-center text-xs md:text-sm text-black/70 dark:text-white/70 leading-relaxed">
          <p>
            {cornerText
              .split(/(Creative|experience|ideas|สร้างสรรค์|ประสบการณ์|ไอเดีย)/g)
              .map((part, partIndex) => {
                if (
                  part === "Creative" ||
                  part === "experience" ||
                  part === "ideas" ||
                  part === "สร้างสรรค์" ||
                  part === "ประสบการณ์" ||
                  part === "ไอเดีย"
                ) {
                  return (
                    <span key={partIndex} className="font-bold text-base md:text-lg text-primary">
                      {part}
                    </span>
                  );
                }
                return <span key={partIndex}>{part}</span>;
              })}
          </p>
        </div>
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
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-neutral-400">
          <div className="flex items-center gap-2 group cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black group-hover:border-primary group-hover:bg-primary transition-colors"></span>
            <span>{t.heroBottom.tagline1}</span>
          </div>
          <div className="hidden md:block w-16 h-[1px] bg-gray-300 dark:bg-neutral-800"></div>
          <div className="flex items-center gap-2 group cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black group-hover:border-primary group-hover:bg-primary transition-colors"></span>
            <span>{t.heroBottom.tagline2}</span>
          </div>
          <div className="hidden md:block w-16 h-[1px] bg-gray-300 dark:bg-neutral-800"></div>
          <div className="flex items-center gap-2 group cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black group-hover:border-primary group-hover:bg-primary transition-colors"></span>
            <span>{t.heroBottom.tagline3}</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
