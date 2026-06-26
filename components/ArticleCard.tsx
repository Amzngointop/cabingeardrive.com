import Link from 'next/link';
import type { Article } from '@/data/articles';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/best/${article.slug}`} className="block group">
      <div className="overflow-hidden rounded">
        <img
          src={article.coverImage}
          alt={article.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'contain',
            objectPosition: 'center',
            backgroundColor: '#f7f7f7',
            display: 'block',
          }}
          className="rounded"
        />
      </div>
      <div className="pt-3">
        <div className="text-[11px] uppercase text-accent font-semibold tracking-wider mb-1">
          {article.categoryLabel}
        </div>
        <h3 className="font-bold text-ink leading-snug group-hover:text-accent text-[15px]">
          {article.title}
        </h3>
        <p className="text-[13px] text-[#666] mt-1.5 line-clamp-2">{article.excerpt}</p>
        <span className="text-accent text-[13px] font-semibold inline-block mt-1.5">Read More →</span>
      </div>
    </Link>
  );
}
