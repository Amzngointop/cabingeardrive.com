import { Star, Check, X } from 'lucide-react';
import type { Product } from '@/data/products';
import { articles } from '@/data/articles';
import CTAButton from './CTAButton';
import RatingBars from './RatingBars';

export default function ProductCard({ product }: { product: Product }) {
  const article = articles.find((a) => a.slug === product.articleSlug);
  const avgRating =
    (product.ratings.durability + product.ratings.value + product.ratings.easeOfUse) / 3;

  return (
    <div className="border border-[#e8e8e8] rounded bg-white flex flex-col overflow-hidden h-full">
      {product.rank === 1 && (
        <div className="bg-accent text-white text-[11px] uppercase font-semibold text-center py-1.5 px-3">
          ★ {product.badge}
        </div>
      )}
      <div className="bg-[#f7f7f7] h-[220px] p-5 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-[11px] uppercase text-accent font-semibold mb-1.5">
          {article?.categoryLabel}
        </div>
        <h3 className="text-[15px] font-semibold text-ink leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={14}
              className={i <= Math.round(avgRating) ? 'fill-accent text-accent' : 'text-[#ddd]'}
            />
          ))}
          <span className="text-[13px] text-[#444] ml-1">{avgRating.toFixed(1)} / 5.0</span>
        </div>
        <RatingBars ratings={product.ratings} />
        <p className="text-[13px] italic text-[#666] mb-2">{product.bestFor}</p>
        <p className="text-[13px] text-[#555] mb-3">{product.summary}</p>
        <ul className="mb-2 space-y-1">
          {product.pros.slice(0, 2).map((p) => (
            <li key={p} className="text-[13px] text-[#333] flex gap-1.5">
              <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
              {p}
            </li>
          ))}
        </ul>
        <ul className="mb-4">
          <li className="text-[13px] text-[#666] flex gap-1.5">
            <X size={14} className="text-accent shrink-0 mt-0.5" />
            {product.cons[0]}
          </li>
        </ul>
        <CTAButton href={product.affiliateUrl} full>
          View on Amazon →
        </CTAButton>
      </div>
    </div>
  );
}
