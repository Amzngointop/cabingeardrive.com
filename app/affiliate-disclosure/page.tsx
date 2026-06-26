import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | CabinGearDrive',
  description: 'Our affiliate relationship and how it affects our reviews.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-6">Affiliate Disclosure</h1>
      <div className="border-l-4 border-accent bg-[#fff8f8] px-4 py-3 mb-8">
        <p className="text-[13px] text-[#555]">
          CabinGearDrive.com participates in the Amazon Services LLC Associates Program. We may earn a commission when
          you purchase through our links at no extra cost to you.
        </p>
      </div>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-5">
        This means that when you click an Amazon link on our site and make a qualifying purchase, CabinGearDrive.com
        may receive a small commission. This comes at no additional cost to you — the price you pay is the same whether
        you use our link or navigate to the product directly.
      </p>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-5">
        These commissions help support the research, writing, and maintenance of this site. They do not influence which
        products we choose to feature or how we rank them — our recommendations are based on independent editorial
        research, not on commission rates.
      </p>
      <p className="text-[16px] leading-[1.7] text-[#444]">
        Questions about this disclosure can be sent to{' '}
        <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
      </p>
    </div>
  );
}
