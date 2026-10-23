/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Store, Users, CheckCircle } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-nos"
      className="py-16 md:py-24 bg-white border-b border-[#e4e4e7]"
      aria-label="Sobre a Ótica e Relojoaria Maryanne"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Modern Vibrant Blue Touch */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Nossa Trajetória em Cafelândia
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#09090b] mt-2 mb-3">
            Uma história construída com confiança
          </h2>
          <p className="font-serif-display italic text-lg sm:text-xl text-[#2563eb] font-semibold">
            “{STORE_CONFIG.name}: {STORE_CONFIG.slogan}”
          </p>
          <div className="w-16 h-0.5 bg-[#2563eb] mx-auto mt-4" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#09090b] border border-[#27272a] shadow-modern aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
              <img
                src={STORE_CONFIG.images.realInteriorMain}
                alt="Salão de atendimento e mostruário óptico da Ótica e Relojoaria Maryanne em Cafelândia"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/85 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#2563eb] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Foto Real da Loja
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold text-white bg-[#09090b]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                  Salão de atendimento personalizado no Centro de Cafelândia
                </p>
              </div>
            </div>

            {/* Quick Milestones Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e4e4e7] hover:border-[#2563eb]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#2563eb] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-serif-display text-xl font-bold">1997</span>
                </div>
                <p className="text-xs text-[#52525b]">
                  Início da nossa história em artigos ópticos e relógios em setembro de 1997.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e4e4e7] hover:border-[#2563eb]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#2563eb] mb-1">
                  <Store className="w-4 h-4" />
                  <span className="font-serif-display text-xl font-bold">1999</span>
                </div>
                <p className="text-xs text-[#52525b]">
                  Inauguração da nossa loja física no Centro de Cafelândia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="prose prose-stone text-[#3f3f46] font-sans-body leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                A história da <strong className="text-[#09090b]">Ótica e Relojoaria Maryanne</strong> faz parte da própria história de Cafelândia. Nossos primeiros passos começaram em <strong>setembro de 1997</strong> e, em <strong>1999</strong>, inauguramos com muito orgulho nossa loja física própria no Centro da nossa cidade.
              </p>
              <p>
                Ao longo de mais de 25 anos de dedicação diária, construímos nossa trajetória com base naquilo que consideramos essencial: qualidade rigorosa, máxima precisão óptica, transparência e um atendimento acolhedor, próximo e dedicado a cada cliente e família da nossa comunidade.
              </p>
              <p className="text-sm text-[#52525b]">
                Hoje, você encontra aqui uma linha completa de armações de grau, óculos solares, óculos infantis, relógios de marcas renomadas, alianças para marcar suas maiores celebrações, pratas 925, folheados e nossa assistência especializada em reparos. É com essa certeza e carinho que mantemos vivo o lema que você já conhece e no qual sempre confia: <em className="text-[#09090b] font-serif-display not-italic font-bold">“Você conhece, você confia.”</em>
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="pt-4 border-t border-[#e4e4e7] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#09090b]">Atendimento Dedicado</h4>
                  <p className="text-xs text-[#71717a] mt-0.5">
                    Respeito às necessidades e ao gosto pessoal de cada cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#09090b]">Transparência e Confiança</h4>
                  <p className="text-xs text-[#71717a] mt-0.5">
                    Relações duradouras construídas com a população de Cafelândia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#09090b]">Precisão Óptica e Técnica</h4>
                  <p className="text-xs text-[#71717a] mt-0.5">
                    Cuidado minucioso nas medidas ópticas e regulagem de relógios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#09090b]">Vendas & Reparos</h4>
                  <p className="text-xs text-[#71717a] mt-0.5">
                    Assistência e suporte para manter suas peças sempre perfeitas.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Visit & WhatsApp CTA with Official Icon */}
            <div className="p-4 rounded-2xl bg-[#09090b] text-white border border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-md">
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span className="text-[#e4e4e7]">Visite nossa loja na Av. Gov. Moisés Lupion, 303.</span>
              </div>
              <a
                href={createWhatsAppUrl('Olá! Gostaria de conversar com a equipe da Ótica e Relojoaria Maryanne.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold transition-all duration-200 whitespace-nowrap shadow-xs group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
