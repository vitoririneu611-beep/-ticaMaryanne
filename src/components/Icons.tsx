/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * Asset 1: Wordmark Cuidado Integral
 * viewBox="0 0 507 152"
 * Símbolo de cruz em verde-lima (#c0f85f / #7eff22) e texto CUIDADO INTEGRAL em off-white (#f5f5f5).
 */
export const Wordmark: React.FC<{ className?: string }> = ({ className = 'w-[123px] h-[38px]' }) => (
  <svg
    viewBox="0 0 507 152"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Cuidado integral"
  >
    {/* Medical cross in lime green */}
    <g transform="translate(18, 28)">
      {/* Glow / soft shadow backing */}
      <rect x="26" y="8" width="44" height="80" rx="14" fill="#c0f85f" />
      <rect x="8" y="26" width="80" height="44" rx="14" fill="#c0f85f" />
      {/* Inner highlight */}
      <circle cx="48" cy="48" r="10" fill="#7eff22" opacity="0.6" />
    </g>

    {/* Text CUIDADO INTEGRAL */}
    <text
      x="132"
      y="88"
      fill="#f5f5f5"
      fontFamily="'Inter Tight', 'Inter', -apple-system, sans-serif"
      fontSize="36"
      fontWeight="700"
      letterSpacing="5"
    >
      CUIDADO INTEGRAL
    </text>
  </svg>
);

/**
 * Asset 3: Ícone de saúde e bem-estar
 * SVG 64 × 64 com círculo off-white, coração verde-lima, cruz médica escura e pequeno sinal de mais.
 */
export const IconHealth: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Ícone de saúde e bem-estar"
  >
    {/* Círculo off-white */}
    <circle cx="32" cy="32" r="30" fill="#f4f3ee" stroke="#e8e7e1" strokeWidth="1.5" />
    
    {/* Coração verde-lima */}
    <path
      d="M32 44.5C32 44.5 19 36.8 19 27.5C19 22.8 22.8 19 27.5 19C30.2 19 31.8 20.3 32 20.8C32.2 20.3 33.8 19 36.5 19C41.2 19 45 22.8 45 27.5C45 36.8 32 44.5 32 44.5Z"
      fill="#c0f85f"
    />
    
    {/* Cruz médica escura central */}
    <rect x="30" y="26" width="4" height="11" rx="1.5" fill="#17130f" />
    <rect x="26.5" y="29.5" width="11" height="4" rx="1.5" fill="#17130f" />
    
    {/* Pequeno sinal de mais */}
    <path
      d="M45 19V15M43 17H47"
      stroke="#7eff22"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Asset 4: Ícone de estética e autocuidado
 * SVG 64 × 64 com rosto linear, brilho verde-lima e círculo off-white.
 */
export const IconAesthetics: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Ícone de estética e autocuidado"
  >
    {/* Círculo off-white */}
    <circle cx="32" cy="32" r="30" fill="#f4f3ee" stroke="#e8e7e1" strokeWidth="1.5" />
    
    {/* Rosto linear calmo e elegante */}
    <path
      d="M26 21C34 21 38 25 38 31C38 34 36.5 36 34.5 37.5C33.5 38.3 33.5 39.5 34 40.5L34.5 41.5C35.2 43 33.5 44.5 31.5 44.5C27 44.5 24 39.5 24 33"
      stroke="#17130f"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 28.5C29.2 29.5 31.8 29.5 33 28.5"
      stroke="#17130f"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M28 35.5C30 36.5 31.5 36.5 33 35.5"
      stroke="#17130f"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    
    {/* Brilho verde-lima */}
    <path
      d="M44 21L45.2 24.8L49 26L45.2 27.2L44 31L42.8 27.2L39 26L42.8 24.8L44 21Z"
      fill="#c0f85f"
    />
    <circle cx="48" cy="35" r="2" fill="#7eff22" />
  </svg>
);

/**
 * Asset 5: Ícone de cuidado médico
 * SVG 64 × 64 com estetoscópio escuro, pontos verde-lima e círculo off-white.
 */
export const IconMedical: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Ícone de cuidado médico"
  >
    {/* Círculo off-white */}
    <circle cx="32" cy="32" r="30" fill="#f4f3ee" stroke="#e8e7e1" strokeWidth="1.5" />
    
    {/* Estetoscópio escuro */}
    <path
      d="M22 20V27C22 32.5 26.5 37 32 37C37.5 37 42 32.5 42 27V20"
      stroke="#17130f"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M32 37V42C32 45 34.5 47 37.5 47C40.5 47 43 44.5 43 41.5V40"
      stroke="#17130f"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="43" cy="39" r="4.5" fill="#17130f" />
    <circle cx="43" cy="39" r="2" fill="#c0f85f" />
    
    {/* Fones */}
    <circle cx="22" cy="19" r="2.5" fill="#17130f" />
    <circle cx="42" cy="19" r="2.5" fill="#17130f" />
    
    {/* Pontos verde-lima */}
    <circle cx="21" cy="45" r="2.5" fill="#c0f85f" />
    <circle cx="26" cy="49" r="1.8" fill="#7eff22" />
    <circle cx="17" cy="35" r="1.5" fill="#c0f85f" />
  </svg>
);

/**
 * Asset 6: Ícone de bem-estar e equilíbrio
 * SVG 64 × 64 com folha verde-lima e traços escuros dentro de círculo off-white.
 */
export const IconWellness: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Ícone de bem-estar e equilíbrio"
  >
    {/* Círculo off-white */}
    <circle cx="32" cy="32" r="30" fill="#f4f3ee" stroke="#e8e7e1" strokeWidth="1.5" />
    
    {/* Folha verde-lima orgânica */}
    <path
      d="M45 19C45 19 33 20 25 28C19.5 33.5 19 41.5 24 45C27.5 47.5 35 46.5 40 40C47 31 45 19 45 19Z"
      fill="#c0f85f"
    />
    
    {/* Traços escuros e nervura da folha */}
    <path
      d="M21 47C26 42 34 33 45 19"
      stroke="#17130f"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M30 37C34 38 37 36 37 36"
      stroke="#17130f"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M35 31C39 32 42 30 42 30"
      stroke="#17130f"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
