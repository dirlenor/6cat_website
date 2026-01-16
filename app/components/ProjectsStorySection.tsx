"use client";

import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type ProjectsStorySectionProps = {
  t: TranslationValues;
  sectionRef: React.RefObject<HTMLElement>;
  titleRef: React.RefObject<HTMLHeadingElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  pinRef: React.RefObject<HTMLDivElement>;
  arrowTargetRef: React.RefObject<HTMLDivElement>;
};

export default function ProjectsStorySection({
  t,
  sectionRef,
  titleRef,
  trackRef,
  pinRef,
  arrowTargetRef,
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
      className="relative min-h-screen w-full px-6 md:px-12 pt-12 pb-24 bg-background-light dark:bg-background-dark"
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark"
      >
        <div className="projects-header-inner max-w-7xl mx-auto pt-10 md:pt-12 flex items-center gap-6 relative z-20">
          <div className="flex items-center gap-3 min-w-0">
            <h2
              ref={titleRef}
              className="text-black dark:text-white font-display text-4xl md:text-6xl font-bold min-w-0 leading-[0.9] whitespace-nowrap"
            >
              {t.projects.title}
            </h2>
            <div
              ref={arrowTargetRef}
              className="w-10 h-10 opacity-0 pointer-events-none flex-shrink-0"
            ></div>
          </div>
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <div className="h-px w-40 bg-black/30 dark:bg-white/30"></div>
            <div className="flex flex-col text-black/70 dark:text-white/70 text-sm leading-relaxed text-right items-end">
              <span>{t.projects.sideLines[0]}</span>
              <span>{t.projects.sideLines[1]}</span>
            </div>
          </div>
        </div>
        <div
          ref={trackRef}
          className="project-track relative z-10 h-full flex items-start gap-6 pt-10 md:pt-12 pb-10 max-w-7xl mx-auto"
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
                    src={
                      index === 0
                        ? "https://i.pinimg.com/1200x/a8/65/c9/a865c917a682c6dbbc14afa5dbc6bcfa.jpg"
                        : index === 1
                          ? "https://i.pinimg.com/1200x/bd/65/c6/bd65c676f888fd6f11552767236c8131.jpg"
                          : index === 2
                            ? "https://i.pinimg.com/736x/c9/6f/7b/c96f7ba6b15d3012bcf5315b034626cf.jpg"
                            : index === 3
                              ? "https://i.pinimg.com/736x/50/e0/bb/50e0bb0b642b189a3118bf4b994159e1.jpg"
                              : index === 4
                                ? "https://i.pinimg.com/736x/05/ef/9c/05ef9cf3b8700ff2cf48861256ab4ae5.jpg"
                                : index === 5
                                  ? "https://i.pinimg.com/736x/aa/57/87/aa5787719b9fb917f468c45fc5f8bea9.jpg"
                                  : "https://i.pinimg.com/1200x/3a/e8/09/3ae809dc5a07a3b5c6cbbe9d9124eeba.jpg"
                    }
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
