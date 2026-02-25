import { Metadata } from 'next';

import ChmodCalculator from '../../ui/chmod-calculator';

export const metadata: Metadata = {
  title: 'Chmod Calculator | Utilities | Payam Yektamaram',
  description:
    'Visual calculator for Unix file permissions (chmod). Convert between octal, symbolic, and binary.',
};

export default function ChmodPage() {
  return (
    <div className='flex flex-col px-6 py-8 lg:py-16'>
      <div className='mx-auto flex w-full max-w-2xl flex-col gap-4 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl'>
          Chmod Calculator
        </h1>
        <p className='text-base text-pretty opacity-60'>
          Stop trying to remember what{' '}
          <code className='bg-base-200 rounded px-1'>chmod 755</code> actually
          means. Visually flip the permission switches below to instantly
          calculate the perfect Unix file permissions format.
        </p>
      </div>

      <ChmodCalculator />
    </div>
  );
}
