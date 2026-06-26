export default function CategoryDiagram({ slug }: { slug: string }) {
  const common = 'w-full h-auto';

  if (slug === 'best-car-trunk-organizers') {
    return (
      <svg viewBox="0 0 600 280" className={common}>
        <rect x="20" y="20" width="560" height="240" rx="8" fill="#f7f7f7" stroke="#cccccc" />
        <rect x="50" y="60" width="160" height="160" rx="4" fill="#ffffff" stroke="#CC0000" strokeWidth="2" />
        <text x="130" y="145" textAnchor="middle" fill="#444" fontSize="13">Zone A</text>
        <text x="130" y="163" textAnchor="middle" fill="#777" fontSize="11">Groceries</text>
        <rect x="230" y="60" width="160" height="75" rx="4" fill="#ffffff" stroke="#CC0000" strokeWidth="2" />
        <text x="310" y="100" textAnchor="middle" fill="#444" fontSize="13">Zone B</text>
        <text x="310" y="118" textAnchor="middle" fill="#777" fontSize="11">Tools</text>
        <rect x="230" y="145" width="160" height="75" rx="4" fill="#ffffff" stroke="#CC0000" strokeWidth="2" />
        <text x="310" y="185" textAnchor="middle" fill="#444" fontSize="13">Zone C</text>
        <text x="310" y="203" textAnchor="middle" fill="#777" fontSize="11">Emergency Kit</text>
        <rect x="410" y="60" width="140" height="160" rx="4" fill="#ffffff" stroke="#CC0000" strokeWidth="2" />
        <text x="480" y="145" textAnchor="middle" fill="#444" fontSize="13">Zone D</text>
        <text x="480" y="163" textAnchor="middle" fill="#777" fontSize="11">Sports Gear</text>
      </svg>
    );
  }

  if (slug === 'best-car-phone-mounts') {
    return (
      <svg viewBox="0 0 600 260" className={common}>
        <rect x="20" y="20" width="560" height="220" rx="8" fill="#f7f7f7" stroke="#cccccc" />
        <path d="M40 200 Q300 40 560 200" fill="none" stroke="#cccccc" strokeWidth="2" />
        <circle cx="170" cy="100" r="10" fill="#CC0000" />
        <text x="170" y="80" textAnchor="middle" fill="#444" fontSize="12">Vent Mount</text>
        <circle cx="300" cy="60" r="10" fill="#CC0000" />
        <text x="300" y="42" textAnchor="middle" fill="#444" fontSize="12">Windshield Mount</text>
        <circle cx="430" cy="100" r="10" fill="#CC0000" />
        <text x="430" y="80" textAnchor="middle" fill="#444" fontSize="12">Dash Mount</text>
        <circle cx="300" cy="190" r="10" fill="#CC0000" />
        <text x="300" y="215" textAnchor="middle" fill="#444" fontSize="12">Cup Holder Mount</text>
      </svg>
    );
  }

  if (slug === 'best-steering-wheel-covers') {
    return (
      <svg viewBox="0 0 400 260" className={common}>
        <circle cx="200" cy="130" r="100" fill="none" stroke="#cccccc" strokeWidth="14" />
        <circle cx="200" cy="130" r="100" fill="none" stroke="#CC0000" strokeWidth="6" strokeDasharray="10 8" />
        <text x="200" y="20" textAnchor="middle" fill="#444" fontSize="13">Cover Layer (Grip Surface)</text>
        <text x="200" y="250" textAnchor="middle" fill="#777" fontSize="12">Factory Wheel Underneath</text>
      </svg>
    );
  }

  if (slug === 'best-car-seat-gap-fillers') {
    return (
      <svg viewBox="0 0 500 260" className={common}>
        <rect x="40" y="40" width="180" height="180" rx="6" fill="#f0f0f0" stroke="#ccc" />
        <text x="130" y="135" textAnchor="middle" fill="#777" fontSize="13">Seat</text>
        <rect x="280" y="40" width="180" height="180" rx="6" fill="#f0f0f0" stroke="#ccc" />
        <text x="370" y="135" textAnchor="middle" fill="#777" fontSize="13">Console</text>
        <polygon points="220,60 280,60 270,200 230,200" fill="#CC0000" opacity="0.85" />
        <text x="250" y="230" textAnchor="middle" fill="#444" fontSize="12">Gap Filler Wedge</text>
      </svg>
    );
  }

  if (slug === 'best-car-sunshades') {
    return (
      <svg viewBox="0 0 500 240" className={common}>
        <rect x="20" y="20" width="460" height="200" rx="8" fill="#f7f7f7" stroke="#ccc" />
        <text x="250" y="45" textAnchor="middle" fill="#444" fontSize="12">Without Shade</text>
        <rect x="40" y="60" width="190" height="130" fill="#ffe5e5" stroke="#CC0000" />
        <text x="135" y="130" textAnchor="middle" fill="#CC0000" fontSize="20" fontWeight="700">130°F</text>
        <text x="365" y="45" textAnchor="middle" fill="#444" fontSize="12">With Shade</text>
        <rect x="270" y="60" width="190" height="130" fill="#e6f7e6" stroke="#3a8a3a" />
        <text x="365" y="130" textAnchor="middle" fill="#3a8a3a" fontSize="20" fontWeight="700">95°F</text>
      </svg>
    );
  }

  if (slug === 'best-car-trash-cans') {
    return (
      <svg viewBox="0 0 300 280" className={common}>
        <rect x="80" y="60" width="140" height="180" rx="10" fill="#f7f7f7" stroke="#CC0000" strokeWidth="3" />
        <rect x="80" y="60" width="140" height="30" rx="10" fill="#CC0000" />
        <text x="150" y="80" textAnchor="middle" fill="#fff" fontSize="12">LID</text>
        <text x="150" y="160" textAnchor="middle" fill="#777" fontSize="13">Leak-Resistant</text>
        <text x="150" y="180" textAnchor="middle" fill="#777" fontSize="13">Liner</text>
        <line x1="100" y1="50" x2="60" y2="20" stroke="#cccccc" strokeWidth="2" />
        <line x1="200" y1="50" x2="240" y2="20" stroke="#cccccc" strokeWidth="2" />
        <text x="50" y="15" textAnchor="middle" fill="#777" fontSize="11">Strap</text>
        <text x="250" y="15" textAnchor="middle" fill="#777" fontSize="11">Strap</text>
      </svg>
    );
  }

  if (slug === 'best-car-seat-covers') {
    return (
      <svg viewBox="0 0 460 260" className={common}>
        <rect x="40" y="30" width="380" height="200" rx="6" fill="#f7f7f7" stroke="#ccc" />
        <rect x="60" y="50" width="340" height="40" fill="#ffffff" stroke="#777" />
        <text x="230" y="75" textAnchor="middle" fill="#444" fontSize="12">Top Layer — Cover Fabric</text>
        <rect x="60" y="95" width="340" height="40" fill="#fafafa" stroke="#999" />
        <text x="230" y="120" textAnchor="middle" fill="#444" fontSize="12">Padding / Quilting</text>
        <rect x="60" y="140" width="340" height="40" fill="#eeeeee" stroke="#999" />
        <text x="230" y="165" textAnchor="middle" fill="#444" fontSize="12">Non-Slip Backing</text>
        <rect x="60" y="185" width="340" height="30" fill="#e0e0e0" stroke="#999" />
        <text x="230" y="205" textAnchor="middle" fill="#777" fontSize="11">Factory Seat</text>
      </svg>
    );
  }

  // best-backseat-organizers
  return (
    <svg viewBox="0 0 420 280" className={common}>
      <rect x="30" y="20" width="360" height="240" rx="6" fill="#f7f7f7" stroke="#ccc" />
      <rect x="60" y="40" width="100" height="60" fill="#fff" stroke="#CC0000" strokeWidth="2" />
      <text x="110" y="75" textAnchor="middle" fill="#444" fontSize="11">Tablet</text>
      <rect x="180" y="40" width="100" height="60" fill="#fff" stroke="#CC0000" strokeWidth="2" />
      <text x="230" y="75" textAnchor="middle" fill="#444" fontSize="11">Snacks</text>
      <rect x="300" y="40" width="60" height="60" fill="#fff" stroke="#CC0000" strokeWidth="2" />
      <text x="330" y="75" textAnchor="middle" fill="#444" fontSize="10">Toys</text>
      <rect x="60" y="120" width="300" height="100" fill="#fff" stroke="#777" strokeWidth="2" />
      <text x="210" y="175" textAnchor="middle" fill="#444" fontSize="13">Fold-Out Tray Table</text>
    </svg>
  );
}
