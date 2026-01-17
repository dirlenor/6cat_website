import { cookies } from "next/headers";
import SiteScaffold from "./SiteScaffold";
import type { Language } from "../lib/i18n";

type SiteScaffoldServerProps = {
  children: React.ReactNode;
};

export default function SiteScaffoldServer({ children }: SiteScaffoldServerProps) {
  const cookieStore = cookies();
  const cookieLanguage = cookieStore.get("language")?.value;
  const initialLanguage: Language = cookieLanguage === "th" ? "th" : "en";

  return <SiteScaffold initialLanguage={initialLanguage}>{children}</SiteScaffold>;
}
