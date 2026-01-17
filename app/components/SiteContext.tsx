"use client";

import { createContext, useContext } from "react";
import type { Language, Translations } from "../lib/i18n";

type TranslationValues = Translations[Language];

type SiteContextValue = {
  language: Language;
  t: TranslationValues;
  toggleLanguage: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export const SiteProvider = SiteContext.Provider;

export const useSiteContext = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used within SiteProvider");
  }
  return context;
};
