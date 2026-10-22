/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { CATALOG_ITEMS, createWhatsAppUrl, STORE_CONFIG } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'otica' | 'relojoaria-joias' | 'reparos'>('all');

  const filteredItems = activeCategory === 'all'
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  const categoryFilters = [
    { key: 'all', label: 'Todos os Produtos & Serviços' },
    { key: 'otica', label: 'Óptica & Armações' },
    { key: 'relojoaria-joias', label: 'Relógios, Alianças & Joias' },
    { key: 'reparos', label: 'Serviços de Reparos' },
  ];

  return (
    <section
      id="produtos"
      className="py-16 md:py-24 bg-[#faf9f6] border-b border-[#e4e4e7]"
      aria-label="Catálogo de Produtos e Serviços da Ótica e Relojoaria Maryanne"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Modern Vibrant Blue Accent */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Ótica, Relojoaria & Serviços
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#09090b] mt-2 mb-3">
            O que você encontra na Maryanne
          </h2>
          <p className="text-sm sm:text-base text-[#52525b] font-sans-body max-w-2xl mx-auto">
            Vendas e reparos em óculos, armações para adultos e infantil, relógios, alianças de compromisso e casamento, folheados e pratas 925 com atendimento de confiança.
          </p>
        </div>

        {/* Modern Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoryFilters.map((filter) => {
            const isActive = activeCategory === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveCategory(filter.key as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#09090b] text-white shadow-md border border-[#27272a]'
                    : 'bg-white text-[#52525b] hover:text-[#09090b] hover:bg-[#f4f4f5] border border-[#e4e4e7]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Product & Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e4e4e7] hover:border-[#2563eb] shadow-modern hover:shadow-modern-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Imagery */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#09090b]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Tag in Vibrant Blue */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-[#09090b]/90 backdrop-blur-xs text-white rounded-md border border-white/15 shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif-display text-2xl font-bold text-[#09090b] mb-2 group-hover:text-[#2563eb] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#52525b] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-[#f4f4f5] list-none m-0 p-0">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#71717a]">
                        <Check className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct WhatsApp Action Button with OFFICIAL WHATSAPP ICON */}
              <div className="p-6 pt-0">
                <a
                  href={createWhatsAppUrl(item.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#09090b] hover:bg-[#25D366] hover:text-white text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#25D366] group/btn"
                  title={`Perguntar sobre ${item.title} no WhatsApp`}
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover/btn:text-white transition-colors" color="currentColor" />
                  <span>{item.ctaText}</span>
                </a>
                <p className="text-[10px] text-center text-[#a1a1aa] mt-2">
                  Atendimento direto sobre este item no WhatsApp
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Bottom Banner with Slogan */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#09090b] via-[#111827] to-[#09090b] text-white shadow-2xl border border-[#2563eb]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#60a5fa] font-bold">
              Tradição e Confiança
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-white">
              “{STORE_CONFIG.name}: {STORE_CONFIG.slogan}”
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl">
              Não encontrou o que procurava ou tem uma peça para conserto? Fale com nossa equipe pelo WhatsApp ou venha nos visitar no Centro de Cafelândia.
            </p>
          </div>

          <a
            href={createWhatsAppUrl('Olá! Gostaria de saber mais sobre as opções e serviços na Ótica e Relojoaria Maryanne.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl shrink-0 group"
          >
            <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
