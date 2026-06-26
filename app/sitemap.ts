import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/gear-guides',
    '/car-glossary',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/affiliate-disclosure',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const articlePages = articles.map((a) => ({
    url: `${site.url}/best/${a.slug}`,
    lastModified: new Date(),
  }));

  const guidePages = guides.map((g) => ({
    url: `${site.url}/guides/${g.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...articlePages, ...guidePages];
}
