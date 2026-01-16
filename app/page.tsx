"use client";

import { useEffect, useState, useRef } from "react";
import { getTranslations, type Language } from "./lib/i18n";
import SiteHeader from "./components/SiteHeader";
import SocialRail from "./components/SocialRail";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsStorySection from "./components/ProjectsStorySection";
import { usePageAnimations } from "./hooks/usePageAnimations";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    // Check current theme and language on mount
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
    
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
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

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
      <div className="fixed inset-0 pointer-events-none z-[1] light-mode-grid dark:dark-mode-grid grid-background w-full h-full"></div>

      <SiteHeader
        language={language}
        t={t}
        darkMode={darkMode}
        toggleLanguage={toggleLanguage}
        toggleDarkMode={toggleDarkMode}
      />

      <SocialRail t={t} />

      <main className="flex-grow flex flex-col relative w-full pt-20">
        <HeroSection
          t={t}
          heroSectionRef={heroSectionRef}
          scrollingTextRef={scrollingTextRef}
          heroTitleRef={heroTitleRef}
        />

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
        />

      </main>
    </div>
  );
}
