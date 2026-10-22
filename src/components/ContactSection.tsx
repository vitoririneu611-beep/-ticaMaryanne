/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../data/config.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Armações e Óculos de Grau');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenDirectWhatsApp = () => {
    const text = `Olá! Meu nome é ${name || 'cliente'}. Tenho interesse em: ${interest}. ${message ? `Mensagem: ${message}` : ''}`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-[#faf9f6] border-b border-[#e4e4e7]"
      aria-label="Canais de Contato e Atendimento"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Canais de Atendimento
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#09090b] mt-2 mb-3">
            Fale com a Ótica e Relojoaria Maryanne
          </h2>
          <p className="text-sm sm:text-base text-[#52525b] font-sans-body max-w-xl mx-auto">
            Estamos prontos para atender você com a atenção e dedicação que você merece. Venha nos visitar ou mande uma mensagem pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Card in Modern Jet Black with Vibrant Blue Glow */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#09090b] via-[#111827] to-[#09090b] text-white border border-[#2563eb]/40 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                  <WhatsAppIcon className="w-6 h-6" color="#25D366" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#60a5fa] uppercase tracking-wider">
                    WhatsApp Oficial
                  </span>
                  <p className="font-serif-display text-2xl font-bold text-white mt-0.5">
                    {STORE_CONFIG.contact.whatsappDisplay}
                  </p>
                  <p className="text-xs text-[#cbd5e1] mt-1 mb-4">
                    Tire dúvidas sobre armações, óculos de sol, alianças ou solicite orçamentos de reparos.
                  </p>
                  <a
                    href={createWhatsAppUrl('Olá! Gostaria de falar com o atendimento da Ótica e Relojoaria Maryanne no WhatsApp.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
                    <span>Iniciar Conversa no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#e4e4e7] shadow-modern">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#71717a] uppercase tracking-wider">
                    Telefone Fixo
                  </span>
                  <p className="font-serif-display text-2xl font-bold text-[#09090b] mt-0.5">
                    {STORE_CONFIG.contact.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#52525b] mt-1 mb-3">
                    Ligue diretamente durante o horário de funcionamento comercial.
                  </p>
                  <a
                    href={`tel:${STORE_CONFIG.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#09090b] text-white text-xs font-semibold rounded-lg hover:bg-[#27272a] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
                    Ligar Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="p-6 rounded-2xl bg-white border border-[#e4e4e7] shadow-modern space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#71717a] uppercase tracking-wider">
                    E-mail Comercial
                  </span>
                  <p className="text-sm font-semibold text-[#09090b] mt-0.5 break-all">
                    {STORE_CONFIG.contact.email}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f4f4f5] flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#71717a] uppercase tracking-wider">
                    Horários de Atendimento
                  </span>
                  <p className="text-xs sm:text-sm text-[#09090b] mt-1 font-medium">
                    Segunda a sexta: {STORE_CONFIG.businessHours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm text-[#09090b] font-medium">
                    Sábado: {STORE_CONFIG.businessHours.saturday}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f4f4f5] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#71717a] uppercase tracking-wider">
                    Endereço
                  </span>
                  <p className="text-xs sm:text-sm text-[#09090b] mt-1">
                    {STORE_CONFIG.address.fullFormatted}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message / WhatsApp Helper (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#e4e4e7] shadow-modern">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f4f4f5]">
              <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#09090b]">
                  Tire suas Dúvidas ou Solicite Orçamento
                </h3>
                <p className="text-xs text-[#71717a]">
                  Escolha o assunto desejado para ser atendido com rapidez pela equipe Maryanne.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif-display text-2xl font-bold text-[#09090b]">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-sm text-[#52525b] max-w-md mx-auto">
                  Obrigado, <strong>{name || 'cliente'}</strong>! Nossa equipe responderá sua solicitação sobre <strong>{interest}</strong> o mais rápido possível.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenDirectWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" color="#ffffff" />
                    <span>Continuar no WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 bg-[#f4f4f5] text-[#09090b] text-xs font-medium rounded-xl hover:bg-[#e4e4e7] transition-colors border border-[#d4d4d8]"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#3f3f46] mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Ana Paula"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#faf9f6] border border-[#d4d4d8] text-[#09090b] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#3f3f46] mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(45) 99999-9999"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#faf9f6] border border-[#d4d4d8] text-[#09090b] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-[#3f3f46] mb-1">
                    O que você procura? *
                  </label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#faf9f6] border border-[#d4d4d8] text-[#09090b] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  >
                    <option value="Armações e Óculos de Grau">Armações e Óculos de Grau</option>
                    <option value="Óculos Solares">Óculos Solares</option>
                    <option value="Linha Infantil (Grau e Sol)">Linha Infantil (Grau e Sol)</option>
                    <option value="Lentes Oftálmicas com Receita">Lentes Oftálmicas com Receita</option>
                    <option value="Relógios e Relojoaria">Relógios e Relojoaria</option>
                    <option value="Alianças (Compromisso, Noivado, Casamento)">Alianças (Compromisso, Noivado, Casamento)</option>
                    <option value="Folheados, Pratas 925 e Colares">Folheados, Pratas 925 e Colares</option>
                    <option value="Serviços de Reparo e Conserto (Óculos ou Relógio)">Serviços de Reparo e Conserto (Óculos ou Relógio)</option>
                    <option value="Outras Dúvidas">Outras Dúvidas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#3f3f46] mb-1">
                    Detalhes ou Dúvidas (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Olá! Gostaria de saber mais informações sobre..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#faf9f6] border border-[#d4d4d8] text-[#09090b] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#09090b] hover:bg-[#18181b] text-white text-sm font-bold rounded-xl transition-colors shadow-xs"
                  >
                    Enviar Mensagem
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenDirectWhatsApp}
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-md group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" color="#ffffff" />
                    <span>Enviar Direto no WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
