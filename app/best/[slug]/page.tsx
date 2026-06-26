import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/data/articles';
import { getProductsByArticle } from '@/data/products';
import { getArticleContent } from '@/data/articleContent';
import { site } from '@/data/site';
import FAQ from '@/components/FAQ';
import CTAButton from '@/components/CTAButton';
import CategoryDiagram from '@/components/CategoryDiagram';
import ArticleCard from '@/components/ArticleCard';
import RatingBars from '@/components/RatingBars';
import ProductAccordions from '@/components/ProductAccordions';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | CabinGearDrive`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, images: [article.coverImage] },
  };
}

export default async function ReviewArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  const content = getArticleContent(slug);
  if (!article || !content) notFound();

  const productList = getProductsByArticle(slug);
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <article className="max-w-[860px] mx-auto px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="text-[13px] text-[#777] mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        {' / '}
        <Link href="/gear-guides" className="hover:text-accent">Gear Picks</Link>
        {' / '}
        <span>{article.title}</span>
      </nav>

      <header className="mb-6">
        <div className="text-[12px] uppercase text-accent font-semibold mb-2">{article.categoryLabel}</div>
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-ink leading-tight mb-3">{article.title}</h1>
        <p className="text-[13px] text-[#777] mb-1">
          Updated {site.year} · {article.readTime} · {article.productCount} products reviewed
        </p>
        <p className="text-[13px] text-[#777]">By CabinGearDrive Editors</p>
      </header>

      <div className="border-l-4 border-accent bg-[#fff8f8] px-4 py-3 mb-8">
        <p className="text-[13px] text-[#555]">
          CabinGearDrive.com participates in the Amazon Services LLC Associates Program. We may earn a commission from qualifying purchases made through links on this page, at no extra cost to you.
        </p>
      </div>

      <div className="bg-[#f7f7f7] border border-[#e0e0e0] border-l-4 border-l-accent p-5 mb-8">
        <h2 className="text-[14px] uppercase text-accent font-semibold mb-3">Quick Summary</h2>
        <ul className="space-y-2">
          {content.summaryBullets.map((b) => (
            <li key={b} className="text-[14px] text-[#444] flex gap-2">
              <span className="text-accent">•</span>{b}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[16px] leading-[1.7] text-[#444] mb-8">{content.intro}</p>

      {productList.map((p, i) => (
        <section key={p.id} id={p.id} className="my-10">
          <div className="mb-3">
            <span className="text-3xl font-bold text-accent mr-3">#{p.rank}</span>
            <span className="bg-accent text-white text-[11px] uppercase font-semibold px-2.5 py-1 rounded">
              {p.badge}
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[35%]">
              <div className="bg-[#f7f7f7] rounded p-6 flex items-center justify-center">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  style={{ width: '100%', height: 'auto', maxHeight: '280px', objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
            </div>
            <div className="md:w-[65%]">
              <h2 className="text-[1.25rem] font-bold text-ink mb-1">{p.name}</h2>
              <p className="text-[14px] italic text-[#555] mb-2">{p.summary}</p>

              <RatingBars ratings={p.ratings} />

              <div className="my-4">
                <span
                  style={{
                    fontSize: 11,
                    color: '#999',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Considerations
                </span>
                <ul className="mt-1.5 space-y-1">
                  {p.cons.map((con) => (
                    <li key={con} style={{ fontSize: 13, color: '#555' }}>– {con}</li>
                  ))}
                </ul>
              </div>

              <CTAButton href={p.affiliateUrl}>View on Amazon →</CTAButton>
              <p className="text-[11px] text-[#999] mt-2 mb-2">As an Amazon Associate, we earn from qualifying purchases.</p>

              <ProductAccordions pros={p.pros} bestFor={p.bestFor} howToUse={p.howToUse} />
            </div>
          </div>
          {i < productList.length - 1 && <hr className="border-t border-dashed border-[#cccccc] mt-10" />}
        </section>
      ))}

      <section className="my-10">
        <h2 className="text-[1.5rem] font-bold text-ink mb-6">{content.buyingGuideHeading}</h2>
        {content.sections.map((s) => (
          <div key={s.heading} className="mb-6">
            <h3 className="text-[1.15rem] font-semibold text-ink mb-3">{s.heading}</h3>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-[#444] mb-3">{p}</p>
            ))}
            {s.tip && (
              <div className="bg-[#fff8f8] border-l-4 border-accent p-4 mt-3">
                <p className="text-[14px] text-[#555]"><strong>💡 Pro Tip:</strong> {s.tip}</p>
              </div>
            )}
          </div>
        ))}
        <p className="text-[14px] text-[#555] mt-4">
          For more on cabin safety and material standards, see the{' '}
          <a href="https://newsroom.aaa.com/" target="_blank" rel="noopener" className="text-accent hover:underline">
            AAA newsroom
          </a>{' '}
          and the{' '}
          <a href="https://www.nhtsa.gov/" target="_blank" rel="noopener" className="text-accent hover:underline">
            NHTSA vehicle safety resources
          </a>
          .
        </p>
      </section>

      <section className="my-10">
        <CategoryDiagram slug={slug} />
      </section>

      <section className="my-10">
        <h2 className="text-[1.5rem] font-bold text-ink mb-2">Frequently Asked Questions</h2>
        <FAQ items={content.faqs} />
      </section>

      <section className="my-10">
        <h2 className="text-[1.25rem] font-bold text-ink mb-5">Related Reviews</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <div className="border-l-4 border-accent bg-[#fff8f8] px-4 py-3">
        <p className="text-[13px] text-[#555]">
          CabinGearDrive.com participates in the Amazon Services LLC Associates Program. We may earn a commission from qualifying purchases made through links on this page, at no extra cost to you.
        </p>
      </div>
    </article>
  );
}
