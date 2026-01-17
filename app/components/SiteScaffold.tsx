"use client";

import { useEffect, useState } from "react";
import SiteHeader from "./SiteHeader";
import FooterSection from "./FooterSection";
import { getTranslations, type Language } from "../lib/i18n";
import { SiteProvider } from "./SiteContext";

type SiteScaffoldProps = {
  children: React.ReactNode;
};

export default function SiteScaffold({ children }: SiteScaffoldProps) {
  const [language, setLanguage] = useState<Language>("en");
  const t = getTranslations(language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "th")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const applyLanguage = (nextLanguage: Language) => {
    if (nextLanguage === "th") {
      document.documentElement.setAttribute("lang", "th");
      document.documentElement.classList.add("font-thai");
      document.body.classList.add("font-anuphan");
      document.body.style.fontFamily =
        "Anuphan, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
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

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "th" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    applyLanguage(newLanguage);
  };

  useEffect(() => {
    applyLanguage(language);
  }, [language]);

  return (
    <SiteProvider value={{ language, t, toggleLanguage }}>
      <div className={language === "th" ? "font-anuphan" : ""}>
        <SiteHeader language={language} t={t} toggleLanguage={toggleLanguage} />
        {children}
        <FooterSection />
      </div>
    </SiteProvider>
  );
}
