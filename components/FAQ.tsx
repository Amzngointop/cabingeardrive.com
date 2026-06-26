'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="my-6">
      {items.map((item, i) => (
        <div key={item.question} className="border-b border-[#e0e0e0]">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-[15px] font-semibold text-ink pr-4">{item.question}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-accent transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === i && (
            <p className="pb-4 text-[14px] text-[#444] leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
