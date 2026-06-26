import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  full?: boolean;
}

export default function CTAButton({ href, children, full }: CTAButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`${full ? 'flex' : 'inline-flex'} items-center justify-center bg-accent text-white rounded text-[12px] font-semibold uppercase tracking-wider py-2.5 px-5 hover:bg-accent-hover transition-colors duration-150`}
    >
      {children}
    </Link>
  );
}
