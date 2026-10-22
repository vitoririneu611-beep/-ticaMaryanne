/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { IconHealth, IconAesthetics, IconMedical, IconWellness } from './Icons.tsx';

export const BrandTransition: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight || 800;
          const currentY = window.scrollY;
          // Progress across first hero height (0 to 1)
          const p = Math.min(Math.max(currentY / vh, 0), 1);
          setScrollProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Panel configurations (desktop travels: 254, 352, 629, 352, 202)
  const panels = [
    { width: '15%', travel: 254 },
    { width: '20%', travel: 352 },
    { width: '25%', travel: 629 },
    { width: '25%', travel: 352 },
    { width: '15%', travel: 202 },
  ];

  return (
    <section
      id="brand-section"
      className="relative z-[2] bg-white text-[#111111] py-8 md:py-12 overflow-hidden"
      aria-label="Transição e pilares visuais"
    >
      {/* Five-panel vertical transition overlay */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-[570px] md:h-[834px] -translate-y-full flex overflow-hidden z-[2]"
        aria-hidden="true"
      >
        {panels.map((panel, idx) => {
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const scaleFactor = isMobile ? 570 / 834 : 1;
          const translateY = -panel.travel * scrollProgress * scaleFactor;

          return (
            <div
              key={idx}
              className="h-full bg-white transition-transform ease-out will-change-transform"
              style={{
                width: panel.width,
                transform: `translateY(${translateY}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Infinite icon ticker */}
      <div className="w-full min-h-[120px] overflow-hidden flex items-center relative py-4">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="ticker-track flex items-center"
          role="img"
          aria-label="Ícones de saúde e bem-estar em movimento"
        >
          {/* First List */}
          <ul
            className="flex items-center gap-[72px] px-9 list-none m-0 shrink-0"
            aria-label="Ícones ilustrativos"
          >
            {/* Sequence: Assets 3, 4, 5, 6 repeated twice */}
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconHealth className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconAesthetics className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconMedical className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconWellness className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconHealth className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconAesthetics className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconMedical className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconWellness className="w-14 h-14 object-contain" />
              </div>
            </li>
          </ul>

          {/* Duplicated List for seamless infinite loop */}
          <ul
            className="flex items-center gap-[72px] px-9 list-none m-0 shrink-0"
            aria-hidden="true"
          >
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconHealth className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconAesthetics className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconMedical className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconWellness className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconHealth className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconAesthetics className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconMedical className="w-14 h-14 object-contain" />
              </div>
            </li>
            <li className="shrink-0">
              <div className="w-[154px] h-[100px] rounded-xl bg-[#faf9f5] border border-[#e4e4e4]/80 flex items-center justify-center ticker-icon-card cursor-default shadow-2xs">
                <IconWellness className="w-14 h-14 object-contain" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
