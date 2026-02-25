'use client';

import createGlobe from 'cobe';
import { useEffect, useRef, useState } from 'react';

export default function VisitorGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<
    { location: [number, number]; size: number }[]
  >([]);

  useEffect(() => {
    fetch('/api/visitor')
      .then((r) => r.json())
      .then((data) => {
        if (!data.locations) return;

        // Convert the object graph into cobe points
        const newPoints = Object.entries<{ [key: string]: number }>(
          data.locations,
        ).map(([coordStr, count]) => {
          const [lat, lon] = coordStr.split(',').map(Number);
          // Size is relative to hits, capped so it doesn't get ridiculously huge
          const size = Math.min(0.1 + Number(count) * 0.02, 0.5);
          return { location: [lat, lon] as [number, number], size };
        });

        setPoints(newPoints);
      })
      .catch((e) => console.error('Globe fetch failed', e));
  }, []);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.15,
      dark: 1, // dark mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1], // Dark gray
      markerColor: [0.1, 0.8, 1], // Cyan markers
      glowColor: [0.1, 0.1, 0.15],
      markers: points,
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [points]);

  return (
    <div className='flex w-full flex-col items-center justify-center pt-8'>
      <div className='relative aspect-square w-full max-w-[400px] overflow-hidden sm:max-w-[600px]'>
        <canvas
          ref={canvasRef}
          className='h-full w-full'
          style={{
            width: '100%',
            height: '100%',
            contain: 'layout paint size',
          }}
        />
        <div className='pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-4 text-center'>
          <div className='mt-[70%] sm:mt-[60%]'>
            <p className='bg-base-200/80 rounded-full px-4 py-1.5 text-xs font-medium tracking-tight text-white backdrop-blur-md'>
              Live Visitor Heatmap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
