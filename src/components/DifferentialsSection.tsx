/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, HeartHandshake, Sparkles, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { DIFFERENTIALS, STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-[#2563eb]" />,
    Wrench: <Wrench className="w-6 h-6 text-[#2563eb]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#2563eb]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#c5a059]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#2563eb]" />,
  };

  return (
    <section
      id="diferenciais"
      className="py-16 md:py-24 bg-[#faf9f6] border-b border-[#e4e4e7]"
      aria-label="Diferenciais da Ótica e Relojoaria Maryanne"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Por Que Escolher a Maryanne
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#09090b] mt-2 mb-3">
            Compromisso com você, sua visão e seu estilo
          </h2>
          <p className="text-sm sm:text-base text-[#52525b] font-sans-body max-w-xl mx-auto">
            Mais de 25 anos construindo relações de respeito, qualidade técnica e confiança no Centro de Cafelândia.
          </p>
          <div className="w-16 h-0.5 bg-[#2563eb] mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={item.title}
              className={`p-7 rounded-2xl border transition-all duration-300 ${
                index === 0
                  ? 'bg-white border-[#2563eb]/40 shadow-modern md:col-span-2 lg:col-span-1'
                  : 'bg-white border-[#e4e4e7] hover:border-[#2563eb] shadow-modern hover:shadow-modern-hover'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-5 border border-[#2563eb]/20">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#2563eb]" />}
              </div>

              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#09090b] mb-2.5">
                {item.title}
              </h3>

              <p className="text-sm text-[#52525b] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Slogan card in deep modern jet black with vibrant blue */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#09090b] via-[#111827] to-[#09090b] text-white border border-[#2563eb]/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#60a5fa] font-bold mb-2 block">
                Tradição Cafelandense
              </span>
              <p className="font-serif-display italic text-2xl text-white leading-snug font-medium">
                “{STORE_CONFIG.name}: {STORE_CONFIG.slogan}”
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de falar com o atendimento da Ótica e Relojoaria Maryanne.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] hover:text-[#4ade80] font-bold inline-flex items-center gap-2 transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" color="#25D366" />
                <span>Falar com nossa equipe no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#25D366]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
