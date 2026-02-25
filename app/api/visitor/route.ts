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

    // PFADD registers the fingerprint in the HyperLogLog.
    // Internally it only updates probabilistic registers —
    // the original hash is discarded, not stored.
    await redis.pfadd(HLL_KEY, fingerprint);

    // PFCOUNT returns the approximate cardinality (~0.81% error)
    const count = await redis.pfcount(HLL_KEY);

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}

export async function GET() {
  if (!redis) return NextResponse.json({ count: null });

  try {
    const count = await redis.pfcount(HLL_KEY);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}
