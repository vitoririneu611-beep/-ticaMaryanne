/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

export const FinalInvitation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [zoomScale, setZoomScale] = useState(1.12);
  const [panelProgress, setPanelProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const vh = window.innerHeight || 800;
            // Progress from entering viewport to fully visible (0 to 1)
            const enterProgress = Math.min(Math.max((vh - rect.top) / (vh + rect.height * 0.5), 0), 1);
            // Scale reduces from 1.12 down to 1.00
            const currentScale = 1.12 - 0.12 * enterProgress;
            setZoomScale(currentScale);

            // Five panels entrance
            const p = Math.min(Math.max((vh * 0.85 - rect.top) / (vh * 0.5), 0), 1);
            setPanelProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Five transition panels
  const panelWidths = ['15%', '20%', '25%', '25%', '15%'];

  return (
    <section
      id="proximo-passo"
      ref={sectionRef}
      className="relative z-[2] bg-[#17130f] text-white min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden"
      aria-label="Convite final e agendamento"
    >
      {/* Zooming background Asset 2 */}
      <img
        src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029259/capahero_x1i5tq.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform select-none"
        style={{
          transform: `scale(${zoomScale})`,
          objectPosition: 'center 44%',
        }}
        loading="lazy"
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(10, 8, 6, 0.48), rgba(10, 8, 6, 0.68))',
        }}
        aria-hidden="true"
      />

      {/* Five-panel vertical transition overlay for atmospheric depth */}
      <div
        className="pointer-events-none absolute inset-0 flex overflow-hidden z-[1]"
        aria-hidden="true"
      >
        {panelWidths.map((w, i) => (
          <div
            key={i}
            className="h-full bg-[#17130f]/20 backdrop-blur-[2px] transition-transform duration-500 ease-out"
            style={{
              width: w,
              transform: `translateY(${(1 - panelProgress) * (i % 2 === 0 ? 40 : -40)}px)`,
              opacity: 0.2 + panelProgress * 0.5,
            }}
          />
        ))}
      </div>

      {/* Top spacer for breathing room */}
      <div className="relative z-[2] pt-24 md:pt-32" />

      {/* Centered content container (max-width 780px invitation copy) */}
      <div className="relative z-[2] w-full max-w-[780px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6 md:gap-8 my-auto py-12">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center font-display text-[14px] leading-[1.3] font-medium tracking-tight text-white/80">
          <span
            className="w-[7px] h-[7px] rounded-full bg-[#a9e94d] mr-[10px] shrink-0"
            aria-hidden="true"
          />
          <span className="uppercase">Próximo Passo</span>
        </div>

        {/* Big Invitation Headline */}
        <h2 className="font-display font-medium text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.12] tracking-[-0.04em] text-white m-0 text-balance">
          Pronto para cuidar de você com mais calma e significado?
        </h2>

        {/* Supporting Copy */}
        <p className="font-display text-[#e0e0e0] text-[16px] sm:text-[19px] leading-[1.5] tracking-[-0.02em] max-w-xl m-0">
          Descubra um caminho de autocuidado integrado, onde cada fase da sua jornada tem espaço para ser acolhida com sensibilidade, ciência e respeito ao seu tempo.
        </p>

        {/* Final LimePillCTA variant */}
        <div className="pt-4">
          <a
            href="#servicos"
            className="lime-pill-cta inline-flex items-center min-h-[52px] pl-5 pr-2 py-1.5 rounded-full bg-[#c0f85f] text-black font-display font-medium text-[15px] leading-none gap-[18px] focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>Conheça nossas frentes de cuidado</span>
            <span className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs text-[17px] font-bold">
              ↗️
            </span>
          </a>
        </div>
      </div>

      {/* Clean quiet editorial footer */}
      <div className="relative z-[2] w-full max-w-[1280px] mx-auto px-5 sm:px-8 xl:px-0 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-[13px] font-display">
        <p className="m-0">
          © Cuidado Integral. Todos os direitos reservados.
        </p>
        <p className="m-0">
          Bem-estar com sentido · Saúde com mais presença em cada fase.
        </p>
      </div>
    </section>
  );
};
