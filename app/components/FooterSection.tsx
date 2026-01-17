"use client";

export default function FooterSection() {
  return (
    <footer className="relative z-10 w-full px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] bg-primary text-black px-6 py-12 md:px-12 md:py-14">
          <div className="absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></div>
          <div className="relative z-10 flex flex-col gap-10">
            <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="text-sm font-semibold">
                hello@6catagency.com
                <div className="mt-2 text-xs font-medium opacity-70">
                  +66 82 000 0000
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.35em]">
                  Bangkok
                </div>
                <div className="mt-2 text-sm font-semibold">
                  Tha-sai
                  <div className="mt-2 text-xs font-medium opacity-70">
                    Nonthaburi 11000
                  </div>
                </div>
              </div>

              <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center text-center pointer-events-none">
                <div className="text-xs font-semibold uppercase tracking-[0.35em]">
                  6CAT AGENCY
                </div>
                <div className="mt-6 text-4xl md:text-6xl font-display font-black tracking-tight uppercase">
                  Let's work together
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 text-xs font-semibold uppercase tracking-[0.25em] md:items-end">
                <a className="hover:opacity-70 transition-opacity" href="#home">
                  Home
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#about">
                  About
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#services">
                  Services
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#projects">
                  Projects
                </a>
                <a className="hover:opacity-70 transition-opacity" href="#contact">
                  Contact
                </a>
                <a className="hover:opacity-70 transition-opacity" href="/policy">
                  Policy
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-black/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.25em] md:flex-row md:items-center md:justify-between">
              <span>2026@6CAT AGENCY</span>
              <span>Design by 6CAT</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
