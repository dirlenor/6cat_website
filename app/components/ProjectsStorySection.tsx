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
      description: "Brand system and web platform for a design studio.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
      href: "#",
    },
    {
      title: "Lumen Health",
      description: "Product experience and launch for a health startup.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
      href: "#",
    },
    {
      title: "Northwave",
      description: "E-commerce redesign with performance optimization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
      href: "#",
    },
    {
      title: "Signal Labs",
      description: "SaaS marketing site with interactive storytelling.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80",
      href: "#",
    },
    {
      title: "Monarch",
      description: "Luxury brand identity and campaign rollout.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80",
      href: "#",
    },
    {
      title: "Aurora",
      description: "Mobile app design and growth strategy.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
      href: "#",
    },
    {
      title: "Vantage",
      description: "Enterprise website and content system.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
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
              className="text-white font-display text-6xl md:text-8xl lg:text-9xl font-bold opacity-0 flex-1 min-w-0 leading-[0.9]"
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
          className="relative z-10 h-full flex items-end gap-6 pl-8 pr-6 md:pr-12 pb-6"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="project-card relative flex-shrink-0 h-[70vh] w-[80vw] md:w-[46vw] rounded-3xl overflow-hidden border border-white/10 bg-black/20"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${card.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/60"></div>
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
