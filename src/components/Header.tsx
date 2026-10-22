/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Clock } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'Nossa Loja', href: '#espaco' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Reparos', href: '#servicos-reparo' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top utility bar in modern deep jet black with vibrant blue accents */}
      <div className="bg-[#09090b] text-[#e4e4e7] text-xs py-2 px-4 sm:px-8 border-b border-[#27272a] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
              {STORE_CONFIG.address.street}, Cafelândia - PR
            </span>
            <span className="flex items-center gap-2 text-[#a1a1aa]">
              <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
              Seg a Sex: {STORE_CONFIG.businessHours.weekdays} · Sáb: {STORE_CONFIG.businessHours.saturday}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${STORE_CONFIG.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{STORE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <span className="text-[#3f3f46]">|</span>
            {/* WhatsApp Link with Official Icon */}
            <a
              href={createWhatsAppUrl('Olá! Gostaria de falar com o atendimento da Ótica e Relojoaria Maryanne em Cafelândia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#4ade80] transition-colors font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" color="#25D366" />
              <span>WhatsApp Oficial</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-modern py-3 border-b border-[#e4e4e7]'
            : 'bg-white py-4 border-b border-[#e4e4e7]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with eye icon */}
          <a
            href="#inicio"
            className="flex items-center group focus-visible:outline-2 focus-visible:outline-[#2563eb] rounded"
            aria-label="Ótica e Relojoaria Maryanne - Ir para o início"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-semibold text-[#27272a] hover:text-[#2563eb] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#2563eb] rounded after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563eb] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Header Action Buttons (Modern Black & Official WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppUrl('Olá! Gostaria de falar com a Ótica e Relojoaria Maryanne pelo WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#09090b] hover:bg-[#18181b] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-[#27272a] focus-visible:outline-2 focus-visible:outline-[#25D366] group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" color="#25D366" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href={`tel:${STORE_CONFIG.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#09090b] text-xs sm:text-sm font-semibold rounded-xl transition-colors border border-[#d4d4d8]"
              title="Ligue para nós"
            >
              <Phone className="w-3.5 h-3.5 text-[#2563eb]" />
              <span className="hidden md:inline">{STORE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={createWhatsAppUrl('Olá! Gostaria de tirar uma dúvida no WhatsApp da Ótica e Relojoaria Maryanne.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-white bg-[#09090b] rounded-xl sm:hidden shadow-xs"
              aria-label="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" color="#25D366" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-[#09090b] hover:bg-[#f4f4f5] rounded-xl transition-colors border border-[#e4e4e7]"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-[#e4e4e7] bg-white px-4 pt-3 pb-6 animate-fade-in shadow-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-[#09090b] hover:bg-[#f4f4f5] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-[#e4e4e7] flex flex-col gap-2.5">
                <a
                  href={createWhatsAppUrl('Olá! Estou entrando em contato pelo site da Ótica e Relojoaria Maryanne.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#09090b] text-white text-sm font-semibold rounded-xl hover:bg-[#18181b] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" color="#25D366" />
                  Chamar no WhatsApp ({STORE_CONFIG.contact.phoneDisplay})
                </a>
                <a
                  href={`tel:${STORE_CONFIG.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f4f4f5] text-[#09090b] text-xs font-semibold rounded-xl border border-[#d4d4d8]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2563eb]" />
                  Ligar {STORE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
