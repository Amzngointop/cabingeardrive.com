import Link from 'next/link';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-[1.4rem] font-extrabold leading-none mb-3">
            <span className="text-white">CabinGear</span>
            <span className="text-accent">Drive</span>
          </div>
          <p className="text-[13px] text-[#aaa] mb-3">{site.tagline}</p>
          <p className="text-[12px] text-[#888]">© {site.year} CabinGearDrive.com. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-[13px] uppercase tracking-wider font-semibold mb-4">Gear Reviews</h4>
          <ul className="space-y-2">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/best/${a.slug}`} className="text-[13px] text-[#aaa] hover:text-accent">
                  {a.categoryLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[13px] uppercase tracking-wider font-semibold mb-4">Guides & Resources</h4>
          <ul className="space-y-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-[13px] text-[#aaa] hover:text-accent">
                  {g.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/car-glossary" className="text-[13px] text-[#aaa] hover:text-accent">
                Car Glossary
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[13px] uppercase tracking-wider font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-[13px] text-[#aaa] hover:text-accent">About</Link></li>
            <li><Link href="/contact" className="text-[13px] text-[#aaa] hover:text-accent">Contact</Link></li>
            <li><Link href="/privacy-policy" className="text-[13px] text-[#aaa] hover:text-accent">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-[13px] text-[#aaa] hover:text-accent">Terms</Link></li>
            <li><Link href="/affiliate-disclosure" className="text-[13px] text-[#aaa] hover:text-accent">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#333] py-4 px-6 text-center">
        <p className="text-[12px] text-accent">
          CabinGearDrive.com participates in the Amazon Services LLC Associates Program and may earn from qualifying purchases.
        </p>
      </div>
    </footer>
  );
}
