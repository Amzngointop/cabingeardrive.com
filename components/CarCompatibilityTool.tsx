'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTopPicks } from '@/data/products';
import { articles } from '@/data/articles';

const carTypes = ['Sedan', 'SUV', 'Truck', 'Hatchback'];
const needs = [
  { label: 'Organization', slugs: ['best-car-trunk-organizers', 'best-backseat-organizers'] },
  { label: 'Sun Protection', slugs: ['best-car-sunshades'] },
  { label: 'Phone Mount', slugs: ['best-car-phone-mounts'] },
  { label: 'Seat Protection', slugs: ['best-car-seat-covers', 'best-car-seat-gap-fillers'] },
  { label: 'Trash Management', slugs: ['best-car-trash-cans'] },
];

export default function CarCompatibilityTool() {
  const [carType, setCarType] = useState<string>('Sedan');
  const [need, setNeed] = useState<string>(needs[0].label);
  const [results, setResults] = useState<string[] | null>(null);

  const topPicks = getTopPicks();

  function handleFind() {
    const selected = needs.find((n) => n.label === need);
    setResults(selected ? selected.slugs : []);
  }

  return (
    <div className="bg-white border border-[#e0e0e0] rounded p-6 md:p-8 max-w-3xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-[#666] font-semibold mb-2">
            Car Type
          </label>
          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className="w-full border border-[#ccc] rounded px-3 py-2.5 text-[14px] text-ink"
          >
            {carTypes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-[#666] font-semibold mb-2">
            Primary Need
          </label>
          <select
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="w-full border border-[#ccc] rounded px-3 py-2.5 text-[14px] text-ink"
          >
            {needs.map((n) => (
              <option key={n.label} value={n.label}>{n.label}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleFind}
        className="bg-accent text-white rounded text-[13px] font-semibold uppercase tracking-wider py-2.5 px-6 hover:bg-accent-hover transition-colors"
      >
        Find My Picks
      </button>

      {results && (
        <div className="mt-6 border-t border-[#e0e0e0] pt-6">
          <p className="text-[13px] text-[#666] mb-3">
            Recommended for a {carType} focused on {need.toLowerCase()}:
          </p>
          <ul className="space-y-2">
            {results.map((slug) => {
              const article = articles.find((a) => a.slug === slug);
              const pick = topPicks.find((p) => p.articleSlug === slug);
              if (!article) return null;
              return (
                <li key={slug} className="flex items-center justify-between border border-[#e8e8e8] rounded px-4 py-3">
                  <span className="text-[14px] text-ink font-medium">{pick?.name ?? article.title}</span>
                  <Link href={`/best/${slug}`} className="text-accent text-[13px] font-semibold hover:underline">
                    View →
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
