export interface Guide {
  slug: string;
  title: string;
  categoryLabel: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
}

export const guides: Guide[] = [
  {
    slug: 'how-to-organize-your-car-trunk',
    title: 'How to Organize Your Car Trunk Like a Pro',
    categoryLabel: 'Organization',
    excerpt: 'A practical system for zoning your trunk so gear stays put and nothing gets crushed.',
    coverImage: 'https://images.unsplash.com/photo-1662253273553-c89a3a26fad3?q=80&w=1170&auto=format&fit=crop',
    readTime: '7 min read',
  },
  {
    slug: 'best-car-accessories-for-road-trips',
    title: 'The Ultimate Car Accessories Checklist for Road Trips',
    categoryLabel: 'Road Trips',
    excerpt: 'The gear that actually earns its trunk space on a multi-day road trip.',
    coverImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-protect-car-interior',
    title: 'How to Protect Your Car Interior from Wear & Tear',
    categoryLabel: 'Interior Care',
    excerpt: 'Simple habits and accessories that slow down the wear your cabin takes every day.',
    coverImage: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1600&auto=format&fit=crop',
    readTime: '7 min read',
  },
  {
    slug: 'car-phone-mount-guide',
    title: 'How to Choose and Install a Car Phone Mount Safely',
    categoryLabel: 'Phone Mounts',
    excerpt: 'What to check before buying a mount, and how to install it without blocking your view of the road.',
    coverImage: 'https://images.unsplash.com/photo-1759628813876-e29fe9303c15?q=80&w=1170&auto=format&fit=crop',
    readTime: '6 min read',
  },
  {
    slug: 'how-to-reduce-car-heat',
    title: 'How to Keep Your Car Cool in Summer Heat',
    categoryLabel: 'Sun Protection',
    excerpt: 'The combination of shades, vents, and timing that keeps a parked cabin from turning into an oven.',
    coverImage: 'https://images.unsplash.com/photo-1636510856279-4cf180810b6d?q=80&w=1170&auto=format&fit=crop',
    readTime: '7 min read',
  },
  {
    slug: 'car-interior-cleaning-guide',
    title: 'The Complete Car Interior Cleaning & Organization Guide',
    categoryLabel: 'Cleaning',
    excerpt: 'A room-by-room approach to deep cleaning and organizing every zone of your cabin.',
    coverImage: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop',
    readTime: '9 min read',
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
