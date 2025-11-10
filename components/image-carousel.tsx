"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { motion, MotionProps } from "framer-motion";

const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;



type Slide = {
  id: number;
  url: string;
  jobTitle: string;
  subtitle: string;
  badge: string;
};

const slides: Slide[] = [
  {
    id: 1,
    url: "/professional-team-member-1.jpg",
    jobTitle: "Paukert Coupons",
    subtitle: "Hired 05 designers in 28 days",
    badge: "Hiring",
  },
  {
    id: 2,
    url: "/professional-team-member-2.jpg",
    jobTitle: "Specflicks",
    subtitle: "Hire a Full-Stack Engineer in 2 weeks",
    badge: "Fast to hire 5X",
  },
  {
    id: 3,
    url: "/professional-team-member-3.jpg",
    jobTitle: "Interview rate",
    subtitle: "80% success rate",
    badge: "Interview",
  },
  {
    id: 4,
    url: "/professional-team-member-4.jpg",
    jobTitle: "Quality talent",
    subtitle: "99% match accuracy",
    badge: "Premium",
  },
  {
    id: 5,
    url: "/professional-team-member-5.jpg",
    jobTitle: "Quick turnaround",
    subtitle: "24 hours guaranteed",
    badge: "Speed",
  },
  {
    id: 6,
    url: "/professional-team-member-6.jpg",
    jobTitle: "Best match",
    subtitle: "10X better results",
    badge: "Top Rated",
  },
];

export default function ImageCarousel() {
  const [active, setActive] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [cardWidth, setCardWidth] = useState(320);
  const [cardHeight, setCardHeight] = useState(420);
  const [cardGap, setCardGap] = useState(24);

  useEffect(() => {
    function updateSizes() {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(300);
        setCardHeight(380);
        setCardGap(16);
      } else if (w < 1024) {
        setCardWidth(320);
        setCardHeight(420);
        setCardGap(18);
      } else {
        setCardWidth(340);
        setCardHeight(440);
        setCardGap(24);
      }
    }
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Autoplay every 5s
  useEffect(() => {
    if (!isAutoPlay) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isAutoPlay]);

  const offset = cardWidth + cardGap;

  const totalVisible = useMemo(() => {
    const w = window?.innerWidth ?? 1200;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    return 3;
  }, []);

  const computeX = (index: number) => {
    const diff = index - active;
    let d = diff;
    const half = Math.floor(slides.length / 2);
    if (diff > half) d = diff - slides.length;
    if (diff < -half) d = diff + slides.length;
    return d * offset;
  };

  const goPrev = () => {
    setIsAutoPlay(false);
    setActive((s) => (s - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goNext = () => {
    setIsAutoPlay(false);
    setActive((s) => (s + 1) % slides.length);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "2.5rem 1rem",
    overflow: "hidden",
  };

  const viewportStyle: React.CSSProperties = {
    width:
      (cardWidth * 1.05 + cardGap * 2) *
        (totalVisible === 1 ? 1 : totalVisible) +
      40,
    maxWidth: "1200px",
  };

  return (
    <section
      className="relative w-full py-8 md:py-12"
      aria-label="Image carousel"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="mx-auto" style={containerStyle} ref={containerRef}>
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={viewportStyle}
        >
          {/* Left Arrow */}
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="absolute left-2 md:left-4 z-40 h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-sm"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          {/* Slides */}
          <div
            className="relative flex items-center"
            style={{
              width: "100%",
              height: cardHeight + 20,
              justifyContent: "center",
            }}
          >
            {slides.map((s, i) => {
              let rawDiff = i - active;
              const half = Math.floor(slides.length / 2);
              if (rawDiff > half) rawDiff -= slides.length;
              if (rawDiff < -half) rawDiff += slides.length;
              const absDiff = Math.abs(rawDiff);

              const shouldHide = absDiff > 3;

              let scale = 0.9;
              let opacity = 0.7;
              let z = 10;
              if (rawDiff === 0) {
                scale = 1.1;
                opacity = 1;
                z = 30;
              } else if (absDiff === 1) {
                scale = 0.95;
                opacity = 0.8;
                z = 20;
              } else if (absDiff === 2) {
                scale = 0.88;
                opacity = 0.55;
                z = 8;
              }

              const x = computeX(i);
              const custom = { scale, opacity, z, x };

              return (
                <motion.div
                  key={s.id}
                  custom={custom}
                  initial="enter"
                  animate={{
                    x,
                    scale,
                    opacity,
                    zIndex: z,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  style={{
                    position: "absolute",
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: 22,
                    overflow: "hidden",
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%)`,
                    willChange: "transform, opacity",
                  }}
                  data-slide-index={i}
                >
                  <MotionDiv
                    custom={custom}
                    animate={{
                      x,
                      scale,
                      opacity,
                      zIndex: z,
                      boxShadow:
                        rawDiff === 0
                          ? "0 30px 80px rgba(0,0,0,0.5)"
                          : rawDiff === 1 || rawDiff === -1
                          ? "0 18px 40px rgba(0,0,0,0.35)"
                          : "0 8px 20px rgba(0,0,0,0.25)",
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[18px] overflow-hidden border border-white/10 bg-black/10"
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                      touchAction: "manipulation",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={s.url}
                        alt={s.jobTitle}
                        fill
                        priority={i === active}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>

                    {/* Top-right badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white">
                      {s.badge}
                    </div>

                    {/* Bottom overlay */}
                    <div className="absolute left-4 bottom-4 bg-black/50 backdrop-blur-md rounded-lg p-4 max-w-[85%]">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {s.jobTitle}
                      </h3>
                      <p className="text-white/75 text-sm mt-1">
                        {s.subtitle}
                      </p>
                    </div>
                  </MotionDiv>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Next"
            onClick={goNext}
            className="absolute right-2 md:right-4 z-40 h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-sm"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="w-full flex items-center justify-center mt-6">
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActive(idx);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 5000);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-200 ${
                idx === active
                  ? "w-3 h-3 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
