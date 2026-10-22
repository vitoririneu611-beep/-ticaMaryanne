/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionEyebrow } from './SectionEyebrow.tsx';

interface ServiceTopic {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const ServicesSection: React.FC = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const topics: ServiceTopic[] = [
    {
      id: 'topic-1',
      title: 'Acompanhamento preventivo',
      description:
        'Consultas regulares, exames preventivos e mapeamento integral para cuidar da sua saúde com clareza, antecipando necessidades antes que se tornem preocupações.',
      imageSrc: 'https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/s3_u07pie.png',
      imageAlt: 'Mulher aproveitando um momento de autocuidado em casa',
    },
    {
      id: 'topic-2',
      title: 'Bem-estar no dia a dia',
      description:
        'Práticas e rotinas que cabem na sua vida, equilibrando descanso, alimentação, movimento e saúde emocional no ritmo que você puder sustentar.',
      imageSrc: 'https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/s32_tlpzne.png',
      imageAlt: 'Mulher descansando em um ambiente acolhedor',
    },
    {
      id: 'topic-3',
      title: 'Autocuidado sem pressa',
      description:
        'Momentos de pausa e atenção a você, sem cobranças irreais, focando no que nutre seu corpo e mente com carinho, consistência e respeito ao seu próprio tempo.',
      imageSrc: 'https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/s3_u07pie.png',
      imageAlt: 'Mulher aproveitando um momento de autocuidado em casa',
    },
    {
      id: 'topic-4',
      title: 'Orientação para cada fase',
      description:
        'Suporte próximo e acolhedor para as transformações do seu corpo ao longo do tempo, em todas as idades, ciclos hormonais e momentos de transição.',
      imageSrc: 'https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/s32_tlpzne.png',
      imageAlt: 'Mulher descansando em um ambiente acolhedor',
    },
  ];

  const currentTopic = topics[activeTopicIndex] ?? topics[0];

  return (
    <section
      id="servicos"
      className="relative z-[2] bg-white text-[#111111] overflow-hidden"
      style={{
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        paddingTop: 'clamp(72px, 9vw, 144px)',
        paddingBottom: 'clamp(72px, 9vw, 144px)',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
      aria-label="Frentes de cuidado integral"
    >
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-[clamp(48px,8vw,112px)] items-start">
          {/* Left Column: Eyebrow, Heading, and Interactive Topics */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <SectionEyebrow text="Cuidado integral" className="mb-4" />

            {/* Section Title */}
            <h2
              className="font-display font-medium text-[#111111] leading-[1.08] tracking-[-0.045em] max-w-[590px] m-0 mb-8 lg:mb-12"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Apoio para cuidar da saúde com mais clareza e tranquilidade.
            </h2>

            {/* Vertical list of 4 bordered articles */}
            <div className="flex flex-col divide-y divide-[#e4e4e4] border-t border-b border-[#e4e4e4]" role="tablist">
              {topics.map((topic, index) => {
                const isActive = activeTopicIndex === index;
                return (
                  <article key={topic.id} className="py-2">
                    <button
                      type="button"
                      role="tab"
                      id={`tab-${topic.id}`}
                      aria-selected={isActive}
                      aria-expanded={isActive}
                      aria-controls={`panel-${topic.id}`}
                      onClick={() => setActiveTopicIndex(index)}
                      className="w-full text-left bg-transparent border-0 py-[22px] px-0 cursor-pointer flex items-center justify-between group focus-visible:outline-2 focus-visible:outline-[#557d1b]"
                    >
                      <span
                        className={`font-display leading-[1.2] tracking-[-0.03em] transition-colors duration-200 ${
                          isActive
                            ? 'text-[#557d1b] font-medium'
                            : 'text-[#111111] group-hover:text-[#557d1b] font-normal'
                        }`}
                        style={{ fontSize: 'clamp(23px, 2.3vw, 32px)' }}
                      >
                        {topic.title}
                      </span>
                      {/* Active green indicator line or icon */}
                      <span
                        className={`ml-4 w-3 h-3 rounded-full transition-all duration-200 shrink-0 ${
                          isActive ? 'bg-[#557d1b] scale-100' : 'bg-transparent border border-[#cccccc] scale-75 opacity-40 group-hover:opacity-80'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Expandable Topic Description */}
                    <div
                      id={`panel-${topic.id}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${topic.id}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isActive ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="font-body text-[#5e5e5e] text-[15px] md:text-[16px] leading-[1.6] max-w-xl m-0">
                        {topic.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Image Panel */}
          <div className="w-full h-full lg:sticky lg:top-28 flex flex-col justify-center">
            <div className="relative w-full rounded-[12px] overflow-hidden bg-[#e9e3da] shadow-sm min-h-[330px] md:min-h-[420px] h-[360px] md:h-[480px] lg:h-[560px]">
              {/* Asset 8 (for topics 0 and 2) */}
              <img
                src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/s3_u07pie.png"
                alt="Mulher aproveitando um momento de autocuidado em casa"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  activeTopicIndex === 0 || activeTopicIndex === 2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'center 38%' }}
                loading="lazy"
              />

              {/* Asset 9 (for topics 1 and 3) */}
              <img
                src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/s32_tlpzne.png"
                alt="Mulher descansando em um ambiente acolhedor"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  activeTopicIndex === 1 || activeTopicIndex === 3 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'center 38%' }}
                loading="lazy"
              />

              {/* Subtle gentle bottom gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
