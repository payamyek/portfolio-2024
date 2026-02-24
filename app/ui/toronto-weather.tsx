'use client';

import { useQuery } from '@tanstack/react-query';

const WMO_ICONS: Record<number, string> = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌦️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  71: '🌨️',
  73: '🌨️',
  75: '🌨️',
  77: '🌨️',
  80: '🌦️',
  81: '🌦️',
  82: '🌦️',
  85: '🌨️',
  86: '🌨️',
  95: '⛈️',
  96: '⛈️',
  99: '⛈️',
};

async function fetchWeather() {
  const res = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m,weather_code&temperature_unit=celsius&timezone=America%2FToronto',
  );
  if (!res.ok) throw new Error('Weather fetch failed');
  const data = await res.json();
  const { temperature_2m, weather_code } = data.current;
  return `${WMO_ICONS[weather_code] ?? '🌡️'} ${Math.round(temperature_2m)}°C`;
}

export default function TorontoWeather() {
  const { data } = useQuery({
    queryKey: ['toronto-weather'],
    queryFn: fetchWeather,
    staleTime: 30 * 60 * 1000, // consider fresh for 30 minutes
    retry: 1,
  });

  if (!data) return <span className='skeleton inline-block h-4 w-14 rounded' />;

  return <span className='text-sm opacity-70'>{data}</span>;
}
