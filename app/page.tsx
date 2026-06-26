import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, CheckSquare, Award, Package, Smartphone, Sun, Trash2, Armchair, Car, Truck, CarFront } from 'lucide-react';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { getTopPicks } from '@/data/products';
import ArticleCard from '@/components/ArticleCard';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import GuideCard from '@/components/GuideCard';
import CategoryCard from '@/components/CategoryCard';
import CarCompatibilityTool from '@/components/CarCompatibilityTool';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Expert Car Interior Gear Reviews | CabinGearDrive',
  description: 'Editorial reviews and buying guides for car interior accessories — trunk organizers, phone mounts, seat covers, sunshades, and more.',
};

const categories = [
  { icon: Package, name: 'Trunk Organizers', description: 'Keep cargo contained and upright.', href: '/best/best-car-trunk-organizers' },
  { icon: Smartphone, name: 'Phone Mounts', description: 'Secure, hands-free navigation.', href: '/best/best-car-phone-mounts' },
  { icon: Sun, name: 'Sunshades', description: 'Block UV and reduce cabin heat.', href: '/best/best-car-sunshades' },
  { icon: Trash2, name: 'Trash Cans', description: 'Stop clutter before it starts.', href: '/best/best-car-trash-cans' },
  { icon: Armchair, name: 'Seat Covers', description: 'Guard against spills and wear.', href: '/best/best-car-seat-covers' },
  { icon: Package, name: 'Gap Fillers', description: 'Stop items from falling through.', href: '/best/best-car-seat-gap-fillers' },
  { icon: Armchair, name: 'Steering Wheel Covers', description: 'Better grip and interior style.', href: '/best/best-steering-wheel-covers' },
  { icon: Package, name: 'Backseat Organizers', description: 'Keep kids and cargo organized.', href: '/best/best-backseat-organizers' },
];

const editors = [
  {
    initials: 'MK',
    quote: 'The single most underrated upgrade for any car interior is a properly installed phone mount. Distracted driving costs lives — choosing the right mount is a safety decision, not just a convenience one.',
    name: 'Marcus Kelly',
    title: 'SENIOR GEAR EDITOR',
  },
  {
    initials: 'TR',
    quote: 'We look at verified purchase velocity on Amazon before anything else. A product selling 5,000+ units a month tells you something no press sample ever can.',
    name: 'Tara Ross',
    title: 'RESEARCH LEAD',
  },
  {
    initials: 'DJ',
    quote: 'Trunk organizers and seat gap fillers are the most overlooked car accessories. People spend thousands on their car and twenty dollars fixing the chaos inside it — those twenty dollars matter.',
    name: 'Derek Jin',
    title: 'CAR INTERIOR SPECIALIST',
  },
];

const stats = [
  { value: '47', label: 'Products Reviewed' },
  { value: '8', label: 'Categories Covered' },
  { value: '2026', label: 'Updated' },
  { value: '100%', label: 'Amazon Verified' },
];

const carTypes = [
  {
    icon: Car,
    name: 'Sedan',
    description: 'Compact organizers and slim mounts that fit snugly in tighter interiors.',
    href: '/best/best-car-trunk-organizers',
  },
  {
    icon: CarFront,
    name: 'SUV & Crossover',
    description: 'Large-capacity trunk organizers and full-coverage seat protectors for family haulers.',
    href: '/best/best-car-seat-covers',
  },
  {
    icon: Truck,
    name: 'Truck',
    description: 'Heavy-duty cab organizers and non-slip mats built for work-site gear.',
    href: '/best/best-backseat-organizers',
  },
  {
    icon: Car,
    name: 'Any Vehicle',
    description: 'Universal picks that work across cars, trucks, and SUVs without modification.',
    href: '/best/best-car-sunshades',
  },
];

const glossaryPreview = [
  { term: 'Cargo Net', def: 'A stretchable mesh net used to secure loose items in a trunk or cargo area.' },
  { term: 'NVH', def: 'Noise, Vibration, and Harshness — a measure of cabin comfort during driving.' },
  { term: 'OEM', def: 'Original Equipment Manufacturer — parts or accessories matching factory specs.' },
  { term: 'UV Inhibitor', def: 'A coating or additive that slows sun-related fading and material breakdown.' },
  { term: 'Headrest Strap', def: 'A mounting strap that loops around a headrest post to hang an organizer.' },
  { term: 'Non-Slip Backing', def: 'A textured underside layer that keeps mats or covers from sliding on seats.' },
];

export default function HomePage() {
  const secondary = articles.slice(1, 4);
  const topPicks = getTopPicks();

  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-8">
        <HeroCarousel articles={articles} />
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {secondary.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* FROM OUR EDITORS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-[13px] uppercase text-accent font-semibold tracking-[0.1em] mb-2">
          From Our Editors
        </p>
        <p className="text-[15px] text-[#555] mb-10">The people behind every recommendation on this site.</p>
        <div className="grid sm:grid-cols-3 gap-8">
          {editors.map((e) => (
            <div key={e.initials}>
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white font-bold text-[14px] flex items-center justify-center mb-3">
                {e.initials}
              </div>
              <p className="text-[14px] italic text-[#444] leading-[1.7]">
                <span className="text-accent text-2xl leading-none mr-1 align-[-6px]">&ldquo;</span>
                {e.quote}
              </p>
              <p className="text-[13px] font-bold text-ink mt-2.5">{e.name}</p>
              <p className="text-[11px] uppercase text-[#999] tracking-[0.08em]">{e.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PICKS */}
      <section id="top-picks" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-ink border-l-4 border-accent pl-4 mb-2">
          Our Top Picks for 2026
        </h2>
        <p className="text-[#666] pl-4 mb-8">Expert-reviewed car interior gear, ranked and rated</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPicks.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/gear-guides" className="text-accent font-semibold hover:underline">
            Browse All Reviews →
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e0e0e0]">
        <h2 className="text-2xl font-bold text-ink mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <CategoryCard key={c.name} {...c} />
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e0e0e0]">
        <h2 className="text-2xl font-bold text-ink mb-8">Latest Gear Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(0, 3).map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[2.5rem] font-extrabold text-accent leading-none">{s.value}</p>
              <p className="text-[13px] uppercase text-[#aaaaaa] tracking-[0.08em] mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY CAR TYPE */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e0e0e0]">
        <h2 className="text-2xl font-bold text-ink mb-8">Shop by Car Type</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {carTypes.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.name}
                href={c.href}
                className="block bg-white border border-[#e8e8e8] rounded p-5 hover:border-accent transition-colors"
              >
                <Icon size={28} className="text-accent mb-3" />
                <h3 className="text-[15px] font-bold text-ink mb-1">{c.name}</h3>
                <p className="text-[13px] text-[#666] mb-2">{c.description}</p>
                <span className="text-accent text-[13px] font-semibold">Shop Picks →</span>
              </Link>
            );
          })}
        </div>
        <p className="text-[13px] text-[#666] mt-6">
          Not sure where to start? Use our{' '}
          <Link href="#car-tool" className="text-accent font-semibold hover:underline">
            Car Compatibility Tool →
          </Link>
        </p>
      </section>

      {/* CAR TOOL */}
      <section id="car-tool" className="bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <h2 className="text-2xl font-bold text-ink">Find the Right Gear for Your Car</h2>
        </div>
        <CarCompatibilityTool />
      </section>

      {/* GLOSSARY PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e0e0e0]">
        <h2 className="text-2xl font-bold text-ink mb-8">Know Your Gear</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryPreview.map((g) => (
            <div key={g.term} className="border-l-[3px] border-accent pl-4">
              <p className="font-bold text-ink mb-1">{g.term}</p>
              <p className="text-[13px] text-[#666]">{g.def}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/car-glossary" className="text-accent font-semibold hover:underline">
            Full Glossary →
          </Link>
        </div>
      </section>

      {/* HOW WE PICK */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e0e0e0]">
        <h2 className="text-2xl font-bold text-ink mb-8">How We Pick Gear</h2>
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <Search size={28} className="text-accent mb-3" />
            <h3 className="font-semibold text-ink mb-2">We Research</h3>
            <p className="text-[14px] text-[#555]">We comb through product specs, materials, and owner feedback before any item makes our shortlist.</p>
          </div>
          <div>
            <CheckSquare size={28} className="text-accent mb-3" />
            <h3 className="font-semibold text-ink mb-2">We Compare</h3>
            <p className="text-[14px] text-[#555]">Every pick is weighed against similar products on durability, value, and ease of use.</p>
          </div>
          <div>
            <Award size={28} className="text-accent mb-3" />
            <h3 className="font-semibold text-ink mb-2">We Rank</h3>
            <p className="text-[14px] text-[#555]">Only the strongest performers in each category earn a spot in our published guides.</p>
          </div>
        </div>
        <p className="text-[13px] text-[#555] border-t border-[#e0e0e0] pt-6">
          CabinGearDrive.com participates in the Amazon Services LLC Associates Program. We may earn a commission when you purchase through our links at no extra cost to you. For broader vehicle research, see{' '}
          <a href="https://newsroom.aaa.com/" target="_blank" rel="noopener" className="text-accent hover:underline">
            AAA automotive research
          </a>{' '}
          and{' '}
          <a href="https://www.nhtsa.gov/" target="_blank" rel="noopener" className="text-accent hover:underline">
            NHTSA vehicle safety
          </a>
          .
        </p>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated on the Best Cabin Gear</h2>
          <p className="text-[#aaa] mb-6">Get our latest reviews and buying guides delivered straight to your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
