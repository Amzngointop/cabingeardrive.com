import type { Product } from '@/data/products';

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto my-8 border border-[#e0e0e0] rounded">
      <table className="w-full border-collapse text-left text-[14px] min-w-[640px]">
        <thead>
          <tr className="bg-[#1a1a1a] text-white">
            <th className="py-3 px-4 font-semibold">Product</th>
            <th className="py-3 px-4 font-semibold">Best For</th>
            <th className="py-3 px-4 font-semibold">Key Feature</th>
            <th className="py-3 px-4 font-semibold">Top Con</th>
            <th className="py-3 px-4 font-semibold">Check Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
              <td className="py-3 px-4 font-medium text-ink">
                <a href={`#${p.id}`} className="hover:text-accent">{p.name}</a>
              </td>
              <td className="py-3 px-4 text-[#444]">{p.bestFor}</td>
              <td className="py-3 px-4 text-[#444]">{p.pros[0]}</td>
              <td className="py-3 px-4 text-[#444]">{p.cons[0]}</td>
              <td className="py-3 px-4">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="text-accent font-semibold hover:underline"
                >
                  View →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
