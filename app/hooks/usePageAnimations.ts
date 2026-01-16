"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type UsePageAnimationsOptions = {
  heroTitleText: string;
  statsSectionRef: React.RefObject<HTMLElement>;
  typingTextRef: React.RefObject<HTMLParagraphElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  expertiseSectionRef: React.RefObject<HTMLElement>;
  expertiseCardsRef: React.RefObject<HTMLDivElement[]>;
  expertiseArrowWrapperRef: React.RefObject<HTMLDivElement>;
  servicesArrowTargetRef: React.RefObject<HTMLDivElement>;
  projectCountRef: React.RefObject<HTMLDivElement>;
  heroTitleRef: React.RefObject<HTMLHeadingElement>;
  scrollingTextRef: React.RefObject<HTMLDivElement>;
  heroSectionRef: React.RefObject<HTMLElement>;
  projectsSectionRef: React.RefObject<HTMLElement>;
  projectsTitleRef: React.RefObject<HTMLHeadingElement>;
  projectsTrackRef: React.RefObject<HTMLDivElement>;
  projectsPinRef: React.RefObject<HTMLDivElement>;
  projectsArrowTargetRef: React.RefObject<HTMLDivElement>;
};

export const usePageAnimations = ({
  heroTitleText,
  statsSectionRef,
  typingTextRef,
  progressBarRef,
  expertiseSectionRef,
  expertiseCardsRef,
  expertiseArrowWrapperRef,
  servicesArrowTargetRef,
  projectCountRef,
  heroTitleRef,
  scrollingTextRef,
  heroSectionRef,
  projectsSectionRef,
  projectsTitleRef,
  projectsTrackRef,
  projectsPinRef,
  projectsArrowTargetRef,
}: UsePageAnimationsOptions) => {
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

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          requestAnimationFrame(raf);
        }
      }

      requestAnimationFrame(raf);

      lenis.on("scroll", ScrollTrigger.update);

      return () => {
        try {
          if (lenisRef.current) {
            lenisRef.current.destroy();
          }
        } catch (error) {
          console.error("Error destroying Lenis:", error);
        }
      };
    } catch (error) {
      console.error("Error initializing Lenis:", error);
    }
  }, []);

  useEffect(() => {
    if (!typingTextRef.current || !statsSectionRef.current) return;

    const text = typingTextRef.current.textContent || "";
    typingTextRef.current.textContent = "";

    const chars = text.split("");
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      typingTextRef.current?.appendChild(span);
    });

    const spans = typingTextRef.current.querySelectorAll("span");

    ScrollTrigger.create({
      trigger: statsSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(spans, {
          opacity: 1,
          duration: 0.05,
          stagger: 0.03,
          ease: "none",
        });
      },
      once: true,
    });

    if (progressBarRef.current) {
      const progressFill = progressBarRef.current.querySelector("div");
      if (progressFill) {
        const card = progressBarRef.current.closest(".group\\/card");
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(progressFill, {
              width: "66%",
              duration: 0.5,
              ease: "power2.out",
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(progressFill, {
              width: "33%",
              duration: 0.5,
              ease: "power2.out",
            });
          });
        }
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [progressBarRef, statsSectionRef, typingTextRef]);

  useEffect(() => {
    const cards = expertiseCardsRef.current ?? [];
    if (!expertiseSectionRef.current || cards.length === 0) return;

    cards.forEach((card) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 50,
        });
      }
    });

    ScrollTrigger.create({
      trigger: expertiseSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.3,
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === expertiseSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [expertiseCardsRef, expertiseSectionRef]);

  useEffect(() => {
    if (!expertiseSectionRef.current) return;

    const cardImages = [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    ];

    const cards = expertiseSectionRef.current.querySelectorAll(".expertise-card");
    const cleanupFunctions: (() => void)[] = [];

    cards.forEach((card, index) => {
      const numberSpan = card.querySelector(".expertise-number") as HTMLElement;

      const hoverImage = document.createElement("div");
      hoverImage.className = "hover-image";
      hoverImage.style.cssText = `
        position: fixed;
        width: 280px;
        height: 180px;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        transform: scale(0);
        background-image: url('${cardImages[index] || cardImages[0]}');
        background-size: cover;
        background-position: center;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        left: 0;
        top: 0;
        will-change: transform;
      `;
      document.body.appendChild(hoverImage);

      let isHovering = false;
      let isFirstMove = true;

      const followAnimation = gsap.to(hoverImage, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        paused: true,
      });

      if (numberSpan) {
        const handleMouseEnter = (e: MouseEvent) => {
          isHovering = true;
          isFirstMove = true;
          const isDark = document.documentElement.classList.contains("dark");
          gsap.to(numberSpan, {
            color: isDark ? "#ffffff" : "#000000",
            scale: 1.15,
            duration: 0.4,
            ease: "power2.out",
          });

          const x = e.clientX - 140;
          const y = e.clientY - 90;
          gsap.set(hoverImage, {
            x: x,
            y: y,
            opacity: 1,
            scale: 1,
          });
          hoverImage.style.display = "block";
        };

        const handleMouseLeave = () => {
          isHovering = false;
          isFirstMove = true;
          gsap.to(numberSpan, {
            color: "",
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(hoverImage, {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
              hoverImage.style.display = "none";
            },
          });
        };

        const handleMouseMove = (e: MouseEvent) => {
          if (!isHovering) return;

          const x = e.clientX - 140;
          const y = e.clientY - 90;

          if (isFirstMove) {
            gsap.set(hoverImage, {
              x: x,
              y: y,
            });
            isFirstMove = false;
          } else {
            followAnimation.vars.x = x;
            followAnimation.vars.y = y;
            followAnimation.invalidate().restart();
          }
        };

        card.addEventListener("mouseenter", handleMouseEnter as EventListener);
        card.addEventListener("mouseleave", handleMouseLeave);
        card.addEventListener("mousemove", handleMouseMove as EventListener);

        cleanupFunctions.push(() => {
          card.removeEventListener("mouseenter", handleMouseEnter as EventListener);
          card.removeEventListener("mouseleave", handleMouseLeave);
          card.removeEventListener("mousemove", handleMouseMove as EventListener);
          followAnimation.kill();
          hoverImage.remove();
        });
      }
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [expertiseSectionRef]);

  useEffect(() => {
    if (!statsSectionRef.current || !projectCountRef.current) return;

    if (projectCountRef.current) {
      projectCountRef.current.textContent = "0+";
    }

    ScrollTrigger.create({
      trigger: statsSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        const targetValue = 200;
        const duration = 2;
        const obj = { value: 0 };

        gsap.to(obj, {
          value: targetValue,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            if (projectCountRef.current) {
              projectCountRef.current.textContent = `${Math.round(obj.value)}+`;
            }
          },
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === statsSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [projectCountRef, statsSectionRef]);

  useEffect(() => {
    const arrowEl = expertiseArrowWrapperRef.current;
    const servicesTarget = servicesArrowTargetRef.current;
    const servicesSection = statsSectionRef.current;
    if (
      !arrowEl ||
      !servicesTarget ||
      !servicesSection
    ) {
      return;
    }

    const getDelta = (target: HTMLDivElement) => {
      const origin = arrowEl.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      return {
        x: targetRect.left - origin.left,
        y: targetRect.top - origin.top,
      };
    };

    const moveToTarget = (target: HTMLDivElement) => {
      const delta = getDelta(target);
      gsap.to(arrowEl, {
        x: delta.x,
        y: delta.y,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const moveBack = () => {
      gsap.to(arrowEl, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const servicesTrigger = ScrollTrigger.create({
      trigger: servicesSection,
      start: "top center",
      onEnter: () => moveToTarget(servicesTarget),
      onEnterBack: () => moveToTarget(servicesTarget),
      onLeaveBack: moveBack,
    });

    return () => {
      servicesTrigger.kill();
    };
  }, [
    expertiseArrowWrapperRef,
    servicesArrowTargetRef,
    statsSectionRef,
  ]);

  useEffect(() => {
    if (!heroTitleRef.current) return;

    const originalHTML = heroTitleRef.current.innerHTML;

    try {
      gsap.set(heroTitleRef.current, { opacity: 0 });

      const text = heroTitleText;

      if (!text) return;

      heroTitleRef.current.innerHTML = "";

      const textLower = text.toLowerCase();
      const creativeStartIndex = textLower.indexOf("creative");
      const creativeEndIndex =
        creativeStartIndex !== -1 ? creativeStartIndex + "creative".length : -1;

      const chars = text.split("");
      const spans: HTMLSpanElement[] = [];

      chars.forEach((char, index) => {
        const span = document.createElement("span");
        if (char === " ") {
          span.textContent = "\u00A0";
          span.style.width = "0.25em";
          span.style.display = "inline-block";
        } else if (char === "\n") {
          const br = document.createElement("br");
          heroTitleRef.current?.appendChild(br);
          return;
        } else {
          span.textContent = char;
          span.style.display = "inline-block";

          if (
            creativeStartIndex !== -1 &&
            index >= creativeStartIndex &&
            index < creativeEndIndex
          ) {
            span.style.fontStyle = "italic";
          }
        }
        span.style.willChange = "transform, opacity, filter";
        if (heroTitleRef.current) {
          heroTitleRef.current.appendChild(span);
        }
        spans.push(span);
      });

      spans.forEach((span) => {
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300;
        const randomZ = -800 - Math.random() * 700;
        const randomRotationX = (Math.random() - 0.5) * 180;
        const randomRotationY = (Math.random() - 0.5) * 180;

        gsap.set(span, {
          x: randomX,
          y: randomY,
          z: randomZ,
          rotationX: randomRotationX,
          rotationY: randomRotationY,
          opacity: 0,
          filter: "blur(25px)",
          transformStyle: "preserve-3d",
        });
      });

      if (scrollingTextRef.current) {
        const scrollingTexts = scrollingTextRef.current.querySelectorAll("h1");
        scrollingTexts.forEach((textEl) => {
          const originalText = textEl.textContent || "";
          const chars = originalText.split("");
          textEl.innerHTML = "";

          chars.forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            span.style.transformOrigin = "center bottom";
            textEl.appendChild(span);
          });

          const charSpans = Array.from(textEl.querySelectorAll("span"));

          gsap.set(charSpans, {
            scale: 0.05,
            opacity: 0,
            y: window.innerHeight * 0.3,
            x: 0,
          });

          gsap.to(charSpans, {
            scale: 1,
            opacity: 0.9,
            y: 0,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: {
              amount: 2,
              from: "start",
            },
          });
        });
      }

      gsap.to(heroTitleRef.current, {
        opacity: 1,
        duration: 0.01,
        delay: 0.4,
        onComplete: () => {
          gsap.to(spans, {
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.8,
            ease: "power3.out",
            stagger: {
              amount: 2,
              from: "random",
            },
            onComplete: () => {
              spans.forEach((span) => {
                span.style.willChange = "auto";
              });
            },
          });
        },
      });
    } catch (error) {
      console.error("Error in hero title animation:", error);
      if (heroTitleRef.current) {
        heroTitleRef.current.innerHTML = originalHTML;
        heroTitleRef.current.style.opacity = "1";
      }
    }

    return () => {
      if (heroTitleRef.current) {
        try {
          heroTitleRef.current.innerHTML = originalHTML;
        } catch (error) {
          console.error("Error cleaning up hero title:", error);
        }
      }
    };
  }, [heroTitleRef, heroTitleText, scrollingTextRef]);

  useEffect(() => {
    if (!heroTitleRef.current || !heroSectionRef.current) return;

    const checkSpans = setInterval(() => {
      const spans = heroTitleRef.current?.querySelectorAll("span");
      if (spans && spans.length > 0) {
        clearInterval(checkSpans);

        const spanElements = Array.from(spans) as HTMLElement[];
        const randomOffsets = spanElements.map(() => Math.random() * 150 + 50);

        ScrollTrigger.create({
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            spanElements.forEach((span, index) => {
              const yOffset = progress * -randomOffsets[index];
              gsap.set(span, {
                y: yOffset,
              });
            });
          },
        });
      }
    }, 100);

    return () => {
      clearInterval(checkSpans);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === heroSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [heroSectionRef, heroTitleRef]);

  useEffect(() => {
    if (
      !projectsSectionRef.current ||
      !projectsTitleRef.current ||
      !projectsTrackRef.current ||
      !projectsPinRef.current
    )
      return;

    const getStartX = () => {
      const firstCard =
        projectsTrackRef.current?.querySelector<HTMLElement>(".project-card");
      if (!firstCard || !projectsPinRef.current) return 0;
      const pinRect = projectsPinRef.current.getBoundingClientRect();
      const header = projectsPinRef.current.querySelector<HTMLElement>(
        ".projects-header-inner"
      );
      const headerLeft = header
        ? header.getBoundingClientRect().left - pinRect.left
        : 0;
      return headerLeft - firstCard.offsetLeft;
    };

    const getEndX = () => {
      if (!projectsTrackRef.current || !projectsPinRef.current) return 0;
      const cards =
        projectsTrackRef.current.querySelectorAll<HTMLElement>(".project-card");
      const lastCard = cards[cards.length - 1];
      if (!lastCard) return 0;
      const pinRect = projectsPinRef.current.getBoundingClientRect();
      const header = projectsPinRef.current.querySelector<HTMLElement>(
        ".projects-header-inner"
      );
      const headerRight = header
        ? header.getBoundingClientRect().right - pinRect.left
        : projectsPinRef.current.clientWidth;
      const lastRight = lastCard.offsetLeft + lastCard.clientWidth;
      return headerRight - lastRight;
    };

    const getHoldDistance = () =>
      Math.max(0, window.innerHeight * (window.innerWidth < 1024 ? 0.2 : 0.4));
    const getScrollDistance = () => {
      if (!projectsTrackRef.current || !projectsPinRef.current) {
        return window.innerHeight;
      }
      const travelFromHeader = Math.abs(getEndX() - getStartX());
      const trackWidth = projectsTrackRef.current.scrollWidth;
      const pinWidth = projectsPinRef.current.clientWidth;
      const travelFromWidth = Math.max(0, trackWidth - pinWidth);
      return getHoldDistance() + Math.max(travelFromHeader, travelFromWidth);
    };

    const projectCards = Array.from(
      projectsTrackRef.current.querySelectorAll<HTMLElement>(".project-card")
    );
    gsap.set(projectCards, { opacity: 0, y: 40, x: -60 });
    const cardsRevealTween = gsap.to(projectCards, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 2,
      ease: "power3.out",
      force3D: true,
      stagger: { each: 0.28, from: "start" },
      scrollTrigger: {
        trigger: projectsSectionRef.current,
        start: "top+=5% top",
        end: "top+=20% top",
        scrub: 1,
      },
    });

    if (projectsTitleRef.current) {
      gsap.set(projectsTitleRef.current, { opacity: 1, x: 0 });
    }

    gsap.set(projectsTrackRef.current, { x: getStartX() });

    const horizontalTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSectionRef.current,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: 1,
        pin: projectsPinRef.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => {
          gsap.set(projectsTrackRef.current, { x: getStartX() });
        },
      },
    });

    horizontalTimeline
      .to(projectsTrackRef.current, {
        x: () => getStartX(),
        duration: getHoldDistance(),
        ease: "none",
        force3D: true,
      })
      .to(projectsTrackRef.current, {
        x: () => getEndX(),
        duration: Math.abs(getEndX() - getStartX()),
        ease: "none",
        force3D: true,
      });

    return () => {
      cardsRevealTween.scrollTrigger?.kill();
      cardsRevealTween.kill();
      horizontalTimeline.scrollTrigger?.kill();
      horizontalTimeline.kill();
    };
  }, [
    projectsSectionRef,
    projectsTitleRef,
    projectsTrackRef,
    projectsPinRef,
  ]);
};
