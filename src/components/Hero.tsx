/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Wrench, Sparkles } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { MaryanneEyeIcon } from './BrandLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const Hero: React.FC = () => {
  const heroPhotos = [
    {
      id: 'facade',
      label: 'Fachada Oficial',
      image: STORE_CONFIG.images.realFacade,
    },
    {
      id: 'interior',
      label: 'Salão Óptico',
      image: STORE_CONFIG.images.realInteriorMain,
    },
    {
      id: 'watches',
      label: 'Relógios & Joias',
      image: STORE_CONFIG.images.realWatchJewelry,
    },
  ];

  const [activePhoto, setActivePhoto] = useState(heroPhotos[0].image);
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-b from-[#ffffff] via-[#faf9f6] to-[#f4f4f5] overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 border-b border-[#e4e4e7]"
      aria-label="Apresentação da Ótica e Relojoaria Maryanne"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-7">
            {/* Modern Vibrant Blue Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#1d4ed8] text-xs font-semibold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" aria-hidden="true" />
              <span>Ótica & Relojoaria em Cafelândia</span>
              <span className="text-[#94a3b8]">·</span>
              <span className="text-[#09090b]">Desde {STORE_CONFIG.foundedYear}</span>
            </div>

            {/* Main Headline with Modern Typography */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#2563eb]">
                <MaryanneEyeIcon className="w-9 sm:w-11 text-[#2563eb]" color="#2563eb" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.24em] font-bold text-[#09090b]">
                  Ótica e Relojoaria Maryanne
                </span>
              </div>
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#09090b] leading-[1.1]">
                {STORE_CONFIG.secondarySlogan}
              </h1>
            </div>

            {/* Description */}
            <p className="font-sans-body text-base sm:text-lg text-[#3f3f46] leading-relaxed max-w-2xl font-normal">
              Há mais de 25 anos fazendo parte da história de Cafelândia, nós, da <strong className="text-[#09090b] font-semibold">Ótica e Relojoaria Maryanne</strong>, cuidamos da sua visão e do seu estilo com dedicação, máxima confiança e atendimento próximo. Aqui você encontra armações de grau, óculos solares e infantis, relógios de grandes marcas, alianças, pratas 925, folheados e serviços especializados de reparos.
            </p>

            {/* Slogan Card: Modern Black & Vibrant Blue with Eye Symbol */}
            <div className="p-5 rounded-2xl bg-white border border-[#2563eb]/30 w-full max-w-xl shadow-modern relative overflow-hidden group hover:border-[#2563eb] transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#2563eb]/10 to-transparent rounded-bl-3xl pointer-events-none" />

              <div className="flex items-center gap-4">
                {/* Official Eye Symbol in Modern Black Squircle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#09090b] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <MaryanneEyeIcon className="w-10 sm:w-12 text-[#2563eb]" color="#2563eb" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#2563eb] font-bold">
                      Slogan da Empresa
                    </p>
                  </div>
                  <p className="font-serif-display italic text-xl sm:text-2xl font-bold text-[#09090b] leading-tight">
                    “Você conhece, você confia.”
                  </p>
                  <p className="text-xs text-[#71717a] mt-1">
                    Mais de 25 anos cuidando com carinho da visão e do estilo de Cafelândia.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Actions with Official WhatsApp Icon */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1">
              <a
                href={createWhatsAppUrl('Olá! Estou no site da Ótica e Relojoaria Maryanne e gostaria de atendimento pelo WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#09090b] hover:bg-[#18181b] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-md hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[#25D366] group"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" color="#25D366" />
                <span>Falar no WhatsApp Agora</span>
                <ArrowRight className="w-4 h-4 text-[#3b82f6]" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#f4f4f5] text-[#09090b] font-semibold text-sm sm:text-base rounded-xl hover:bg-[#e4e4e7] transition-colors border border-[#d4d4d8] focus-visible:outline-2 focus-visible:outline-[#2563eb]"
              >
                Ver Produtos & Reparos
              </a>
            </div>

            {/* Fast Feature Pillars */}
            <div className="pt-3 border-t border-[#e4e4e7] w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#52525b]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2563eb] shrink-0" />
                <span>Ótica & Relojoaria</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Wrench className="w-4 h-4 text-[#2563eb] shrink-0" />
                <span>Serviços de Reparo</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Alianças & Joias</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#2563eb] shrink-0" />
                <span>Centro de Cafelândia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame with Real Store Photos (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Modern vibrant blue backdrop glow */}
              <div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#2563eb]/25 via-transparent to-[#09090b]/20 transform rotate-1 blur-xs pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#09090b] border border-[#27272a]">
                {/* Photo Display */}
                <div className="relative aspect-4/3 lg:aspect-5/4 overflow-hidden bg-black">
                  <img
                    src={activePhoto}
                    alt="Foto real da Ótica e Relojoaria Maryanne em Cafelândia"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Modern sleek gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-black/30 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Real Photo Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#09090b]/90 backdrop-blur-md text-[11px] font-bold text-white border border-white/20 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                      Foto Real da Loja
                    </span>
                  </div>

                  {/* Quick Photo Switcher Tabs */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#09090b]/85 backdrop-blur-md p-1 rounded-lg border border-white/15">
                    {heroPhotos.map((p, idx) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActivePhoto(p.image)}
                        className={`px-2 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                          activePhoto === p.image
                            ? 'bg-[#2563eb] text-white shadow-xs'
                            : 'text-[#cbd5e1] hover:text-white'
                        }`}
                        title={p.label}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  {/* Floating caption card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#e4e4e7] shadow-lg flex items-center justify-between z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#09090b] flex items-center justify-center shrink-0 shadow-xs">
                        <MaryanneEyeIcon className="w-6 text-[#2563eb]" color="#2563eb" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#09090b]">Ótica e Relojoaria Maryanne</p>
                        <p className="text-[11px] text-[#2563eb] font-semibold italic">“Você conhece, você confia.”</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-[#2563eb] px-2 py-1 rounded-md shrink-0 shadow-xs">
                      Cafelândia - PR
                    </span>
                  </div>
                </div>

                {/* Switcher labels bar below image */}
                <div className="p-2.5 bg-[#121215] border-t border-[#27272a] grid grid-cols-3 gap-1 text-[11px]">
                  {heroPhotos.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActivePhoto(p.image)}
                      className={`py-1.5 px-2 rounded-lg text-center font-medium transition-all cursor-pointer truncate ${
                        activePhoto === p.image
                          ? 'bg-[#2563eb]/20 text-[#60a5fa] border border-[#2563eb]/40 font-bold'
                          : 'text-[#a1a1aa] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
