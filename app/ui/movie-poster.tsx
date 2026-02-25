'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MoviePosterProps {
  src: string;
  alt: string;
}

// Fallback image (a generic placeholder for movies)
const FALLBACK_IMAGE =
  'https://s.ltrbxd.com/static/img/empty-poster-250.7c2134ed.png';

export default function MoviePoster({ src, alt }: MoviePosterProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc || FALLBACK_IMAGE}
      alt={alt}
      fill
      sizes='(max-width: 640px) 128px, 144px'
      className='object-cover'
      unoptimized
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
}
