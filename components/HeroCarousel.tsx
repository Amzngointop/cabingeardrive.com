'use client';

import { useState, useEffect } from 'react';
import type { Article } from '@/data/articles';

export default function HeroCarousel({ articles }: { articles: Article[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const current = articles[currentIndex];

  return (
    <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden', backgroundColor: '#111' }} className="rounded">
      <img
        src={current.coverImage}
        alt={current.title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          backgroundColor: '#f7f7f7',
          display: 'block',
          transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
          transition: isAnimating ? 'transform 400ms ease-in-out' : 'none',
        }}
      />
      {/* dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '55%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* text overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '32px 40px',
          transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
          transition: isAnimating ? 'transform 400ms ease-in-out' : 'none',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            background: '#CC0000',
            color: 'white',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '4px 10px',
            borderRadius: 3,
            marginBottom: 10,
          }}
        >
          {current.categoryLabel}
        </span>
        <h2 style={{ color: 'white', fontSize: '1.6rem', fontWeight: 700, margin: '0 0 8px', lineHeight: 1.3 }}>
          <a href={`/best/${current.slug}`} style={{ color: 'white', textDecoration: 'none' }}>
            {current.title}
          </a>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, margin: '0 0 14px', maxWidth: 600 }}>
          {current.excerpt}
        </p>
        <a
          href={`/best/${current.slug}`}
          style={{
            color: 'white',
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
            borderBottom: '2px solid #CC0000',
            paddingBottom: 2,
          }}
        >
          Read More →
        </a>
      </div>
      {/* dot indicators */}
      <div style={{ position: 'absolute', bottom: 16, right: 32, display: 'flex', gap: 6 }}>
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAnimating(false);
              setCurrentIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === currentIndex ? 20 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              background: i === currentIndex ? '#CC0000' : 'rgba(255,255,255,0.5)',
              transition: 'all 300ms ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
