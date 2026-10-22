/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { STORE_CONFIG } from '../data/config.ts';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      className="py-16 md:py-24 bg-white border-b border-[#e4e4e7]"
      aria-label="Localização da Ótica e Relojoaria Maryanne em Cafelândia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Como Nos Encontrar
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#09090b] mt-2 mb-3">
            No coração de Cafelândia, Paraná
          </h2>
          <p className="text-sm sm:text-base text-[#52525b] font-sans-body max-w-xl mx-auto">
            Localização privilegiada no Centro da cidade, com fácil acesso e estacionamento nas proximidades.
          </p>
          <div className="w-16 h-0.5 bg-[#2563eb] mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* Map and Address Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details & Facade Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#faf9f6] rounded-2xl overflow-hidden border border-[#e4e4e7] shadow-modern flex flex-col justify-between">
            {/* Real Building Facade Photo */}
            <div className="relative aspect-16/10 overflow-hidden bg-[#09090b]">
              <img
                src={STORE_CONFIG.images.realFacade}
                alt="Fachada real da Ótica e Relojoaria Maryanne na esquina em Cafelândia"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#2563eb] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Fachada da Loja
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <p className="font-semibold bg-[#09090b]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  Esquina com Av. Gov. Moisés Lupion, 303
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2563eb] font-bold">
                  Endereço Oficial
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[#09090b] mt-1 mb-1.5">
                  {STORE_CONFIG.name}
                </h3>
                <p className="text-sm text-[#3f3f46] leading-relaxed">
                  {STORE_CONFIG.address.street}
                </p>
                <p className="text-sm text-[#3f3f46] font-semibold">
                  {STORE_CONFIG.address.neighborhood} — {STORE_CONFIG.address.city}, {STORE_CONFIG.address.state}
                </p>
                <p className="text-xs text-[#71717a] mt-1 font-mono">
                  CEP: {STORE_CONFIG.address.zipCode} · Tel: {STORE_CONFIG.contact.phoneDisplay}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e4e4e7] space-y-2 text-xs text-[#52525b]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <span>Ponto de referência tradicional no Centro de Cafelândia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <span>Amplo estacionamento e facilidade de acesso</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={STORE_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#09090b] hover:bg-[#18181b] text-white text-sm font-bold rounded-xl transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#2563eb]"
                >
                  <Navigation className="w-4 h-4 text-[#3b82f6]" />
                  <span>Abrir Rota no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map iframe (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#e4e4e7] shadow-modern min-h-[350px] sm:min-h-[460px] relative bg-[#e4e4e7]">
            <iframe
              title="Localização da Ótica e Relojoaria Maryanne em Cafelândia - PR no Google Maps"
              src={STORE_CONFIG.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
