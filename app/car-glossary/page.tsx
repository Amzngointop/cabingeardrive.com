import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Interior Glossary | CabinGearDrive',
  description: 'Plain-language definitions of common car interior accessory and organization terms.',
};

const terms = [
  { term: 'Cargo Net', def: 'A stretchable mesh net used to secure loose items in a trunk or cargo area, preventing shifting during turns or stops.' },
  { term: 'NVH (Noise, Vibration, Harshness)', def: 'An engineering term describing how much noise and vibration reaches the cabin — relevant when accessories add or reduce rattling.' },
  { term: 'OEM (Original Equipment Manufacturer)', def: 'Parts or accessories made to match a vehicle\'s factory specifications, as opposed to aftermarket universal-fit products.' },
  { term: 'UV Inhibitor', def: 'A coating or material additive that slows down sun-related fading, cracking, and material breakdown over time.' },
  { term: 'Headrest Strap', def: 'A mounting strap that loops around a headrest post to hang a backseat organizer or accessory securely.' },
  { term: 'Non-Slip Backing', def: 'A textured underside layer on a mat or cover that grips the seat or floor surface to resist sliding.' },
  { term: 'Gap Filler', def: 'A wedge-shaped accessory placed between the front seat and center console to block items from falling through the gap.' },
  { term: 'Reflective Coating', def: 'A metallic or foil-based layer on sunshades that bounces solar heat away from the windshield rather than absorbing it.' },
  { term: '600D Polyester', def: 'A durable woven polyester fabric commonly used in organizers and bags, rated by denier (D) for thread thickness and strength.' },
  { term: 'Airbag-Compatible Seat Cover', def: 'A seat cover designed with seams or perforations that won\'t interfere with a side-impact airbag\'s deployment path.' },
  { term: 'Tie-Down Point', def: 'A reinforced anchor loop in a trunk or cargo area used to secure straps from organizers or cargo nets.' },
  { term: 'Gooseneck Mount', def: 'A flexible, bendable arm on a phone mount that holds its shape once adjusted to a desired viewing angle.' },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-[2.5rem] font-bold text-ink mb-3">Car Interior Glossary</h1>
      <p className="text-[#666] mb-10">Plain-language definitions for the terms you'll see across our reviews and guides.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {terms.map((t) => (
          <div key={t.term} className="border-l-[3px] border-accent pl-4">
            <p className="font-bold text-ink mb-1">{t.term}</p>
            <p className="text-[14px] text-[#666]">{t.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
