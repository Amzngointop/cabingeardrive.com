import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | CabinGearDrive',
  description: 'How CabinGearDrive handles visitor information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-6">Privacy Policy</h1>
      <p className="text-[14px] text-[#777] mb-8">Last updated June {site.year}</p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Information We Collect</h2>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        CabinGearDrive.com does not require account registration and does not collect personal information beyond what
        is voluntarily submitted through our contact email or newsletter signup field. We do not sell or share any
        information you provide.
      </p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Cookies and Analytics</h2>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        Our site may use standard analytics tools to understand aggregate traffic patterns. These tools do not identify
        individual visitors and are used solely to improve site content and performance.
      </p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Affiliate Links</h2>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        CabinGearDrive.com participates in the Amazon Services LLC Associates Program. Links to Amazon may use tracking
        parameters that allow Amazon to attribute a purchase to our site, but no personal data is shared with us as a
        result of clicking these links.
      </p>

      <h2 className="text-[1.15rem] font-semibold text-ink mb-3">Contact</h2>
      <p className="text-[16px] leading-[1.7] text-[#444]">
        Questions about this policy can be sent to{' '}
        <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
      </p>
    </div>
  );
}
