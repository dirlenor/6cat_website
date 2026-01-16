"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type ProjectsStorySectionProps = {
  t: TranslationValues;
  sectionRef: React.RefObject<HTMLElement>;
  titleRef: React.RefObject<HTMLHeadingElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  pinRef: React.RefObject<HTMLDivElement>;
};

export default function ProjectsStorySection({
  t,
  sectionRef,
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
    <section
      ref={sectionRef}
      className="relative h-[400vh] w-full bg-background-light dark:bg-background-dark"
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark"
      >
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute left-0 right-0 top-[calc(60px+2.5rem+40px)] px-6 md:px-12">
            <div className="projects-header-inner max-w-7xl mx-auto flex items-center gap-6">
              <h2
                ref={titleRef}
                className="text-black dark:text-white font-display text-4xl md:text-6xl font-bold flex-1 min-w-0 leading-[0.9] whitespace-nowrap"
              >
                {t.projects.title}
              </h2>
              <div className="hidden md:flex items-center gap-6 ml-auto">
                <div className="h-px w-40 bg-black/30 dark:bg-white/30"></div>
                <div className="flex flex-col text-black/70 dark:text-white/70 text-sm leading-relaxed text-right items-end">
                  <span>{t.projects.sideLines[0]}</span>
                  <span>{t.projects.sideLines[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={trackRef}
          className="project-track relative z-10 h-full flex items-end gap-6 pl-12 pr-6 md:pr-12 pb-[90px]"
        >
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="project-card relative flex-shrink-0 h-[60vh] w-[80vw] md:w-[30vw] rounded-3xl overflow-hidden border border-white/10 bg-black dark:bg-neutral-900/80"
            >
              <div className="relative h-full flex flex-col gap-6 text-white">
                <div className="flex-1 p-8 flex flex-col justify-between">
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
                <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 mx-8 mb-8">
                  <img
                    src="https://i.pinimg.com/1200x/a8/65/c9/a865c917a682c6dbbc14afa5dbc6bcfa.jpg"
                    alt="Project preview"
                    className="h-full w-full object-cover object-bottom"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
