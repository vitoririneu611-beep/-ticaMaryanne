/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Phone, AlertCircle } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-white border border-[#e4e4e7] rounded-3xl p-6 sm:p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#71717a] hover:text-[#09090b] rounded-full hover:bg-[#f4f4f5] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
            <WhatsAppIcon className="w-6 h-6 text-white" color="#ffffff" />
          </div>
          <div>
            <h3 className="font-serif-display text-xl font-bold text-[#09090b]">
              Atendimento WhatsApp
            </h3>
            <p className="text-xs text-[#2563eb] font-semibold font-sans-body">
              {STORE_CONFIG.name} · Cafelândia - PR
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-[#3f3f46] font-sans-body">
          <div className="p-3.5 rounded-2xl bg-[#eff6ff] border border-[#bfdbfe] flex gap-3 text-xs leading-relaxed text-[#1e40af]">
            <AlertCircle className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
            <p>
              O número oficial cadastrado é <strong>{STORE_CONFIG.contact.phoneDisplay}</strong>. Você pode iniciar uma conversa direta no WhatsApp ou ligar agora.
            </p>
          </div>

          <p className="text-xs text-[#71717a]">
            Nossa equipe responde em horário comercial para tirar dúvidas sobre armações, óculos solares, infantil, alianças, relógios e serviços de reparos.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={createWhatsAppUrl('Olá! Gostaria de conversar com a equipe da Ótica e Relojoaria Maryanne pelo WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold rounded-xl transition-all shadow-md group"
          >
            <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
            <span>Abrir WhatsApp</span>
          </a>
          <a
            href={`tel:${STORE_CONFIG.contact.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#09090b] text-white text-sm font-bold rounded-xl hover:bg-[#18181b] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#3b82f6]" />
            Ligar
          </a>
        </div>
      </div>
    </div>
  );
};
