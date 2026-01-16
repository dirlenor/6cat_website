"use client";

type ProjectsStorySectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  progressTextRef: React.RefObject<HTMLSpanElement>;
  progressFillRef: React.RefObject<HTMLDivElement>;
};

export default function ProjectsStorySection({
  sectionRef,
  progressTextRef,
  progressFillRef,
}: ProjectsStorySectionProps) {
  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center">
        <div className="w-full px-6 md:px-12">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/90 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-3">
            <span ref={progressTextRef} className="text-xs tracking-[0.2em]">
              0%
            </span>
            <div className="w-32 h-[2px] bg-white/30 overflow-hidden rounded-full">
              <div ref={progressFillRef} className="h-full w-0 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
