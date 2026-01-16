"use client";

import Image from "next/image";
import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type ServicesSectionProps = {
  t: TranslationValues;
  statsSectionRef: React.RefObject<HTMLElement>;
  statsGridRef: React.RefObject<HTMLDivElement>;
  typingTextRef: React.RefObject<HTMLParagraphElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  projectCountRef: React.RefObject<HTMLDivElement>;
  arrowTargetRef: React.RefObject<HTMLDivElement>;
};

export default function ServicesSection({
  t,
  statsSectionRef,
  statsGridRef,
  typingTextRef,
  progressBarRef,
  projectCountRef,
  arrowTargetRef,
}: ServicesSectionProps) {
  return (
    <section
      ref={statsSectionRef}
      className="relative z-10 w-full px-6 md:px-12 py-24 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white uppercase tracking-tight">
              {t.services.title}
            </h2>
            <div
              ref={arrowTargetRef}
              className="ml-auto w-10 h-10 opacity-0 pointer-events-none"
            ></div>
          </div>
          <div className="w-full h-[1px] bg-gray-200 dark:bg-neutral-800 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-black dark:bg-neutral-900 rounded-2xl p-8 flex flex-col justify-between min-h-[400px] group/card overflow-hidden">
            <div className="overflow-hidden">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg
                  className="w-full h-full text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <p
                ref={typingTextRef}
                className="text-white text-lg leading-relaxed break-words overflow-wrap-anywhere"
              >
                {t.servicesDescription}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div
                ref={progressBarRef}
                className="flex-1 h-1.5 bg-gray-700 dark:bg-neutral-700 rounded-full relative cursor-pointer"
              >
                <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full"></div>
              </div>
              <span className="text-white text-sm font-medium">
                {t.services.creativeMode}
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[400px] bg-gray-100 dark:bg-neutral-800">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Creative team working together"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <button className="w-full px-6 py-3 bg-primary text-black rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                {t.services.teamProjects}
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800 min-h-[400px] flex flex-col">
            <div className="mb-8">
              <div
                ref={projectCountRef}
                className="text-6xl md:text-7xl font-display font-bold text-black dark:text-white mb-2"
              >
                0+
              </div>
              <div className="text-xl font-display font-semibold text-black dark:text-white mb-4">
                {t.services.projectsDelivered}
              </div>
              <p className="text-gray-500 dark:text-neutral-400 text-sm leading-relaxed">
                {t.services.description}
              </p>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  {t.services.webDesign}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? "bg-primary" : "bg-gray-300 dark:bg-neutral-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black dark:text-white">85</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  {t.services.branding}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 3 ? "bg-primary" : "bg-gray-300 dark:bg-neutral-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black dark:text-white">72</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  {t.services.development}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? "bg-primary" : "bg-gray-300 dark:bg-neutral-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black dark:text-white">90</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={statsGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card group relative aspect-square rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-3">
              12,000+
            </div>
            <div className="text-sm text-gray-500 dark:text-neutral-400">
              {t.services.hoursWorked}
            </div>
            <div className="mt-5 h-[2px] w-full bg-gray-200 dark:bg-neutral-800 overflow-hidden rounded-full">
              <div className="h-full w-1/3 bg-primary transition-all duration-300 group-hover:w-2/3"></div>
            </div>
          </div>
          <div className="stat-card group relative aspect-square rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-3">
              89%
            </div>
            <div className="text-sm text-gray-500 dark:text-neutral-400">
              {t.services.clientSatisfaction}
            </div>
            <div className="mt-5 h-[2px] w-full bg-gray-200 dark:bg-neutral-800 overflow-hidden rounded-full">
              <div className="h-full w-1/3 bg-primary transition-all duration-300 group-hover:w-2/3"></div>
            </div>
          </div>
          <div className="stat-card group relative aspect-square rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-3">
              1,200+
            </div>
            <div className="text-sm text-gray-500 dark:text-neutral-400">
              {t.services.activeClients}
            </div>
            <div className="mt-5 h-[2px] w-full bg-gray-200 dark:bg-neutral-800 overflow-hidden rounded-full">
              <div className="h-full w-1/3 bg-primary transition-all duration-300 group-hover:w-2/3"></div>
            </div>
          </div>
          <div className="stat-card group relative aspect-square rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-3">
              125+
            </div>
            <div className="text-sm text-gray-500 dark:text-neutral-400">
              {t.services.annualProjects}
            </div>
            <div className="mt-5 h-[2px] w-full bg-gray-200 dark:bg-neutral-800 overflow-hidden rounded-full">
              <div className="h-full w-1/3 bg-primary transition-all duration-300 group-hover:w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
