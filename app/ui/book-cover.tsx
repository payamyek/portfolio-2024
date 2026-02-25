'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BookCoverProps {
  src: string;
  alt: string;
}

// Fallback image (a generic placeholder if the Goodreads image fails to load)
const FALLBACK_IMAGE =
  'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png';

export default function BookCover({ src, alt }: BookCoverProps) {
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
