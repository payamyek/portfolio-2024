import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import Parser from 'rss-parser';

export const metadata: Metadata = {
  title: "Reading | Payam's Portfolio",
  description:
    'What Payam Yektamaram is currently reading and recently finished books from Goodreads.',
};

export const revalidate = 3600;

const GOODREADS_ID = '17021992';
const PROFILE_URL = `https://www.goodreads.com/user/show/${GOODREADS_ID}`;
const MAX_READ = 5;

interface Book {
  title: string;
  author: string;
  coverUrl: string;
  link: string;
  rating: number;
  pages: number;
  dateRead: string;
}

type GoodreadsItem = {
  book_large_image_url?: string;
  book_medium_image_url?: string;
  author_name?: string;
  user_rating?: string;
  user_read_at?: string;
  num_pages?: string;
};

const parser = new Parser<Record<string, never>, GoodreadsItem>({
  customFields: {
    item: [
      ['book_large_image_url', 'book_large_image_url'],
      ['book_medium_image_url', 'book_medium_image_url'],
      ['author_name', 'author_name'],
      ['user_rating', 'user_rating'],
      ['user_read_at', 'user_read_at'],
      ['book:num_pages', 'num_pages'],
    ],
  },
});

const feedUrl = (shelf: string) =>
  `https://www.goodreads.com/review/list_rss/${GOODREADS_ID}?shelf=${shelf}`;

const parseBook = (item: Parser.Item & GoodreadsItem): Book => {
  const coverUrl =
    item.book_large_image_url ?? item.book_medium_image_url ?? '';

  return {
    title: item.title ?? '',
    author: item.author_name ?? '',
    coverUrl,
    link: item.link ?? '',
    rating: parseInt(item.user_rating ?? '0', 10),
    pages: parseInt(item.num_pages ?? '0', 10),
    dateRead: item.user_read_at ?? '',
  };
};

const fetchShelf = async (shelf: string): Promise<Book[]> => {
  try {
    const feed = await parser.parseURL(feedUrl(shelf));
    return feed.items.map(parseBook).filter((b) => b.title && b.coverUrl);
  } catch {
    return [];
  }
};

const formatDate = (raw: string): string => {
  const date = new Date(raw);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    timeZone: 'America/Toronto',
  });
};

const Stars = ({ rating }: { rating: number }) => {
  if (!rating) return null;
  return (
    <span
      className='flex gap-0.5'
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-yellow-500' : 'opacity-20'}
        >
          ★
        </span>
      ))}
    </span>
  );
};

export default async function Reading() {
  const [currentlyReading, read] = await Promise.all([
    fetchShelf('currently-reading'),
    fetchShelf('read'),
  ]);

  const recentlyRead = read.slice(0, MAX_READ);
  const hasBooks = currentlyReading.length > 0 || recentlyRead.length > 0;

  return (
    <div className='flex flex-col gap-12 px-6 py-8 lg:py-12'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold md:text-4xl'>Reading</h1>
        <p className='opacity-60'>
          Books from my{' '}
          <a
            href={PROFILE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='link link-secondary underline'
            aria-label='Goodreads profile'
          >
            Goodreads
          </a>{' '}
          shelf.
        </p>
      </div>

      {!hasBooks ? (
        <p className='italic opacity-50'>
          Could not load books right now. Check back later.
        </p>
      ) : (
        <>
          {/* Currently Reading */}
          {currentlyReading.length > 0 && (
            <section className='flex flex-col gap-6'>
              <h2 className='text-lg font-semibold tracking-tight opacity-70 md:text-xl'>
                Currently Reading
              </h2>
              <div className='flex flex-wrap gap-6'>
                {currentlyReading.map((book) => (
                  <BookCard
                    key={book.link}
                    book={book}
                    showRating={false}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Recently Read */}
          {recentlyRead.length > 0 && (
            <section className='flex flex-col gap-6'>
              <h2 className='text-lg font-semibold tracking-tight opacity-70 md:text-xl'>
                Recently Read
              </h2>
              <div className='flex flex-wrap gap-6'>
                {recentlyRead.map((book) => (
                  <BookCard
                    key={book.link}
                    book={book}
                    showRating
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

const BookCard = ({
  book,
  showRating,
}: {
  book: Book;
  showRating: boolean;
}) => (
  <Link
    href={book.link}
    target='_blank'
    rel='noopener noreferrer'
    className='group flex w-32 flex-col gap-2 sm:w-36'
    aria-label={`${book.title} by ${book.author}`}
    tabIndex={0}
  >
    <div className='relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-md transition-transform duration-200 group-hover:scale-[1.03]'>
      <Image
        src={book.coverUrl}
        alt={`Cover of ${book.title}`}
        fill
        sizes='(max-width: 640px) 128px, 144px'
        className='object-cover'
        unoptimized
      />
    </div>
    <div className='flex flex-col gap-0.5'>
      <p className='line-clamp-2 text-sm leading-tight font-medium opacity-90'>
        {book.title}
      </p>
      <p className='text-xs opacity-50'>{book.author}</p>
      {showRating && book.rating > 0 && (
        <div className='flex items-center gap-2'>
          <Stars rating={book.rating} />
        </div>
      )}
      {showRating && book.dateRead && (
        <p className='text-xs opacity-35'>{formatDate(book.dateRead)}</p>
      )}
    </div>
  </Link>
);
