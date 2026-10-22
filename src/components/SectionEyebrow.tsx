/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionEyebrowProps {
  text: string;
  className?: string;
  textColor?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  text,
  className = '',
  textColor = 'text-[#111111]',
}) => {
  return (
    <div className={`inline-flex items-center font-display text-[14px] leading-[1.3] font-medium tracking-[-0.02em] ${textColor} ${className}`}>
      <span
        className="w-[7px] h-[7px] rounded-full bg-[#a9e94d] mr-[10px] shrink-0"
        aria-hidden="true"
      />
      <span>{text}</span>
    </div>
  );
};
