/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MaryanneEyeIcon } from './BrandLogo.tsx';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const SloganBanner: React.FC = () => {
  return (
    <section
      className="relative z-10 -mt-6 sm:-mt-8 mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Slogan e Tradição da Ótica e Relojoaria Maryanne"
    >
      <div className="relative rounded-3xl bg-gradient-to-r from-[#09090b] via-[#0f172a] to-[#09090b] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-[#2563eb]/40 overflow-hidden">
        {/* Background decorative watermark of the eye symbol */}
        <div className="absolute right-[-20px] bottom-[-40px] opacity-10 pointer-events-none w-72 sm:w-96 text-white">
          <MaryanneEyeIcon className="w-full h-auto" color="#2563eb" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Slogan Highlight with Eye Icon (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#2563eb]/20 backdrop-blur-xs border border-[#2563eb]/40 text-xs text-[#93c5fd]">
              <Award className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span className="font-bold uppercase tracking-wider text-[11px]">
                Desde 1997 em Cafelândia · PR
              </span>
            </div>

            <div className="flex items-center gap-4 pt-1">
              {/* Highlighted Eye Icon in Black & Vibrant Blue */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                <MaryanneEyeIcon className="w-12 sm:w-16 text-[#3b82f6]" color="#3b82f6" />
              </div>

              <div>
                <p className="text-xs uppercase font-sans-body tracking-[0.25em] text-[#60a5fa] font-bold">
                  Ótica e Relojoaria
                </p>
                <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-none">
                  MARYANNE
                </h2>
              </div>
            </div>

            {/* Slogan in large, elegant, high-impact serif typography */}
            <div className="pt-2">
              <p className="font-serif-display italic text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug">
                “Você conhece, você confia.”
              </p>
              <p className="font-sans-body text-xs sm:text-sm text-[#cbd5e1] max-w-2xl mt-1.5 leading-relaxed">
                Mais de duas décadas de dedicação a você e à sua família em Cafelândia. Tradição em óculos de grau, solares, infantil, relógios, alianças, pratas, folheados e serviços especializados de reparos.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Trust Card & WhatsApp with Official Icon (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4 lg:border-l lg:border-white/15 lg:pl-8">
            <div className="space-y-1.5 text-left lg:text-right">
              <div className="flex items-center lg:justify-end gap-2 text-xs text-[#60a5fa]">
                <ShieldCheck className="w-4 h-4 text-[#3b82f6]" />
                <span className="font-bold uppercase tracking-wide">Atendimento Imediato</span>
              </div>
              <p className="text-xs text-[#94a3b8]">
                Precisa de um conserto, nova armação ou ajuste?
              </p>
            </div>

            <a
              href={createWhatsAppUrl('Olá! Vi o slogan "Você conhece, você confia" da Ótica e Relojoaria Maryanne e gostaria de um atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-102 group"
            >
              <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <p className="text-[11px] text-[#71717a] text-left lg:text-right">
              Av. Gov. Moisés Lupion, 303 · Centro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
