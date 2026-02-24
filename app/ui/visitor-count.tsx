'use client';

import { useEffect, useState } from 'react';

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visitor', { method: 'POST' })
      .then((r) => r.json())
      .then(({ count }) => setCount(count))
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <p className='text-xs opacity-40'>visitor #{count.toLocaleString()}</p>
  );
}
