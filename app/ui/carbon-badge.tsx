// Server component — fetches at build time, revalidates daily
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://payamyek.com';

interface CarbonResult {
  cleanerThan: number;
  statistics: {
    co2: {
      grid: { grams: number };
    };
  };
}

async function getCarbonData(): Promise<CarbonResult | null> {
  try {
    const res = await fetch(
      `https://api.websitecarbon.com/site?url=${encodeURIComponent(BASE)}`,
      { next: { revalidate: 86400 } }, // re-check daily
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function CarbonBadge() {
  const data = await getCarbonData();
  if (!data) return null;

  const grams = data.statistics.co2.grid.grams.toFixed(2);
  const pct = Math.round(data.cleanerThan * 100);

  return (
    <a
      href={`https://www.websitecarbon.com/website/${BASE.replace(/^https?:\/\//, '')}`}
      target='_blank'
      rel='noopener noreferrer'
      className='text-xs opacity-40 transition-opacity hover:opacity-70'
      aria-label='Website carbon footprint report'
    >
      🌿 {grams}g CO₂/visit · cleaner than {pct}% of pages
    </a>
  );
}
