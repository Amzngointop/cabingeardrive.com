'use client';

import { useState } from 'react';

interface ProductAccordionsProps {
  pros: string[];
  bestFor: string;
  howToUse: string;
}

export default function ProductAccordions({ pros, bestFor, howToUse }: ProductAccordionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: 'WHY WE PICKED IT',
      content: (
        <ul>
          {pros.map((pro) => (
            <li key={pro}>– {pro}</li>
          ))}
        </ul>
      ),
    },
    { title: "WHO IT'S FOR", content: <p>{bestFor}</p> },
    { title: 'HOW TO USE IT', content: <p>{howToUse}</p> },
  ];

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} style={{ borderTop: '1px solid #e0e0e0' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 13,
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#111',
                padding: '14px 0',
              }}
            >
              {item.title}
              <span style={{ float: 'right', color: '#999' }}>{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen && (
              <div style={{ fontSize: 14, color: '#555', paddingBottom: 14 }}>{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
