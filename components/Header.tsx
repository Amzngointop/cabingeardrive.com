'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { articles } from '@/data/articles';

const navLinks = [
  { label: 'THE GUIDES', href: '/gear-guides' },
  { label: 'CAR GLOSSARY', href: '/car-glossary' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1a1a1a] h-9 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <span className="text-[12px] text-[#aaaaaa]">Expert Car Interior Reviews Since 2026</span>
        </div>
      </div>

      <div className="bg-white border-b border-[#e0e0e0] h-16">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="text-[1.6rem] font-extrabold leading-none">
            <span className="text-ink">CabinGear</span>
            <span className="text-accent">Drive</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-1 text-[13px] uppercase tracking-wider text-[#333] hover:text-accent"
              >
                GEAR PICKS
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#e0e0e0] shadow-md rounded z-50">
                  {articles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/best/${a.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-[13px] text-[#333] hover:text-accent hover:bg-[#fafafa]"
                    >
                      {a.categoryLabel}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-wider text-[#333] hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#top-picks"
              className="hidden sm:inline-flex bg-accent text-white text-[12px] font-semibold uppercase tracking-wider px-4 py-2 rounded hover:bg-accent-hover"
            >
              TOP PICKS →
            </Link>
            <button className="lg:hidden text-ink" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] bg-white z-40 overflow-y-auto">
          <nav className="flex flex-col px-6 py-6 gap-1">
            <span className="text-[12px] uppercase tracking-wider text-[#999] font-semibold mt-2 mb-1">Gear Picks</span>
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/best/${a.slug}`}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-[#333] py-2.5 border-b border-[#eee]"
              >
                {a.categoryLabel}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] uppercase tracking-wider text-[#333] py-2.5 border-b border-[#eee]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
