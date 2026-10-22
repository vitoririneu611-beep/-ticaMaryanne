/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Maximize2, X, Sparkles, Clock, Eye } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { MaryanneEyeIcon } from './BrandLogo.tsx';

interface TourItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  whatsappMessage: string;
  whatsappCta: string;
}

export const StoreTourSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<TourItem | null>(null);

  const tourItems: TourItem[] = [
    {
      id: 'facade',
      title: 'Fachada Oficial no Centro',
      subtitle: 'Av. Governador Moisés Lupion, 303 (Esquina Tradicional)',
      badge: 'Fachada & Localização',
      image: STORE_CONFIG.images.realFacade,
      description:
        'Prédio de esquina com fachada moderna, letreiro tridimensional imponente da Ótica e Relojoaria Maryanne e vitrines amplas. Fácil acesso no coração comercial de Cafelândia.',
      highlights: [
        'Esquina tradicional e ponto de referência',
        'Letreiro comemorativo e iluminado',
        'Telefone (45) 3241-1966 em destaque',
      ],
      whatsappMessage:
        'Olá! Vi a foto da fachada da Ótica e Relojoaria Maryanne e gostaria de saber mais informações sobre como chegar e horários de atendimento.',
      whatsappCta: 'Consultar Como Chegar',
    },
    {
      id: 'interior',
      title: 'Salão Principal & Consultoria Óptica',
      subtitle: 'Ambiente climatizado, sofisticado e acolhedor',
      badge: 'Atendimento & Óptica',
      image: STORE_CONFIG.images.realInteriorMain,
      description:
        'Espaço amplo com mesas de atendimento personalizado, parede viva verde com o letreiro oficial Ótica Maryanne, iluminação planejada e mostruários com armações de grau, solares e linha infantil.',
      highlights: [
        'Mesas de atendimento individualizado',
        'Centenas de armações masculinas, femininas e infantis',
        'Ajuste técnico facial no ato da compra',
      ],
      whatsappMessage:
        'Olá! Gostaria de agendar ou saber mais sobre o atendimento para escolha de armações e orçamento de lentes no salão da Ótica Maryanne.',
      whatsappCta: 'Agendar Atendimento de Óculos',
    },
    {
      id: 'relojoaria-joias',
      title: 'Espaço de Relojoaria, Alianças e Joias',
      subtitle: 'Vitrines exclusivas de relógios, alianças de casamento e pratas 925',
      badge: 'Relógios & Alianças',
      image: STORE_CONFIG.images.realWatchJewelry,
      description:
        'Setor exclusivo da loja com letreiro luminoso, expositores de relógios de marcas consagradas, parede de relógios de parede e balcão com mostruários de alianças para noivado e casamento, colares e pratas 925.',
      highlights: [
        'Mostruário com caixas aveludadas de alianças',
        'Relógios de pulso masculinos e femininos com garantia',
        'Pratas legítimas 925 e folheados para presentes',
      ],
      whatsappMessage:
        'Olá! Gostaria de ver modelos de relógios, alianças e joias do mostruário da Ótica e Relojoaria Maryanne.',
      whatsappCta: 'Consultar Relógios & Alianças',
    },
  ];

  return (
    <section
      id="espaco"
      className="py-16 md:py-24 bg-[#09090b] text-white border-b border-[#27272a] relative overflow-hidden"
      aria-label="Conheça a loja física da Ótica e Relojoaria Maryanne em Cafelândia"
    >
      {/* Subtle modern ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#60a5fa] text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span>Nossa Estrutura Física em Cafelândia</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3">
            Conheça o Nosso Espaço
          </h2>

          <div className="flex items-center justify-center gap-2 text-[#60a5fa] font-serif-display italic text-lg sm:text-xl font-bold">
            <MaryanneEyeIcon className="w-5 text-[#2563eb]" color="#2563eb" />
            <span>“{STORE_CONFIG.slogan}”</span>
          </div>

          <p className="text-sm sm:text-base text-[#a1a1aa] font-sans-body max-w-2xl mx-auto mt-3">
            Mais de duas décadas recebendo as famílias de Cafelândia e região com carinho, tecnologia, precisão óptica e um mostruário completo de relógios e joias.
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* 3 Real Photo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {tourItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#121215] rounded-2xl overflow-hidden border border-[#27272a] hover:border-[#2563eb] transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Photo Container with Click to Zoom */}
                <div
                  className="relative aspect-4/3 overflow-hidden bg-black cursor-pointer"
                  onClick={() => setSelectedPhoto(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedPhoto(item)}
                  aria-label={`Ampliar foto: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/40 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#09090b]/85 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#09090b]/80 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all border border-white/10">
                    <Maximize2 className="w-4 h-4 text-[#60a5fa]" />
                  </div>

                  {/* Photo Index indicator */}
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono font-bold bg-[#09090b]/80 px-2 py-0.5 rounded text-[#a1a1aa] border border-white/10">
                    Foto 0{idx + 1}/03
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif-display text-2xl font-bold text-white mb-3 group-hover:text-[#60a5fa] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#27272a] text-xs text-[#d4d4d8]">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: WhatsApp with Official Icon */}
              <div className="p-6 pt-0">
                <a
                  href={createWhatsAppUrl(item.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#2563eb] group/btn"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" color="#ffffff" />
                  <span>{item.whatsappCta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Address and Direct Visit Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#18181b] border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2563eb]/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#60a5fa] uppercase tracking-wider">
                Venha nos fazer uma visita pessoalmente
              </p>
              <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                {STORE_CONFIG.address.street} — Centro, Cafelândia - PR
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                Segunda a Sexta: {STORE_CONFIG.businessHours.weekdays} | Sábados: {STORE_CONFIG.businessHours.saturday}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={STORE_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#27272a] hover:bg-[#3f3f46] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#60a5fa]" />
              <span>Ver no Google Maps</span>
            </a>

            <a
              href={createWhatsAppUrl('Olá! Gostaria de falar com a Ótica e Relojoaria Maryanne sobre uma visita à loja física.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md group"
            >
              <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Screen Image Inspection */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="relative max-w-5xl w-full bg-[#09090b] rounded-2xl overflow-hidden border border-[#27272a] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#27272a]">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-[#60a5fa] uppercase tracking-wider">
                  Foto Real da Ótica e Relojoaria Maryanne
                </span>
                <h3 className="font-serif-display text-lg sm:text-2xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="w-9 h-9 rounded-lg bg-[#27272a] text-[#a1a1aa] hover:text-white hover:bg-[#3f3f46] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#121215] border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl text-center sm:text-left">
                {selectedPhoto.description}
              </p>
              <a
                href={createWhatsAppUrl(selectedPhoto.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
                <span>{selectedPhoto.whatsappCta}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
