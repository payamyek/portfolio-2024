'use client';

import { useRef, useState } from 'react';

const tools = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'UI Library' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Ruby on Rails', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'In-Memory Store' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Docker', category: 'DevOps' },
];

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className='group border-base-content/5 bg-base-200/20 hover:border-base-content/10 relative overflow-hidden rounded-xl border p-5 shadow-sm transition-colors sm:p-6'
    >
      <div
        className='pointer-events-none absolute -inset-px z-0 transition-opacity duration-300 ease-out'
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.1), transparent 40%)`,
        }}
      />
      <div className='relative z-10'>{children}</div>
    </div>
  );
}

export default function SpotlightStack() {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
      {tools.map((tool) => (
        <SpotlightCard key={tool.name}>
          <div className='flex flex-col gap-1'>
            <span className='text-base-content font-semibold tracking-tight'>
              {tool.name}
            </span>
            <span className='text-xs opacity-50 sm:text-sm'>
              {tool.category}
            </span>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
