/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { SloganBanner } from './components/SloganBanner.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { StoreTourSection } from './components/StoreTourSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { RepairsSection } from './components/RepairsSection.tsx';
import { DifferentialsSection } from './components/DifferentialsSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#09090b] selection:bg-[#2563eb] selection:text-white">
      {/* 1. Cabeçalho com BrandLogo e WhatsApp */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 2. Início / Hero com Slogan e Destaques */}
        <Hero />

        {/* 3. Destaque Especial do Slogan e Símbolo do Olho */}
        <SloganBanner />

        {/* 4. Sobre Nós e História de Confiança */}
        <AboutSection />

        {/* 5. Conheça Nosso Espaço (Fotos Reais da Loja: Fachada, Salão Óptico, Relojoaria & Joias) */}
        <StoreTourSection />

        {/* 6. Produtos (Óculos de Grau, Solares, Infantil, Relógios, Alianças, Pratas, Folheados) */}
        <ProductsSection />

        {/* 7. Serviços de Reparo e Manutenção (Óculos e Relojoaria) */}
        <RepairsSection />

        {/* 7. Diferenciais da Maryanne */}
        <DifferentialsSection />

        {/* 8. Localização no Centro de Cafelândia & Google Maps */}
        <LocationSection />

        {/* 9. Contato, Horários e Atendimento */}
        <ContactSection />
      </main>

      {/* 10. Rodapé */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modal de Privacidade */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
