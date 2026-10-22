/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] text-[#e4e4e7] border-t border-[#27272a] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & History (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" />

            <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-bold pt-1">
              Cafelândia, Paraná · Desde {STORE_CONFIG.foundedYear}
            </p>
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">
              Mais de duas décadas de dedicação ao atendimento em óculos de grau, solares, infantil, relógios, alianças, pratas, folheados e serviços de reparos.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 inline-block shadow-xs">
              <p className="font-serif-display italic text-[#fafafa] text-base font-medium">
                “{STORE_CONFIG.name}: {STORE_CONFIG.slogan}”
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#a1a1aa] list-none p-0 m-0">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Produtos & Armações
                </a>
              </li>
              <li>
                <a href="#servicos-reparo" className="hover:text-white transition-colors">
                  Serviços de Reparo
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato & Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Atendimento e Localização
            </h4>

            <div className="space-y-3 text-sm text-[#a1a1aa]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>
                  {STORE_CONFIG.address.street}, {STORE_CONFIG.address.neighborhood}
                  <br />
                  {STORE_CONFIG.address.city} — {STORE_CONFIG.address.state}, CEP {STORE_CONFIG.address.zipCode}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <a
                  href={`tel:${STORE_CONFIG.contact.phoneRaw}`}
                  className="hover:text-white transition-colors font-semibold text-white"
                >
                  {STORE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              {/* WhatsApp Link with Official WhatsApp Icon */}
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" color="#25D366" />
                <a
                  href={createWhatsAppUrl('Olá! Estou falando pelo rodapé do site da Ótica e Relojoaria Maryanne.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4ade80] transition-colors text-[#25D366] font-semibold flex items-center gap-1.5"
                >
                  <span>WhatsApp: {STORE_CONFIG.contact.whatsappDisplay}</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <a
                  href={`mailto:${STORE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {STORE_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-white font-semibold">Horário de funcionamento:</p>
                  <p>Segunda a sexta: {STORE_CONFIG.businessHours.weekdays}</p>
                  <p>Sábado: {STORE_CONFIG.businessHours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span>
              © {STORE_CONFIG.foundedYear} - {new Date().getFullYear()} {STORE_CONFIG.name}. Todos os direitos reservados.
            </span>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline focus-visible:outline-2 focus-visible:outline-[#2563eb]"
            >
              Política de Privacidade
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-medium"
            aria-label="Voltar ao início da página"
          >
            <span>Início</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
