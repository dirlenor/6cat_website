import { cookies } from "next/headers";
import HomeClient from "./HomeClient";
import type { Language } from "./lib/i18n";

export default function HomePage() {
  const cookieStore = cookies();
  const cookieLanguage = cookieStore.get("language")?.value;
  const initialLanguage: Language = cookieLanguage === "th" ? "th" : "en";

  return <HomeClient initialLanguage={initialLanguage} />;
}
