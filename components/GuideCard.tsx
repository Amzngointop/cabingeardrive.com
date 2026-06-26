import Link from 'next/link';
import type { Guide } from '@/data/guides';

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="block group border border-[#e8e8e8] rounded overflow-hidden hover:border-accent transition-colors">
      <img
        src={guide.coverImage}
        alt={guide.title}
        style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
      />
      <div className="p-4">
        <div className="text-[11px] uppercase text-accent font-semibold tracking-wider mb-1">
          {guide.categoryLabel}
        </div>
        <h3 className="text-[15px] font-semibold text-ink leading-snug group-hover:text-accent">
          {guide.title}
        </h3>
        <p className="text-[13px] text-[#666] mt-1.5 line-clamp-2">{guide.excerpt}</p>
        <span className="text-accent text-[13px] font-semibold inline-block mt-2">Read Guide →</span>
      </div>
    </Link>
  );
}
