"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type ProjectsStorySectionProps = {
  t: TranslationValues;
  sectionRef: React.RefObject<HTMLElement>;
  progressTextRef: React.RefObject<HTMLSpanElement>;
  progressFillRef: React.RefObject<HTMLDivElement>;
  titleRef: React.RefObject<HTMLHeadingElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  pinRef: React.RefObject<HTMLDivElement>;
};

export default function ProjectsStorySection({
  t,
  sectionRef,
  progressTextRef,
  progressFillRef,
  titleRef,
  trackRef,
  pinRef,
}: ProjectsStorySectionProps) {
  const cards = [
    {
      title: "Atlas Studio",
      description: "Brand system, identity, and web platform.",
      href: "#",
    },
    {
      title: "Lumen Health",
      description: "Product UX and launch for a health startup.",
      href: "#",
    },
    {
      title: "Northwave",
      description: "E-commerce redesign focused on conversion.",
      href: "#",
    },
    {
      title: "Signal Labs",
      description: "SaaS marketing site and story system.",
      href: "#",
    },
    {
      title: "Monarch",
      description: "Luxury brand identity and campaign rollout.",
      href: "#",
    },
    {
      title: "Aurora",
      description: "Mobile app design with growth strategy.",
      href: "#",
    },
    {
      title: "Vantage",
      description: "Enterprise website and content framework.",
      href: "#",
    },
  ];

  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute left-8 right-8 top-[calc(60px+2.5rem+40px)] flex items-center gap-6">
            <h2
              ref={titleRef}
              className="text-white font-display text-4xl md:text-[32px] lg:text-[80px] font-bold opacity-0 flex-1 min-w-0 leading-[0.9] whitespace-nowrap"
            >
              {t.projects.title}
            </h2>
            <div className="hidden md:flex items-center gap-6 ml-auto">
              <div className="h-px w-40 bg-white/30"></div>
              <div className="flex flex-col text-white/70 text-sm leading-relaxed text-right items-end">
                <span>{t.projects.sideLines[0]}</span>
                <span>{t.projects.sideLines[1]}</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/90 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-3">
            <span ref={progressTextRef} className="text-xs tracking-[0.2em]">
              0%
            </span>
            <div className="w-32 h-[2px] bg-white/30 overflow-hidden rounded-full">
              <div ref={progressFillRef} className="h-full w-0 bg-white"></div>
            </div>
          </div>
        </div>
        <div
          ref={trackRef}
          className="project-track relative z-10 h-full flex items-end gap-6 pl-8 pr-6 md:pr-12 pb-[90px]"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="project-card relative flex-shrink-0 h-[70vh] w-[80vw] md:w-[46vw] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/80"
            >
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-white/80">
                    {card.description}
                  </p>
                </div>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
