import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us | CabinGearDrive',
  description: 'Learn how CabinGearDrive researches and reviews car interior accessories.',
};

export default function AboutPage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-6">About CabinGearDrive</h1>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-5">
        CabinGearDrive.com is an editorial resource focused entirely on car interior accessories — the organizers, mounts,
        covers, and small upgrades that make daily driving more comfortable and your cabin easier to keep tidy. We started
        the site because most car accessory coverage is buried inside broader automotive sites that treat interior gear as
        an afterthought.
      </p>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-5">
        Our editors research product specifications, materials, and real owner feedback across each category before
        publishing a ranked guide. We focus on practical differences that matter for everyday use: fit, durability,
        ease of installation, and how well a product actually solves the problem it claims to solve.
      </p>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-5">
        CabinGearDrive.com participates in the Amazon Services LLC Associates Program. We may earn a commission when you
        purchase through links on our site, at no extra cost to you. This supports the research and writing that goes into
        every guide without affecting which products we choose to recommend.
      </p>
      <p className="text-[16px] leading-[1.7] text-[#444]">
        Have a question or a product suggestion? Reach us at{' '}
        <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
      </p>
    </div>
  );
}
