'use client';

import { useEffect, useState } from 'react';

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

export default function TorontoWeather() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m,weather_code&temperature_unit=celsius&timezone=America%2FToronto',
    )
      .then((r) => r.json())
      .then((data) => {
        const { temperature_2m, weather_code } = data.current;
        const icon = WMO_ICONS[weather_code] ?? '🌡️';
        setDisplay(`${icon} ${Math.round(temperature_2m)}°C`);
      })
      .catch(() => {});
  }, []);

  if (!display)
    return <span className='skeleton inline-block h-4 w-14 rounded' />;

  return <span className='text-sm opacity-70'>{display}</span>;
}
