/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

export const EssenceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const [headerProgress, setHeaderProgress] = useState(0);
  const [lineScrub, setLineScrub] = useState<number[]>([0, 0, 0, 0]);
  const [cardsProgress, setCardsProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight || 800;

          // 1. Header entrance
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const p = Math.min(Math.max((vh * 0.9 - rect.top) / (vh * 0.4), 0), 1);
            setHeaderProgress(p);
          }

          // 2. Line by line text scrub
          const scrubs = lineRefs.current.map((el) => {
            if (!el) return 0;
            const rect = el.getBoundingClientRect();
            // Start when top reaches 85% of viewport, finish at 45% of viewport
            const p = Math.min(Math.max((vh * 0.85 - rect.top) / (vh * 0.4), 0), 1);
            return p;
          });
          setLineScrub(scrubs);

          // 3. Three cards 3D unfolding animation
          if (cardsWrapperRef.current) {
            const rect = cardsWrapperRef.current.getBoundingClientRect();
            const p = Math.min(Math.max((vh * 0.95 - rect.top) / (vh * 0.55), 0), 1);
            setCardsProgress(p);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const statementLines = [
    'Uma vida mais saudável começa',
    'com espaço para escuta,',
    'escolhas conscientes e apoio',
    'em cada etapa da jornada.',
  ];

  // Card transform styles
  const f = 1 - cardsProgress;
  const isComplete = cardsProgress >= 0.999;

  const card1Transform = isComplete
    ? 'perspective(1200px)'
    : `perspective(1200px) rotateY(${90 * f}deg) translateX(${200 * f}px) rotate(${10 * f}deg) scale(${0.5 + 0.5 * cardsProgress})`;

  const card2Transform = isComplete
    ? 'perspective(1200px)'
    : `perspective(1200px) rotateY(${90 * f}deg) translateY(${40 * f}px) rotate(${10 * f}deg) skewX(${20 * f}deg) scale(${0.5 + 0.5 * cardsProgress})`;

  const card3Transform = isComplete
    ? 'perspective(1200px)'
    : `perspective(1200px) rotateY(${90 * f}deg) translateX(${-200 * f}px) rotate(${-10 * f}deg) scale(${0.5 + 0.5 * cardsProgress})`;

  return (
    <section
      id="who-we-are"
      className="relative z-[2] bg-white text-[#111111] overflow-hidden flex flex-col items-center justify-center py-[30px] md:py-[40px] lg:py-[60px] px-5 sm:px-[30px]"
      aria-label="Nossa essência"
    >
      <div
        ref={containerRef}
        className="w-full max-w-[1280px] mx-auto flex flex-col items-center"
      >
        {/* Main column max-width 954px */}
        <div className="w-full max-w-[954px] flex flex-col gap-10 md:gap-[50px] lg:gap-[64px]">
          {/* Eyebrow & Animated Statement */}
          <div
            className="flex flex-col items-start gap-4 transition-all duration-300 will-change-transform"
            style={{
              opacity: headerProgress,
              transform: `translateY(${(1 - headerProgress) * 80}px)`,
            }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center font-display text-[16px] leading-[1.3] font-normal tracking-[-0.02em] text-[#111111]">
              <span
                className="w-[7px] h-[7px] rounded-full bg-[#a9e94d] mr-[10px] shrink-0"
                aria-hidden="true"
              />
              <span className="uppercase">NOSSA ESSÊNCIA</span>
            </div>

            {/* H2 Statement with 4 fixed visual lines */}
            <h2 className="font-display font-medium text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.03em] m-0">
              {statementLines.map((line, idx) => {
                const scrub = lineScrub[idx] ?? 0;
                const pos = (1 - scrub) * 100;
                return (
                  <span
                    key={idx}
                    ref={(el) => {
                      lineRefs.current[idx] = el;
                    }}
                    className="text-scrub-line whitespace-normal lg:whitespace-nowrap"
                    style={{
                      backgroundPosition: `${pos}% 0%`,
                    }}
                  >
                    {line}
                  </span>
                );
              })}
            </h2>
          </div>

          {/* Three Unfolding Portrait Cards (Asset 7) */}
          <div
            ref={cardsWrapperRef}
            className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-5 lg:gap-6 pt-2"
          >
            {/* Card 1 */}
            <div
              className="flex-1 h-[260px] sm:h-[280px] md:h-[309px] rounded-[12px] overflow-hidden bg-[#e9e3da] shadow-sm will-change-transform transition-transform ease-out"
              style={{
                transform: card1Transform,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/mulher_umzarh.png"
                alt="Retrato de mulher"
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>

            {/* Card 2 */}
            <div
              className="flex-1 h-[260px] sm:h-[280px] md:h-[309px] rounded-[12px] overflow-hidden bg-[#e9e3da] shadow-sm will-change-transform transition-transform ease-out"
              style={{
                transform: card2Transform,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/mulher_umzarh.png"
                alt="Retrato de mulher"
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>

            {/* Card 3 */}
            <div
              className="flex-1 h-[260px] sm:h-[280px] md:h-[309px] rounded-[12px] overflow-hidden bg-[#e9e3da] shadow-sm will-change-transform transition-transform ease-out"
              style={{
                transform: card3Transform,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/mulher_umzarh.png"
                alt="Retrato de mulher"
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
