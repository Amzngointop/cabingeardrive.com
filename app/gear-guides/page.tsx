import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import ArticleCard from '@/components/ArticleCard';
import GuideCard from '@/components/GuideCard';

export const metadata: Metadata = {
  title: 'Gear Picks & Guides | CabinGearDrive',
  description: 'Browse every car interior accessory review and gear guide published on CabinGearDrive.',
};

export default function GearGuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-3">Gear Picks & Guides</h1>
      <p className="text-[#666] mb-10">Every review and how-to guide we've published, in one place.</p>

      <h2 className="text-2xl font-bold text-ink border-l-4 border-accent pl-4 mb-8">Gear Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-ink border-l-4 border-accent pl-4 mb-8">Gear Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </div>
  );
}
