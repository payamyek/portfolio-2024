import type { Metadata } from 'next';

import Link from 'next/link';
import Parser from 'rss-parser';

export const metadata: Metadata = {
  title: "Writing | Payam's Portfolio",
  description:
    'Articles and thoughts by Payam Yektamaram on software engineering, technology, and more.',
};

export const revalidate = 3600;

interface Article {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  readTime: number;
}

type MediumItem = {
  contentEncoded?: string;
};

const parser = new Parser<Record<string, never>, MediumItem>({
  customFields: {
    item: [['content:encoded', 'contentEncoded']],
  },
});

const stripHtml = (html: string): string =>
  html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&\w+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

async function getMediumPosts(): Promise<Article[]> {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@payamyek');

    return feed.items
      .filter((item) => item.title && item.link)
      .map((item) => {
        const plainText = stripHtml(item.contentEncoded ?? '');
        const excerpt =
          plainText.length > 200
            ? plainText.slice(0, 200).trimEnd() + '…'
            : plainText;

        const wordCount = plainText.split(/\s+/).filter(Boolean).length;
        const readTime = Math.max(1, Math.round(wordCount / 265));

        return {
          title: item.title!,
          link: item.link!,
          pubDate: item.pubDate ?? '',
          excerpt,
          readTime,
        };
      });
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
    timeZone: 'America/Toronto',
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
