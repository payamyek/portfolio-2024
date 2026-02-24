import Redis from 'ioredis';
import { NextResponse } from 'next/server';

// Railway injects REDIS_URL automatically when you add the Redis plugin
const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;

export async function POST() {
  if (!redis) return NextResponse.json({ count: null });
  try {
    const count = await redis.incr('visitor_count');
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}

export async function GET() {
  if (!redis) return NextResponse.json({ count: null });
  try {
    const raw = await redis.get('visitor_count');
    return NextResponse.json({ count: parseInt(raw ?? '0', 10) });
  } catch {
    return NextResponse.json({ count: null });
  }
}
