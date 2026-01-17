import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@fontsource/anuphan/300.css";
import "@fontsource/anuphan/400.css";
import "@fontsource/anuphan/500.css";
import "@fontsource/anuphan/600.css";
import "@fontsource/anuphan/700.css";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "6CAT Agency",
  description: "Creative digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const language = cookieStore.get("language")?.value;
  const isThai = language === "th";

  return (
    <html lang={isThai ? "th" : "en"} className={`dark ${isThai ? "font-thai" : ""}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const themeColors = ["195 245 60", "255 212 73", "53 197 255", "255 107 107"];
                const savedIndex = Number(localStorage.getItem('themeColorIndex') || 0);
                const safeIndex = Number.isFinite(savedIndex) ? ((savedIndex % themeColors.length) + themeColors.length) % themeColors.length : 0;
                document.documentElement.style.setProperty('--color-primary', themeColors[safeIndex]);
                const cookieMatch = document.cookie.match(/(?:^|; )language=([^;]+)/);
                const storedLanguage = localStorage.getItem('language');
                const language = cookieMatch ? cookieMatch[1] : (storedLanguage || 'en');
                if (!cookieMatch && storedLanguage) {
                  document.cookie = 'language=' + storedLanguage + '; path=/; max-age=31536000';
                }
                if (language === 'th') {
                  document.documentElement.setAttribute('lang', 'th');
                  document.documentElement.classList.add('font-thai');
                  document.body.classList.add('font-anuphan');
                  document.body.style.fontFamily = "Anuphan, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
                  document.body.style.fontFeatureSettings = '"liga" 1, "calt" 1';
                  document.body.style.webkitFontSmoothing = "antialiased";
                  document.body.style.mozFontSmoothing = "grayscale";
                } else {
                  document.documentElement.setAttribute('lang', 'en');
                  document.documentElement.classList.remove('font-thai');
                  document.body.classList.remove('font-anuphan');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`bg-background-dark text-text-dark font-body min-h-screen overflow-x-hidden relative flex flex-col ${isThai ? "font-anuphan" : ""}`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
