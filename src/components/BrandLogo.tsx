/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header' | 'hero' | 'badge';
  showSlogan?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Ícone do Olho Oficial da Ótica e Relojoaria Maryanne
 * Fiel aos detalhes da foto: sobrancelha arqueada, pálpebras estilizadas
 * e pupila com corte crescente característico.
 */
export const MaryanneEyeIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-auto',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 200 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Símbolo oficial do olho Ótica e Relojoaria Maryanne"
      role="img"
    >
      <defs>
        {/* Máscara para criar o recorte crescente exato da pupila */}
        <mask id="pupil-crescent-mask">
          <rect width="200" height="110" fill="white" />
          <circle cx="117" cy="57" r="11" fill="black" />
        </mask>
      </defs>

      {/* 1. Sobrancelha superior arqueada e esguia */}
      <path
        d="M 18 48 C 50 32, 116 32, 182 58 C 128 40, 62 40, 18 48 Z"
        fill={color}
      />

      {/* 2. Pálpebra superior com ponta no canto interno e terminação à direita */}
      <path
        d="M 68 49 C 46 54, 32 64, 32 64 C 32 64, 52 52, 90 46 C 128 40, 168 48, 182 58 C 156 50, 118 45, 82 51 Z"
        fill={color}
      />

      {/* 3. Pálpebra inferior com curvatura anatômica e terminação delicada */}
      <path
        d="M 32 64 C 48 76, 88 86, 134 83 C 162 81, 178 74, 186 68 C 168 76, 126 80, 85 78 C 56 76, 40 70, 32 64 Z"
        fill={color}
      />

      {/* 4. Pupila sólida com o corte crescente idêntico à foto */}
      <circle
        cx="108"
        cy="65"
        r="16.5"
        fill={color}
        mask="url(#pupil-crescent-mask)"
      />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  showSlogan = false,
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 sm:w-9',
    md: 'w-10 sm:w-12',
    lg: 'w-14 sm:w-16',
    xl: 'w-20 sm:w-24',
  };

  const titleSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* Ícone estilizado do olho com azul vivo moderno */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <MaryanneEyeIcon
          className={`${iconSizes[size]} ${
            isLight ? 'text-white' : 'text-[#09090b]'
          }`}
          color={isLight ? '#ffffff' : '#09090b'}
        />
      </div>

      {/* Textos da Marca e Tipografia Moderna */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
          <span
            className={`text-[9px] sm:text-[10px] uppercase font-sans-body tracking-[0.24em] font-bold leading-tight ${
              isLight ? 'text-[#93c5fd]' : 'text-[#2563eb]'
            }`}
          >
            Ótica e Relojoaria
          </span>
        </div>

        <span
          className={`font-serif-display font-bold tracking-tight leading-none ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#09090b]'
          }`}
        >
          MARYANNE
        </span>

        {showSlogan && (
          <span
            className={`font-serif-display italic text-xs sm:text-sm mt-0.5 tracking-wide ${
              isLight ? 'text-[#e2e8f0]' : 'text-[#c5a059]'
            }`}
          >
            Você conhece, você confia.
          </span>
        )}
      </div>
    </div>
  );
};
