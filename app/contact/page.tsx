import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us | CabinGearDrive',
  description: 'Get in touch with the CabinGearDrive editorial team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-6">Contact Us</h1>
      <p className="text-[16px] leading-[1.7] text-[#444] mb-6">
        Have feedback on a review, a product suggestion, or a correction to report? We'd like to hear from you.
      </p>
      <div className="flex items-center gap-3 border border-[#e8e8e8] rounded p-5">
        <Mail size={22} className="text-accent" />
        <a href={`mailto:${site.email}`} className="text-[16px] text-ink font-medium hover:text-accent">
          {site.email}
        </a>
      </div>
    </div>
  );
}
