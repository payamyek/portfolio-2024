import { Metadata } from 'next';

import CronTranslator from '../../ui/cron-translator';

export const metadata: Metadata = {
  title: 'Cron Job Translator | Utilities | Payam Yektamaram',
  description:
    'Convert cron expressions into plain English and calculate upcoming execution dates.',
};

export default function CronPage() {
  return (
    <div className='flex flex-col px-6 py-8 lg:py-16'>
      <div className='mx-auto flex w-full max-w-2xl flex-col gap-4 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl'>
          Cron Translator
        </h1>
        <p className='text-base text-pretty opacity-60'>
          Stop guessing when your background jobs will run. Enter a cron
          expression below to translate it into plain English and see the exact
          upcoming execution times in your local timezone.
        </p>
      </div>

      <CronTranslator />
    </div>
  );
}
