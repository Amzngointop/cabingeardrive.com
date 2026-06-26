import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Use | CabinGearDrive',
  description: 'Terms governing use of CabinGearDrive.com.',
};

export default function TermsPage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-6">Terms of Use</h1>
      <p className="text-[14px] text-[#777] mb-8">Last updated June {site.year}</p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Content Use</h2>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        All content on CabinGearDrive.com is provided for informational purposes only. Product information, ratings,
        and recommendations reflect editorial research and are not a substitute for reviewing manufacturer
        specifications before purchasing.
      </p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Affiliate Relationships</h2>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        CabinGearDrive.com participates in the Amazon Services LLC Associates Program, an affiliate advertising program
        designed to provide a means for sites to earn advertising fees by linking to Amazon.com.
      </p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">No Warranty</h2>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        We make reasonable efforts to keep content accurate and current but make no guarantees regarding completeness,
        accuracy, or product availability. Always confirm product details directly with the retailer before purchase.
      </p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Contact</h2>
      <p className="text-[16px] leading-[1.7] text-[#444]">
        Questions about these terms can be sent to{' '}
        <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
      </p>
    </div>
  );
}
