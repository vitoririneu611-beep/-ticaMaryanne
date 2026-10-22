/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Wrench, Clock, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const RepairsSection: React.FC = () => {
  const repairServices = [
    {
      title: 'Reparos e Ajustes de Óculos',
      icon: <Wrench className="w-6 h-6 text-[#2563eb]" />,
      badge: 'Óptica',
      description:
        'Cuidamos para que seus óculos voltem a ter o encaixe perfeito no seu rosto, com segurança e sem machucar.',
      items: [
        'Ajuste e alinhamento facial anatômico',
        'Troca de plaquetas nasais e parafusos',
        'Solda e restauração de armações',
        'Limpeza ultrassônica de lentes e armação',
      ],
      whatsappMsg:
        'Olá! Preciso de um reparo/ajuste nos meus óculos (armação, parafusos ou plaquetas) na Ótica Maryanne.',
      btnLabel: 'Orçar Reparo de Óculos',
    },
    {
      title: 'Serviços de Relojoaria',
      icon: <Clock className="w-6 h-6 text-[#2563eb]" />,
      badge: 'Relojoaria',
      description:
        'Tradição no cuidado com relógios de pulso de todas as marcas, garantindo precisão no seu tempo.',
      items: [
        'Troca de baterias e pilhas de alta durabilidade',
        'Ajuste, troca e diminuição de pulseiras',
        'Troca de pinos, fivelas e vidros',
        'Revisão, lubrificação e manutenção',
      ],
      whatsappMsg:
        'Olá! Gostaria de fazer a manutenção ou troca de bateria/pulseira do meu relógio na Relojoaria Maryanne.',
      btnLabel: 'Orçar Serviço de Relógio',
    },
    {
      title: 'Ajustes de Alianças e Joias',
      icon: <Sparkles className="w-6 h-6 text-[#c5a059]" />,
      badge: 'Joias & Metais',
      description:
        'Consertos e revitalização de peças especiais, pratas 925, folheados e alianças de compromisso.',
      items: [
        'Polimento e higienização de pratas e folheados',
        'Ajuste de aro e medidas de alianças',
        'Conserto de fechos de correntes e colares',
        'Gravação de nomes e datas em alianças',
      ],
      whatsappMsg:
        'Olá! Gostaria de informações sobre conserto, polimento ou ajuste de joias/alianças na Maryanne.',
      btnLabel: 'Orçar Ajuste de Joia',
    },
  ];

  return (
    <section
      id="servicos-reparo"
      className="py-16 md:py-24 bg-white border-b border-[#e4e4e7]"
      aria-label="Serviços de Reparos e Consertos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Vibrant Blue Badge */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Vendas e Assistência Própria
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#09090b] mt-2 mb-3">
            Serviços de Reparos e Manutenção
          </h2>
          <p className="text-sm sm:text-base text-[#52525b] font-sans-body max-w-xl mx-auto">
            Além de produtos de alta qualidade, a <strong className="text-[#09090b]">Ótica e Relojoaria Maryanne</strong> oferece serviços ágeis e atenciosos de conserto para você não ficar na mão.
          </p>
          <div className="w-16 h-0.5 bg-[#2563eb] mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* 3 Repair Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {repairServices.map((service, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#faf9f6] border border-[#e4e4e7] hover:border-[#2563eb] shadow-modern hover:shadow-modern-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#e4e4e7] flex items-center justify-center shadow-xs">
                    {service.icon}
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-[#09090b] text-white rounded-md">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-[#09090b] mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-[#52525b] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#e4e4e7] mb-8">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#3f3f46]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp button with OFFICIAL WHATSAPP ICON */}
              <a
                href={createWhatsAppUrl(service.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#09090b] hover:bg-[#25D366] hover:text-white text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-[#25D366] group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" color="currentColor" />
                <span>{service.btnLabel}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Local repair trust note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#09090b] text-white border border-[#27272a] max-w-3xl mx-auto flex items-center gap-3 text-xs shadow-md">
          <Shield className="w-5 h-5 text-[#3b82f6] shrink-0" />
          <p className="text-[#e4e4e7]">
            <strong className="text-white">Traga sua peça na loja:</strong> Realizamos orçamentos rápidos e transparentes na nossa loja física na Av. Governador Moisés Lupion, 303, no Centro de Cafelândia.
          </p>
        </div>
      </div>
    </section>
  );
};
