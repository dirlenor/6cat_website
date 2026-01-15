import type { Metadata } from "next";
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
