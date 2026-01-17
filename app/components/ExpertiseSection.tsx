"use client";

import { useEffect } from "react";
import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type ExpertiseSectionProps = {
  t: TranslationValues;
  expertiseSectionRef: React.RefObject<HTMLElement>;
  setExpertiseCardRef: (index: number, el: HTMLDivElement | null) => void;
  arrowWrapperRef: React.RefObject<HTMLDivElement>;
  arrowRef: React.RefObject<SVGSVGElement>;
};

export default function ExpertiseSection({
  t,
  expertiseSectionRef,
  setExpertiseCardRef,
  arrowWrapperRef,
  arrowRef,
}: ExpertiseSectionProps) {
  useEffect(() => {
    const arrowEl = arrowRef.current;
    const wrapperEl = arrowWrapperRef.current;
    if (!arrowEl || !wrapperEl) return;

    let rafId: number | null = null;
    let currentAngle = 0;
    let targetAngle = 0;

    const animate = () => {
      const delta = ((targetAngle - currentAngle + 540) % 360) - 180;
      currentAngle += delta * 0.12;
      arrowEl.style.transform = `rotate(${currentAngle}deg)`;
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = wrapperEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      targetAngle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={expertiseSectionRef}
      className="relative z-20 w-full px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white tracking-tight">
              {t.expertise.title}
            </h2>
            <div
              ref={arrowWrapperRef}
              className="ml-auto w-10 h-10 rounded-xl bg-primary flex items-center justify-center relative z-40"
            >
              <svg
                ref={arrowRef}
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-200 dark:bg-neutral-800 mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div
            ref={(el) => setExpertiseCardRef(0, el)}
            className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-neutral-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
            <div className="flex justify-between items-start mb-6">
              <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-neutral-800 select-none">
                01
              </span>
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                {t.expertise.brandStrategy.title}
              </h3>
              <p className="mt-4 text-gray-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                {t.expertise.brandStrategy.description}
              </p>
            </div>
          </div>
          <div
            ref={(el) => setExpertiseCardRef(1, el)}
            className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-neutral-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
            <div className="flex justify-between items-start mb-6">
              <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-neutral-800 select-none">
                02
              </span>
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                {t.expertise.uiux.title}
              </h3>
              <p className="mt-4 text-gray-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                {t.expertise.uiux.description}
              </p>
            </div>
          </div>
          <div
            ref={(el) => setExpertiseCardRef(2, el)}
            className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-neutral-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
            <div className="flex justify-between items-start mb-6">
              <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-neutral-800 select-none">
                03
              </span>
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                {t.expertise.development.title}
              </h3>
              <p className="mt-4 text-gray-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                {t.expertise.development.description}
              </p>
            </div>
          </div>
          <div
            ref={(el) => setExpertiseCardRef(3, el)}
            className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-neutral-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
            <div className="flex justify-between items-start mb-6">
              <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-neutral-800 select-none">
                04
              </span>
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                {t.expertise.digitalMarketing.title}
              </h3>
              <p className="mt-4 text-gray-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                {t.expertise.digitalMarketing.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
