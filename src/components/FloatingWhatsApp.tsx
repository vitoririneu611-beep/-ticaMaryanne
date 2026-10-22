/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Modern Floating Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#09090b] text-white border border-[#27272a] shadow-2xl text-xs animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Fale no WhatsApp da <strong>Maryanne</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#a1a1aa] hover:text-white ml-1.5 p-0.5 rounded"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Official WhatsApp Button */}
      <a
        href={createWhatsAppUrl('Olá! Estou navegando no site da Ótica e Relojoaria Maryanne e gostaria de tirar uma dúvida.')}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-300 focus-visible:outline-3 focus-visible:outline-[#2563eb] group"
        aria-label="Iniciar conversa no WhatsApp oficial da Ótica e Relojoaria Maryanne"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
      </a>
    </div>
  );
};
