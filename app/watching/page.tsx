import type { Metadata } from 'next';

import Link from 'next/link';
import Parser from 'rss-parser';

import MoviePoster from '../ui/movie-poster';

export const metadata: Metadata = {
  title: "Watching | Payam's Portfolio",
  description: 'Recent films Payam Yektamaram has watched via Letterboxd.',
};

export const revalidate = 3600;

const LETTERBOXD_USER = 'payamyek';
const PROFILE_URL = `https://letterboxd.com/${LETTERBOXD_USER}/`;
const MAX_WATCHED = 12;

interface Movie {
  title: string;
  year: string;
  posterUrl: string;
  link: string;
  rating: number;
  dateWatched: string;
}

type LetterboxdItem = {
  filmTitle?: string;
  filmYear?: string;
  memberRating?: string;
  watchedDate?: string;
};

const parser = new Parser<Record<string, never>, LetterboxdItem>({
  customFields: {
    item: [
      ['letterboxd:filmTitle', 'filmTitle'],
      ['letterboxd:filmYear', 'filmYear'],
      ['letterboxd:memberRating', 'memberRating'],
      ['letterboxd:watchedDate', 'watchedDate'],
    ],
  },
});

const feedUrl = `https://letterboxd.com/${LETTERBOXD_USER}/rss/`;

const parseMovie = (item: Parser.Item & LetterboxdItem): Movie => {
  // Extract image src from description HTML
  const imgMatch = item.content?.match(/img src="(.*?)"/);
  const posterUrl = imgMatch ? imgMatch[1] : '';

  return {
    title: item.filmTitle ?? item.title ?? '',
    year: item.filmYear ?? '',
    posterUrl,
    link: item.link ?? '',
    rating: parseFloat(item.memberRating ?? '0'),
    dateWatched: item.watchedDate ?? '',
  };
};

const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const feed = await parser.parseURL(feedUrl);
    return feed.items.map(parseMovie).filter((m) => m.title && m.posterUrl);
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
    day: 'numeric',
    timeZone: 'America/Toronto',
  });
};

const Stars = ({ rating }: { rating: number }) => {
  if (!rating) return null;
  // Letterboxd uses half stars (e.g. 3.5), we render ★ and ½ manually or just handle full stars for simplicity
  // A cleaner approach for letterboxd is rendering full vs half stars.
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <span
      className='flex gap-0.5 text-xs text-green-500'
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`f-${i}`}>★</span>
      ))}
      {hasHalfStar && <span>½</span>}
    </span>
  );
};

export default async function Watching() {
  const movies = await fetchMovies();
  const recentlyWatched = movies.slice(0, MAX_WATCHED);

  return (
    <div className='flex flex-col gap-12 px-6 py-8 lg:py-12'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold md:text-4xl'>Watching</h1>
        <p className='opacity-60'>
          Recent films I watched from my{' '}
          <a
            href={PROFILE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='link link-secondary underline'
            aria-label='Letterboxd profile'
          >
            Letterboxd
          </a>
          .
        </p>
      </div>

      {recentlyWatched.length === 0 ? (
        <p className='italic opacity-50'>
          Could not load movies right now. Check back later.
        </p>
      ) : (
        <div className='grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
          {recentlyWatched.map((movie) => (
            <MovieCard
              key={movie.link}
              movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const MovieCard = ({ movie }: { movie: Movie }) => (
  <Link
    href={movie.link}
    target='_blank'
    rel='noopener noreferrer'
    className='group flex flex-col gap-2'
    aria-label={`${movie.title} (${movie.year})`}
    tabIndex={0}
  >
    <div className='bg-base-200 relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-md transition-transform duration-200 group-hover:scale-[1.03]'>
      <MoviePoster
        src={movie.posterUrl}
        alt={`Poster for ${movie.title}`}
      />

      {/* Optional: Add rating directly over the poster for that LB vibe */}
      {movie.rating > 0 && (
        <div className='absolute right-1 bottom-1 rounded bg-black/60 px-1 py-0.5 backdrop-blur-sm'>
          <Stars rating={movie.rating} />
        </div>
      )}
    </div>
    <div className='flex flex-col gap-0.5'>
      <p className='line-clamp-2 text-xs leading-tight font-medium opacity-90 sm:text-sm'>
        {movie.title}
      </p>
      {movie.dateWatched && (
        <p className='text-[10px] opacity-40 sm:text-xs'>
          {formatDate(movie.dateWatched)}
        </p>
      )}
    </div>
  </Link>
);
