import type { Metadata } from "next";
import "@fontsource/anuphan/300.css";
import "@fontsource/anuphan/400.css";
import "@fontsource/anuphan/500.css";
import "@fontsource/anuphan/600.css";
import "@fontsource/anuphan/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "6CAT Agency",
  description: "Creative digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
                const language = localStorage.getItem('language') || 'en';
                if (language === 'th') {
                  document.documentElement.setAttribute('lang', 'th');
                  document.documentElement.classList.add('font-thai');
                  document.body.classList.add('font-anuphan');
                  document.body.style.fontFamily = "Anuphan, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
                  document.body.style.fontFeatureSettings = '"liga" 1, "calt" 1';
                  document.body.style.webkitFontSmoothing = "antialiased";
                  document.body.style.mozFontSmoothing = "grayscale";
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body min-h-screen overflow-x-hidden relative flex flex-col transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
