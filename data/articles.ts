export interface Article {
  slug: string;
  title: string;
  categoryLabel: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
  productCount: number;
  updatedDate: string;
}

export const articles: Article[] = [
  {
    slug: 'best-car-trunk-organizers',
    title: 'Best Car Trunk Organizers (2026)',
    categoryLabel: 'Trunk Organizers',
    excerpt: 'Six trunk organizers that keep groceries, gear, and emergency supplies from sliding around your cargo area.',
    coverImage: 'https://m.media-amazon.com/images/I/812I20cYC2L._AC_SL1500_.jpg',
    readTime: '9 min read',
    productCount: 6,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-car-phone-mounts',
    title: 'Best Car Phone Mounts & Holders (2026)',
    categoryLabel: 'Phone Mounts',
    excerpt: 'Magnetic, vent, and windshield mounts that keep your phone secure and within easy reach while driving.',
    coverImage: 'https://m.media-amazon.com/images/I/81Q62aaTOpL._AC_SL1500_.jpg',
    readTime: '8 min read',
    productCount: 6,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-steering-wheel-covers',
    title: 'Best Steering Wheel Covers for Cars (2026)',
    categoryLabel: 'Steering Wheel Covers',
    excerpt: 'Covers that improve grip, comfort, and interior style without compromising factory wheel feel.',
    coverImage: 'https://m.media-amazon.com/images/I/714hm9rYZXL._AC_SL1500_.jpg',
    readTime: '8 min read',
    productCount: 6,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-car-seat-gap-fillers',
    title: 'Best Car Seat Gap Fillers & Organizers (2026)',
    categoryLabel: 'Seat Gap Fillers',
    excerpt: 'Stop phones, coins, and pens from disappearing into the front seat gap with these top-rated fillers.',
    coverImage: 'https://m.media-amazon.com/images/I/71aaOjmFYtL._AC_SL1440_.jpg',
    readTime: '7 min read',
    productCount: 5,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-car-sunshades',
    title: 'Best Car Windshield Sunshades (2026)',
    categoryLabel: 'Sunshades',
    excerpt: 'Block UV rays and cut cabin heat with sunshades built for fast setup and lasting reflectivity.',
    coverImage: 'https://m.media-amazon.com/images/I/71W3+eLCARL._AC_SL1500_.jpg',
    readTime: '8 min read',
    productCount: 5,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-car-trash-cans',
    title: 'Best Car Trash Cans & Waste Bins (2026)',
    categoryLabel: 'Trash Cans',
    excerpt: 'Leak-resistant, hangable trash cans that keep wrappers and cups from piling up on the floor.',
    coverImage: 'https://m.media-amazon.com/images/I/81hrIuixehL._AC_SL1500_.jpg',
    readTime: '7 min read',
    productCount: 6,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-car-seat-covers',
    title: 'Best Car Seat Covers & Protectors (2026)',
    categoryLabel: 'Seat Covers',
    excerpt: 'From full-set covers to single-seat protectors, these picks guard your interior from spills and wear.',
    coverImage: 'https://m.media-amazon.com/images/I/61FrxuGwXeL._SL1500_.jpg',
    readTime: '9 min read',
    productCount: 5,
    updatedDate: 'June 2026',
  },
  {
    slug: 'best-backseat-organizers',
    title: 'Best Backseat Organizers for Kids & Families (2026)',
    categoryLabel: 'Backseat Organizers',
    excerpt: 'Keep snacks, toys, and tablets contained on long drives with these family-tested backseat organizers.',
    coverImage: 'https://m.media-amazon.com/images/I/71WJNs1UbhL._AC_SL1500_.jpg',
    readTime: '8 min read',
    productCount: 6,
    updatedDate: 'June 2026',
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
