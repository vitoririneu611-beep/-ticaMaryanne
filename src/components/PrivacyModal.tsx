/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../data/config.ts';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-[#e4e4e7] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#71717a] hover:text-[#09090b] rounded-full hover:bg-[#f4f4f5] transition-colors"
          aria-label="Fechar política de privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 rounded-2xl bg-[#2563eb]/10 text-[#2563eb]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-[#09090b]">
              Política de Privacidade
            </h3>
            <p className="text-xs text-[#2563eb] font-semibold font-sans-body">
              {STORE_CONFIG.name} · Cafelândia, Paraná
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#3f3f46] font-sans-body leading-relaxed">
          <p>
            A <strong className="text-[#09090b]">{STORE_CONFIG.name}</strong> preza pela transparência, privacidade e segurança de todos os clientes e visitantes deste site institucional.
          </p>

          <h4 className="font-bold text-[#09090b] text-base pt-2">
            1. Coleta e Uso de Informações
          </h4>
          <p>
            Este site tem finalidade informativa institucional. Não realizamos rastreamento invasivo nem comercialização de dados pessoais. Qualquer informação fornecida voluntariamente pelo visitante (como através do formulário de contato, ligação telefônica ou mensagem no WhatsApp) é utilizada única e exclusivamente para responder à solicitação do cliente.
          </p>

          <h4 className="font-bold text-[#09090b] text-base pt-2">
            2. Atendimento ao Cliente
          </h4>
          <p>
            Os canais de atendimento oficiais divulgados (telefone e WhatsApp <strong>{STORE_CONFIG.contact.phoneDisplay}</strong> e e-mail <strong>{STORE_CONFIG.contact.email}</strong>) são destinados a prestar orientações sobre produtos, modelos, horários e localização da loja física em Cafelândia.
          </p>

          <h4 className="font-bold text-[#09090b] text-base pt-2">
            3. Direitos e Legislação (LGPD)
          </h4>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a qualquer momento a confirmação de contato ou exclusão de dados enviados voluntariamente através dos nossos canais de atendimento.
          </p>

          <h4 className="font-bold text-[#09090b] text-base pt-2">
            4. Endereço e Contato
          </h4>
          <p>
            {STORE_CONFIG.address.fullFormatted}.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#e4e4e7] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#09090b] text-white text-sm font-bold rounded-xl hover:bg-[#18181b] transition-colors shadow-xs"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
