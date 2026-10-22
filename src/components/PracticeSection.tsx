/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionEyebrow } from './SectionEyebrow.tsx';

export const PracticeSection: React.FC = () => {
  const commitments = [
    {
      number: '01',
      title: 'Escuta ativa e sem pressa',
      description:
        'Consultas dedicadas a ouvir seus sentimentos, dúvidas e necessidades individuais com acolhimento genuíno e sem pressa.',
    },
    {
      number: '02',
      title: 'Planos adaptados à sua rotina',
      description:
        'Caminhos realistas e sustentáveis para o seu bem-estar, desenhados para se integrarem naturalmente ao seu dia a dia.',
    },
    {
      number: '03',
      title: 'Acompanhamento integrado',
      description:
        'Uma visão que conecta saúde física, clareza mental e hábitos preventivos em uma jornada contínua e segura.',
    },
    {
      number: '04',
      title: 'Autonomia para suas escolhas',
      description:
        'Informação clara e acolhedora para que você compreenda seu corpo e participe ativamente de cada decisão de saúde.',
    },
  ];

  return (
    <section
      id="cuidado-na-pratica"
      className="relative z-[2] bg-white text-[#111111] py-16 md:py-24 px-5 sm:px-8 xl:px-0"
      aria-label="Cuidado na prática e compromissos"
    >
      <div className="max-w-[1184px] mx-auto flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <SectionEyebrow text="Cuidado na prática" />
          <h2 className="font-display font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.04em] text-[#111111] m-0">
            Uma abordagem sensível que transforma intenção em saúde duradoura.
          </h2>
          <p className="font-body text-[#666666] text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl m-0">
            Acreditamos que o verdadeiro cuidado acontece quando a ciência e o respeito aos seus momentos caminham juntos, descomplicando o que é viver com equilíbrio.
          </p>
        </div>

        {/* Central Photography (Asset 7) */}
        <div className="w-full h-[280px] sm:h-[360px] md:h-[440px] max-h-[440px] rounded-[12px] overflow-hidden bg-[#e9e3da] shadow-sm">
          <img
            src="https://res.cloudinary.com/dalwymbky/image/upload/v1790029193/mulher_umzarh.png"
            alt="Mulher em um momento tranquilo de autocuidado"
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />
        </div>

        {/* Four Commitment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-2">
          {commitments.map((item) => (
            <div
              key={item.number}
              className="flex flex-col gap-3 p-6 rounded-xl bg-[#faf9f6] border border-[#e4e4e4] transition-all duration-200 hover:border-[#c0f85f] hover:shadow-xs"
            >
              <span className="font-display font-medium text-[#557d1b] text-[14px] tracking-wide">
                {item.number}
              </span>
              <h3 className="font-display font-medium text-[#111111] text-[19px] leading-[1.3] tracking-[-0.02em] m-0">
                {item.title}
              </h3>
              <p className="font-body text-[#666666] text-[14px] sm:text-[15px] leading-[1.55] m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
