import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
}

export default function CategoryCard({ icon: Icon, name, description, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-[#e8e8e8] rounded p-5 hover:border-accent hover:shadow-sm transition-all"
    >
      <Icon size={28} className="text-accent mb-3" />
      <h3 className="text-[15px] font-semibold text-ink mb-1">{name}</h3>
      <p className="text-[13px] text-[#666] mb-2">{description}</p>
      <span className="text-accent text-[13px] font-semibold">See Picks →</span>
    </Link>
  );
}
