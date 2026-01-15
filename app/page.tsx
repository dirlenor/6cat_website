"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const statsSectionRef = useRef<HTMLElement>(null);
  const typingTextRef = useRef<HTMLParagraphElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const expertiseSectionRef = useRef<HTMLElement>(null);
  const expertiseCardsRef = useRef<HTMLDivElement[]>([]);
  const projectCountRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const scrollingTextRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check current theme on mount
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    // Initialize Lenis smooth scroll
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

    // Connect Lenis with GSAP ScrollTrigger
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!typingTextRef.current || !statsSectionRef.current) return;

    const text = typingTextRef.current.textContent || "";
    typingTextRef.current.textContent = "";

    // Split text into characters and wrap each in a span
    const chars = text.split("");
    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      typingTextRef.current?.appendChild(span);
    });

    const spans = typingTextRef.current.querySelectorAll("span");

    // Create ScrollTrigger animation
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

    // Progress bar hover animation
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
  }, []);

  useEffect(() => {
    if (!expertiseSectionRef.current || expertiseCardsRef.current.length === 0) return;

    // Set initial state - cards are hidden (opacity 0, translateY)
    expertiseCardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 50,
        });
      }
    });

    // Create ScrollTrigger animation
    ScrollTrigger.create({
      trigger: expertiseSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(expertiseCardsRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.3, // 0.3s delay between each card
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
  }, []);

  useEffect(() => {
    if (!expertiseSectionRef.current) return;

    // Different images for each card (landscape orientation)
    const cardImages = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80', // Brand Strategy
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80', // UI/UX Design
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80', // Development
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80', // Digital Marketing
    ];

    const cards = expertiseSectionRef.current.querySelectorAll(".expertise-card");
    const cleanupFunctions: (() => void)[] = [];
    
    cards.forEach((card, index) => {
      const numberSpan = card.querySelector(".expertise-number") as HTMLElement;
      
      // Create image element for hover effect
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
      
      // Create GSAP animation for smooth follow
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
          
          // Set initial position immediately on first hover
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
          
          // Hide image immediately
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
          
          const x = e.clientX - 140; // Center the image on cursor (half of width)
          const y = e.clientY - 90; // Center the image on cursor (half of height)
          
          // On first move, set position immediately, then use smooth follow
          if (isFirstMove) {
            gsap.set(hoverImage, {
              x: x,
              y: y,
            });
            isFirstMove = false;
          } else {
            // Update image position with smooth follow
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
  }, []);

  useEffect(() => {
    if (!statsSectionRef.current || !projectCountRef.current) return;

    // Set initial value
    if (projectCountRef.current) {
      projectCountRef.current.textContent = "0+";
    }

    // Create count up animation
    ScrollTrigger.create({
      trigger: statsSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        const targetValue = 200;
        const duration = 2; // 2 seconds
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
  }, []);

  useEffect(() => {
    if (!heroTitleRef.current) return;

    // Set initial opacity to 0
    gsap.set(heroTitleRef.current, { opacity: 0 });

    // Get text content and preserve line breaks
    const originalHTML = heroTitleRef.current.innerHTML;
    const text = heroTitleRef.current.textContent || "";
    heroTitleRef.current.innerHTML = "";

    // Split text into characters and wrap each in a span
    const chars = text.split("");
    const spans: HTMLSpanElement[] = [];

    chars.forEach((char) => {
      const span = document.createElement("span");
      if (char === " ") {
        span.textContent = "\u00A0";
        span.style.width = "0.25em"; // Add width for space
        span.style.display = "inline-block";
      } else if (char === "\n") {
        const br = document.createElement("br");
        heroTitleRef.current?.appendChild(br);
        return;
      } else {
        span.textContent = char;
        span.style.display = "inline-block";
      }
      span.style.willChange = "transform, opacity, filter";
      heroTitleRef.current?.appendChild(span);
      spans.push(span);
    });

    // Set initial state with random positions and blur
    spans.forEach((span) => {
      const randomX = (Math.random() - 0.5) * 300; // -150 to 150
      const randomY = (Math.random() - 0.5) * 300; // -150 to 150
      const randomZ = -800 - Math.random() * 700; // -800 to -1500
      const randomRotationX = (Math.random() - 0.5) * 180; // -90 to 90
      const randomRotationY = (Math.random() - 0.5) * 180; // -90 to 90

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

    // Animate scrolling text immediately
    if (scrollingTextRef.current) {
      const scrollingTexts = scrollingTextRef.current.querySelectorAll("h1");
      scrollingTexts.forEach((text) => {
        const originalText = text.textContent || "";
        const chars = originalText.split("");
        text.innerHTML = "";
        
        chars.forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.transformOrigin = "center bottom";
          text.appendChild(span);
        });
        
        const charSpans = Array.from(text.querySelectorAll("span"));
        
        // Set initial state - small and centered at bottom, invisible
        gsap.set(charSpans, {
          scale: 0.05,
          opacity: 0,
          y: window.innerHeight * 0.3, // Position at bottom center
          x: 0,
        });
        
        // Animate to large and scroll position (stack effect)
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

    // Show the container first, then animate spans with delay
    gsap.to(heroTitleRef.current, {
      opacity: 1,
      duration: 0.01,
      delay: 0.4,
      onComplete: () => {
        // Animate all spans after delay
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

    return () => {
      if (heroTitleRef.current) {
        heroTitleRef.current.innerHTML = originalHTML;
      }
    };
  }, []);

  useEffect(() => {
    if (!heroTitleRef.current || !heroSectionRef.current) return;

    // Wait for spans to be created
    const checkSpans = setInterval(() => {
      const spans = heroTitleRef.current?.querySelectorAll("span");
      if (spans && spans.length > 0) {
        clearInterval(checkSpans);
        
        // Create random offset for each character
        const spanElements = Array.from(spans) as HTMLElement[];
        const randomOffsets = spanElements.map(() => Math.random() * 150 + 50); // Random between 50-200
        
        // Create parallax effect for each character
        ScrollTrigger.create({
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            spanElements.forEach((span, index) => {
              const yOffset = progress * -randomOffsets[index]; // Each character moves up with different speed
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
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 light-mode-grid dark:dark-mode-grid grid-background w-full h-full"></div>

      <header className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-xl font-display">
            6
          </div>
          <span className="font-bold text-xl font-display hidden sm:block">
            CAT
          </span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide absolute left-1/2 -translate-x-1/2">
          <a className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible" href="#">
            <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
            <span className="relative z-10">Home</span>
          </a>
          <a className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible" href="#">
            <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
            <span className="relative z-10">About Us</span>
          </a>
          <a className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible" href="#">
            <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
            <span className="relative z-10">Services</span>
          </a>
          <a className="relative group hover:text-black dark:hover:text-white transition-colors px-3 py-2 overflow-visible" href="#">
            <div className="nav-box absolute top-0 left-0 w-[120%] h-full bg-primary rounded-md -z-10 -translate-x-[10%]"></div>
            <span className="relative z-10">Contact Us</span>
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <button
            className="p-2.5 bg-black dark:bg-white rounded-full hover:scale-105 transition-transform"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            className="flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:scale-105 transition-transform group"
            href="#"
          >
            Hire agency
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <button className="lg:hidden text-2xl">
          <span className="material-icons">menu</span>
        </button>
      </header>

      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-40 mix-blend-difference text-gray-500 dark:text-gray-400">
        <a
          className="writing-mode-vertical rotate-180 hover:text-primary transition-colors flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
          href="#"
          style={{ writingMode: "vertical-rl" }}
        >
          Facebook
        </a>
        <a
          className="writing-mode-vertical rotate-180 hover:text-primary transition-colors flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
          href="#"
          style={{ writingMode: "vertical-rl" }}
        >
          Instagram
        </a>
      </div>

      <main className="flex-grow flex flex-col relative w-full pt-20">
        <section
          ref={heroSectionRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden w-full -mt-20"
        >
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <div className="w-[60vh] h-[60vh] border-[1px] border-black/10 dark:border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-[90%] h-[90%] border-[1px] border-dashed border-black/10 dark:border-white/10 rounded-full"></div>
              <div
                className="absolute inset-0 w-full h-full rounded-full opacity-10 dark:opacity-5"
                style={{
                  background:
                    "repeating-conic-gradient(from 0deg, transparent 0deg 4deg, currentColor 4deg 5deg)",
                }}
              ></div>
            </div>
            <div className="absolute top-[20%] right-[20%] w-8 h-8 rounded-full bg-primary animate-float blur-sm"></div>
            <div
              className="absolute bottom-[30%] left-[25%] w-4 h-4 rounded-full bg-black dark:bg-white animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden pointer-events-none z-10">
            <div className="w-full overflow-hidden">
              <div
                ref={scrollingTextRef}
                className="flex animate-scroll whitespace-nowrap"
              >
                <h1 className="text-[35vw] font-display font-bold text-primary opacity-90 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-normal dark:opacity-80 scale-110 whitespace-nowrap inline-block">
                  6CAT AGENCY
                </h1>
                <h1 className="text-[35vw] font-display font-bold text-primary opacity-90 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-normal dark:opacity-80 scale-110 whitespace-nowrap inline-block ml-[10vw]">
                  6CAT AGENCY
                </h1>
              </div>
            </div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h2
              ref={heroTitleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-black dark:text-white leading-[0.9] drop-shadow-sm"
              style={{ transformStyle: "preserve-3d", perspective: "1000px", opacity: 0 }}
            >
              6CAT Agency Creative Design.
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              <button className="md:hidden px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform">
                Hire Us
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 w-full z-20 px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2 group cursor-pointer hover:text-black dark:hover:text-white transition-colors">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black group-hover:border-primary group-hover:bg-primary transition-colors">
                </span>
                <span>Full Service Web Design Agency</span>
              </div>
              <div className="hidden md:block w-16 h-[1px] bg-gray-300 dark:bg-gray-800"></div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-black dark:hover:text-white transition-colors">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black group-hover:border-primary group-hover:bg-primary transition-colors">
                </span>
                <span>Located at Bangkok</span>
              </div>
              <div className="hidden md:block w-16 h-[1px] bg-gray-300 dark:bg-gray-800"></div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-black dark:hover:text-white transition-colors">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black group-hover:border-primary group-hover:bg-primary transition-colors">
                </span>
                <span>Award Winning Agency</span>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={expertiseSectionRef}
          className="relative z-10 w-full px-6 md:px-12 py-24 md:py-32"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white uppercase tracking-tight">
                Our Expertise
              </h2>
              <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800 mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div
                ref={(el) => {
                  if (el) expertiseCardsRef.current[0] = el;
                }}
                className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
                <div className="flex justify-between items-start mb-6">
                  <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-gray-800 select-none">01</span>
                  <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">Brand Strategy</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">Defining the core of your business to create a lasting impact and meaningful connections.</p>
                </div>
              </div>
              <div
                ref={(el) => {
                  if (el) expertiseCardsRef.current[1] = el;
                }}
                className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
                <div className="flex justify-between items-start mb-6">
                  <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-gray-800 select-none">02</span>
                  <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">UI/UX Design</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">Designing intuitive and beautiful interfaces that ensure a seamless user experience.</p>
                </div>
              </div>
              <div
                ref={(el) => {
                  if (el) expertiseCardsRef.current[2] = el;
                }}
                className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
                <div className="flex justify-between items-start mb-6">
                  <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-gray-800 select-none">03</span>
                  <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">Development</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">Building robust, scalable, and high-performance digital solutions tailored to your needs.</p>
                </div>
              </div>
              <div
                ref={(el) => {
                  if (el) expertiseCardsRef.current[3] = el;
                }}
                className="group expertise-card relative flex flex-col justify-between h-full min-h-[200px] border-t border-transparent hover:border-primary transition-all duration-300 pt-6"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:shadow-[0_0_10px_#C3F53C] transition-all duration-300"></div>
                <div className="flex justify-between items-start mb-6">
                  <span className="expertise-number text-6xl md:text-7xl font-display font-bold text-gray-200 dark:text-gray-800 select-none">04</span>
                  <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">Digital Marketing</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">Driving growth and engagement through data-driven strategies and creative campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={statsSectionRef}
          className="relative z-10 w-full px-6 md:px-12 py-24 md:py-32 bg-background-light dark:bg-background-dark"
        >
          <div className="max-w-7xl mx-auto">
            {/* Top Three Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Left Block - Dark Card with Toggle */}
              <div className="bg-black dark:bg-gray-900 rounded-2xl p-8 flex flex-col justify-between min-h-[400px] group/card overflow-hidden">
                <div className="overflow-hidden">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center">
                    <svg
                      className="w-full h-full text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                  <p
                    ref={typingTextRef}
                    className="text-white text-lg leading-relaxed break-words overflow-wrap-anywhere"
                  >
                    Cutting-edge digital solutions with enterprise-grade infrastructure & seamless workflows — deliver exceptional results, on any platform.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div
                    ref={progressBarRef}
                    className="flex-1 h-1.5 bg-gray-700 rounded-full relative cursor-pointer"
                  >
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-white text-sm font-medium">Creative Mode</span>
                </div>
              </div>

              {/* Middle Block - Image Card */}
              <div className="relative rounded-2xl overflow-hidden min-h-[400px] bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                    alt="Creative team working together"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <button className="w-full px-6 py-3 bg-primary text-black rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                    Team & Individual Projects
                  </button>
                </div>
              </div>

              {/* Right Block - Statistics Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 min-h-[400px] flex flex-col">
                <div className="mb-8">
                  <div
                    ref={projectCountRef}
                    className="text-6xl md:text-7xl font-display font-bold text-black dark:text-white mb-2"
                  >
                    0+
                  </div>
                  <div className="text-xl font-display font-semibold text-black dark:text-white mb-4">
                    Projects Delivered
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Expert teams ready to elevate your brand from concept to market leader.
                  </p>
                </div>
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Web Design</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-black dark:text-white">85</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Branding</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 3 ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-black dark:text-white">72</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Development</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-black dark:text-white">90</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Section Heading */}
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-display font-medium text-black dark:text-white">
                A few more facts about us in numbers
              </h3>
            </div>

            {/* Bottom Four Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-3">
                  12,000+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Hours of work annually
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-3">
                  89%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Client Satisfaction Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-3">
                  1,200+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Active Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-3">
                  125+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Annual Projects
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
