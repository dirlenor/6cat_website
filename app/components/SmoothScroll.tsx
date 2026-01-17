"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      } as any);

      lenisRef.current = lenis;

      const raf = (time: number) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          requestAnimationFrame(raf);
        }
      };

      requestAnimationFrame(raf);
      lenis.on("scroll", ScrollTrigger.update);

      return () => {
        try {
          lenisRef.current?.destroy();
        } catch {
          // ignore
        }
      };
    } catch {
      // ignore
    }
  }, []);

  return null;
}
