"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type TestimonialsSectionProps = {
  t: TranslationValues;
};

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const isAnimatingRef = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const totalItems = t.testimonials.items.length;
  const activeItem = t.testimonials.items[activeIndex];
  const projectImages = [
    "https://i.pinimg.com/1200x/a8/65/c9/a865c917a682c6dbbc14afa5dbc6bcfa.jpg",
    "https://i.pinimg.com/1200x/bd/65/c6/bd65c676f888fd6f11552767236c8131.jpg",
    "https://i.pinimg.com/736x/c9/6f/7b/c96f7ba6b15d3012bcf5315b034626cf.jpg",
    "https://i.pinimg.com/736x/50/e0/bb/50e0bb0b642b189a3118bf4b994159e1.jpg",
    "https://i.pinimg.com/736x/05/ef/9c/05ef9cf3b8700ff2cf48861256ab4ae5.jpg",
    "https://i.pinimg.com/736x/aa/57/87/aa5787719b9fb917f468c45fc5f8bea9.jpg",
    "https://i.pinimg.com/1200x/3a/e8/09/3ae809dc5a07a3b5c6cbbe9d9124eeba.jpg",
  ];

  const animateLinesIn = () => {
    const lines = contentRef.current?.querySelectorAll("[data-anim]");
    if (!lines || lines.length === 0) return;
    gsap.fromTo(
      lines,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.08,
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      }
    );
  };

  const animateLinesOut = (onComplete: () => void) => {
    const lines = contentRef.current?.querySelectorAll("[data-anim]");
    if (!lines || lines.length === 0) return;
    gsap.to(lines, {
      y: -10,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.05,
      onComplete,
    });
  };

  useEffect(() => {
    animateLinesIn();
  }, [activeIndex]);

  const goTo = (direction: number) => {
    if (isAnimatingRef.current || totalItems === 0) return;
    isAnimatingRef.current = true;
    const nextIndex = (activeIndex + direction + totalItems) % totalItems;
    animateLinesOut(() => setActiveIndex(nextIndex));
    const nextImageIndex = (imageIndex + direction + projectImages.length) % projectImages.length;
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.96,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    setTimeout(() => {
      setImageIndex(nextImageIndex);
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }
    }, 180);
  };

  return (
    <section className="relative z-10 w-full px-6 md:px-12 py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto border border-primary/40 rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="flex h-[520px] flex-col justify-between rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/80 p-6 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                {t.testimonials.kicker}
              </p>
              <h2 className="mt-4 text-4xl md:text-6xl font-display font-bold text-black dark:text-white">
                {t.testimonials.title}
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-neutral-400">
                {t.testimonials.description}
              </p>
            </div>

            <div ref={contentRef} className="mt-8 space-y-6 border-t border-gray-200/60 dark:border-neutral-800/60 pt-6">
              <div className="rounded-2xl p-5 md:p-6">
                <p
                  data-anim
                  className="text-sm md:text-base text-primary leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis"
                >
                “{activeItem?.quote}”
                </p>
                <div data-anim className="mt-4">
                  <p className="text-sm font-semibold text-primary">
                    {activeItem?.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/70 mt-1">
                    {activeItem?.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200/60 dark:border-neutral-800/60 pt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(-1)}
                className="h-10 w-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="h-4 w-4 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                className="h-10 w-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white hover:border-primary hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="h-4 w-4 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

        <div className="relative h-[520px] overflow-hidden rounded-3xl border border-gray-200 dark:border-neutral-800 bg-black/90 dark:bg-neutral-900/80">
          <img
            ref={imageRef}
            src={projectImages[imageIndex % projectImages.length]}
            alt="Team collaboration"
            className="h-full w-full object-cover transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20"></div>
        </div>
        </div>
      </div>
    </section>
  );
}
