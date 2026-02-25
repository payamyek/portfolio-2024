import { createHash } from 'crypto';
import Redis from 'ioredis';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;

const HLL_KEY = 'unique_visitors';

/**
 * Create a privacy-safe visitor fingerprint.
 *
 * SHA-256 of IP + User-Agent — irreversible, never stored raw.
 * The resulting hash is fed into Redis HyperLogLog, which itself
 * is a probabilistic structure that cannot be reversed to extract
 * individual hashes. Two layers of irreversibility = GDPR safe.
 */
const createFingerprint = (ip: string, ua: string): string =>
  createHash('sha256').update(`${ip}|${ua}`).digest('hex');

export async function POST() {
  if (!redis) return NextResponse.json({ count: null });

  try {
    const h = await headers();

    const ip =
      h.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      h.get('x-real-ip') ??
      'unknown';

    const ua = h.get('user-agent') ?? 'unknown';

    const fingerprint = createFingerprint(ip, ua);

    // Track uniqueness
    const isNew = await redis.pfadd(HLL_KEY, fingerprint);

    // If it's a truly new, unique visitor (to the HLL), track their rough location
    if (isNew === 1 && ip !== 'unknown' && ip !== '127.0.0.1' && ip !== '::1') {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,city,lat,lon`,
        );
        const geoData = await geoRes.json();

        if (geoData.status === 'success') {
          // Store anonymized coordinates (rounded to 1 decimal place = ~11km radius)
          // Privacy focused.
          const lat = Math.round(geoData.lat * 10) / 10;
          const lon = Math.round(geoData.lon * 10) / 10;
          const locKey = `${lat},${lon}`;

          await redis.hincrby('visitor_locations', locKey, 1);
        }
      } catch (e) {
        // Silently ignore geo-lookup failures so it doesn't break the counter
        console.error('Geo lookup failed', e);
      }
    }

    const count = await redis.pfcount(HLL_KEY);

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}

export async function GET() {
  if (!redis) return NextResponse.json({ count: null, locations: {} });

  try {
    const [count, locations] = await Promise.all([
      redis.pfcount(HLL_KEY),
      redis.hgetall('visitor_locations'),
    ]);

    // Parse the location string values into integers for the frontend
    const parsedLocations: Record<string, number> = {};
    for (const [key, val] of Object.entries(locations)) {
      parsedLocations[key] = parseInt(val, 10);
    }

    return NextResponse.json({ count, locations: parsedLocations });
  } catch {
    return NextResponse.json({ count: null, locations: {} });
  }
}
