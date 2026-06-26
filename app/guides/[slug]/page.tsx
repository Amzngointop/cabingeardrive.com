import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, getGuide } from '@/data/guides';
import { getGuideContent } from '@/data/guideContent';
import { articles } from '@/data/articles';
import { site } from '@/data/site';
import ArticleCard from '@/components/ArticleCard';

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | CabinGearDrive`,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, images: [guide.coverImage] },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const content = getGuideContent(slug);
  if (!guide || !content) notFound();

  const relatedArticles = articles.filter((a) => content.relatedArticleSlugs.includes(a.slug)).slice(0, 3);
  const relatedGuides = guides.filter((g) => content.relatedGuideSlugs.includes(g.slug));

  return (
    <article className="max-w-[860px] mx-auto px-6 py-10">
      <nav className="text-[13px] text-[#777] mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        {' / '}
        <Link href="/gear-guides" className="hover:text-accent">The Guides</Link>
        {' / '}
        <span>{guide.title}</span>
      </nav>

      <div className="text-[12px] uppercase text-accent font-semibold mb-2">{guide.categoryLabel}</div>
      <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-ink leading-tight mb-3">{guide.title}</h1>
      <p className="text-[13px] text-[#777] mb-6">Updated {site.year} · {guide.readTime}</p>

      <img
        src={guide.coverImage}
        alt={guide.title}
        style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        className="rounded mb-8"
      />

      <p className="text-[16px] leading-[1.7] text-[#444] mb-10">{guide.excerpt}</p>

      <section className="mb-10">
        <h2 className="text-[1.5rem] font-bold text-ink mb-6">Step-by-Step Process</h2>
        <div className="flex flex-col gap-4">
          {content.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[14px]">
                {i + 1}
              </span>
              <span className="text-[15px] text-ink font-medium">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {content.sections.map((s) => (
        <section key={s.heading} className="mb-8">
          <h2 className="text-[1.25rem] font-bold text-ink mb-3">{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.7] text-[#444] mb-3">{p}</p>
          ))}
          {s.tip && (
            <div className="bg-[#fff8f8] border-l-4 border-accent p-4 mt-3">
              <p className="text-[14px] text-[#555]"><strong>💡 Pro Tip:</strong> {s.tip}</p>
            </div>
          )}
        </section>
      ))}

      <section className="my-10">
        <h2 className="text-[1.25rem] font-bold text-ink mb-5">Further Reading</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {relatedArticles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="mb-4">
        <p className="text-[14px] text-[#555]">
          Continue learning:{' '}
          {relatedGuides.map((g, i) => (
            <span key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="text-accent hover:underline">{g.title}</Link>
              {i < relatedGuides.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </section>
    </article>
  );
}
