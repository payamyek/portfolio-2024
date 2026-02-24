import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: "Writing | Payam's Portfolio",
  description:
    'Articles and thoughts by Payam Yektamaram on software engineering, technology, and more.',
};

interface Article {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  readTime: number;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function getMediumPosts(): Promise<Article[]> {
  try {
    const res = await fetch('https://medium.com/feed/@payamyek', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const items: Article[] = [];

    for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
      const item = match[1];

      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>(.*?)<\/title>/)?.[1] ??
        '';

      // Medium puts the URL after the first <link> tag (it's a self-closing tag in RSS 2.0)
      const link =
        item.match(/<link\s*\/?>(https?:\/\/[^\s<]+)/)?.[1] ??
        item.match(/<guid[^>]*>(https?:\/\/[^\s<]+)<\/guid>/)?.[1] ??
        '';

      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? '';

      const rawDesc =
        item.match(
          /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/,
        )?.[1] ??
        item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ??
        '';

      const stripped = stripHtml(rawDesc);
      const excerpt =
        stripped.length > 200
          ? stripped.slice(0, 200).trimEnd() + '…'
          : stripped;

      // Use Medium's built-in estimate, fall back to ~200 wpm word count
      const mediumTime = item.match(
        /<medium:estimated_read_time>(\d+)<\/medium:estimated_read_time>/,
      )?.[1];
      const readTime = mediumTime
        ? parseInt(mediumTime, 10)
        : Math.max(1, Math.round(stripped.split(/\s+/).length / 200));

      if (title && link) {
        items.push({ title, link, pubDate, excerpt, readTime });
      }
    }

    return items;
  } catch {
    return [];
  }
}

function formatDate(raw: string): string {
  const date = new Date(raw);
  if (isNaN(date.getTime())) return raw;
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function Writing() {
  const posts = await getMediumPosts();

  return (
    <div className='flex flex-col gap-10 px-6 py-8 lg:py-12'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold md:text-4xl'>Writing</h1>
        <p className='opacity-60'>
          Articles published on{' '}
          <a
            href='https://medium.com/@payamyek'
            target='_blank'
            rel='noopener noreferrer'
            className='link link-secondary underline'
          >
            Medium
          </a>
          .
        </p>
      </div>

      {posts.length === 0 ? (
        <p className='italic opacity-50'>
          Could not load posts right now. Check back later.
        </p>
      ) : (
        <ol className='divide-base-content/10 flex flex-col divide-y'>
          {posts.map((post) => (
            <li
              key={post.link}
              className='group flex flex-col gap-2 py-6 first:pt-0'
            >
              <span className='text-xs tracking-widest uppercase opacity-40'>
                {formatDate(post.pubDate)}
                <span className='mx-2 opacity-40'>·</span>
                {post.readTime} min read
              </span>
              <Link
                href={post.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-semibold underline-offset-4 opacity-90 transition-opacity group-hover:underline hover:opacity-100 md:text-xl'
              >
                {post.title}
              </Link>
              <p className='text-sm leading-relaxed opacity-55 md:text-base'>
                {post.excerpt}
              </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
