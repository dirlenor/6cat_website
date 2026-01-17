"use client";

import { useEffect, useState, useRef } from "react";
import { getTranslations, type Language } from "./lib/i18n";
import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsStorySection from "./components/ProjectsStorySection";
import TimelineSection from "./components/TimelineSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import { usePageAnimations } from "./hooks/usePageAnimations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = getTranslations(language);
  const statsSectionRef = useRef<HTMLElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const typingTextRef = useRef<HTMLParagraphElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const expertiseSectionRef = useRef<HTMLElement>(null);
  const expertiseCardsRef = useRef<HTMLDivElement[]>([]);
  const expertiseArrowWrapperRef = useRef<HTMLDivElement>(null);
  const expertiseArrowRef = useRef<SVGSVGElement>(null);
  const servicesArrowTargetRef = useRef<HTMLDivElement>(null);
  const projectCountRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const scrollingTextRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement>(null);
  const projectsTrackRef = useRef<HTMLDivElement>(null);
  const projectsPinRef = useRef<HTMLDivElement>(null);
  const projectsArrowTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "th")) {
      setLanguage(savedLanguage);
    }
  }, []);
  usePageAnimations({
    heroTitleText: t.hero.title,
    statsSectionRef,
    typingTextRef,
    progressBarRef,
    expertiseSectionRef,
    expertiseCardsRef,
    expertiseArrowWrapperRef,
    servicesArrowTargetRef,
    projectCountRef,
    heroTitleRef,
    scrollingTextRef,
    heroSectionRef,
    projectsSectionRef,
    projectsTitleRef,
    projectsTrackRef,
    projectsPinRef,
    projectsArrowTargetRef,
  });

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "th" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Apply Thai font to body and html when Thai is selected
    if (newLanguage === "th") {
      document.documentElement.setAttribute("lang", "th");
      document.documentElement.classList.add("font-thai");
      document.body.classList.add("font-anuphan");
      document.body.style.fontFamily = "Anuphan, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
      document.body.style.fontFeatureSettings = '"liga" 1, "calt" 1';
      document.body.style.setProperty("-webkit-font-smoothing", "antialiased");
      document.body.style.setProperty("-moz-osx-font-smoothing", "grayscale");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.classList.remove("font-thai");
      document.body.classList.remove("font-anuphan");
      document.body.style.fontFamily =
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
      document.body.style.fontFeatureSettings = "";
      document.body.style.removeProperty("-webkit-font-smoothing");
      document.body.style.removeProperty("-moz-osx-font-smoothing");
    }
  };

  // Apply font class when language changes
  useEffect(() => {
    if (language === "th") {
      document.documentElement.setAttribute("lang", "th");
      document.documentElement.classList.add("font-thai");
      document.body.classList.add("font-anuphan");
      document.body.style.fontFamily = "Anuphan, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
      document.body.style.fontFeatureSettings = '"liga" 1, "calt" 1';
      document.body.style.setProperty("-webkit-font-smoothing", "antialiased");
      document.body.style.setProperty("-moz-osx-font-smoothing", "grayscale");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.classList.remove("font-thai");
      document.body.classList.remove("font-anuphan");
      document.body.style.fontFamily =
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
      document.body.style.fontFeatureSettings = "";
      document.body.style.removeProperty("-webkit-font-smoothing");
      document.body.style.removeProperty("-moz-osx-font-smoothing");
    }
  }, [language]);

  const setExpertiseCardRef = (index: number, el: HTMLDivElement | null) => {
    if (el) {
      expertiseCardsRef.current[index] = el;
    }
  };

  return (
    <div className={language === "th" ? "font-anuphan" : ""}>
      <div className="fixed inset-0 pointer-events-none z-[1] dark-mode-grid grid-background w-full h-full"></div>

      <SiteHeader
        language={language}
        t={t}
        toggleLanguage={toggleLanguage}
      />

      <main className="flex-grow flex flex-col relative w-full pt-20">
        <HeroSection
          t={t}
          heroSectionRef={heroSectionRef}
          scrollingTextRef={scrollingTextRef}
          heroTitleRef={heroTitleRef}
        />

        <AboutSection t={t} />

        <ExpertiseSection
          t={t}
          expertiseSectionRef={expertiseSectionRef}
          setExpertiseCardRef={setExpertiseCardRef}
          arrowWrapperRef={expertiseArrowWrapperRef}
          arrowRef={expertiseArrowRef}
        />

        <ServicesSection
          t={t}
          statsSectionRef={statsSectionRef}
          statsGridRef={statsGridRef}
          typingTextRef={typingTextRef}
          progressBarRef={progressBarRef}
          projectCountRef={projectCountRef}
          arrowTargetRef={servicesArrowTargetRef}
        />

        <ProjectsStorySection
          t={t}
          sectionRef={projectsSectionRef}
          titleRef={projectsTitleRef}
          trackRef={projectsTrackRef}
          pinRef={projectsPinRef}
          arrowTargetRef={projectsArrowTargetRef}
        />

        <TimelineSection t={t} />

        <TestimonialsSection t={t} />

        <ContactSection t={t} />

      </main>
    </div>
  );
}
