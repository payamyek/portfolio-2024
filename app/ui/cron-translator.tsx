'use client';

import parser from 'cron-parser';
import cronstrue from 'cronstrue';
import { useState, useEffect } from 'react';

export default function CronTranslator() {
  const [expression, setExpression] = useState('0 12 * * 1-5');

  let humanText = '';
  let nextDates: string[] = [];
  let error: string | null = null;

  try {
    // 1. Convert to human readable
    humanText = cronstrue.toString(expression, {
      throwExceptionOnParseError: true,
    });

    // 2. Calculate next 5 execution dates
    const interval = parser.parse(expression);
    for (let i = 0; i < 5; i++) {
      nextDates.push(
        interval.next().toDate().toLocaleString(undefined, {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
        }),
      );
    }
  } catch (e: any) {
    error = e.message || 'Invalid cron expression';
  }

  return (
    <div className='mx-auto mt-8 flex w-full max-w-2xl flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='cron-input'
          className='text-sm font-medium opacity-70'
        >
          Cron Expression
        </label>
        <input
          id='cron-input'
          type='text'
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder='* * * * *'
          className={`input input-bordered w-full font-mono text-lg tracking-widest ${error ? 'input-error' : 'input-info'}`}
          autoComplete='off'
          spellCheck='false'
          autoCorrect='off'
        />
        {error && <span className='text-error mt-1 text-xs'>{error}</span>}
      </div>

      <div className='bg-base-200/50 border-base-content/10 flex flex-col gap-6 rounded-2xl border p-6 sm:p-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xs font-bold tracking-wider uppercase opacity-50'>
            Translation
          </h3>
          <p className='text-xl leading-tight font-medium text-pretty sm:text-2xl'>
            {humanText || '—'}
          </p>
        </div>

        <div className='bg-base-content/10 h-px w-full' />

        <div className='flex flex-col gap-3'>
          <h3 className='text-xs font-bold tracking-wider uppercase opacity-50'>
            Next Executions
          </h3>
          {nextDates.length > 0 ? (
            <ul className='flex flex-col gap-2'>
              {nextDates.map((date, idx) => (
                <li
                  key={idx}
                  className='flex items-center gap-3'
                >
                  <span className='w-6 text-right font-mono text-xs opacity-40'>
                    {idx + 1}.
                  </span>
                  <span className='text-sm tabular-nums opacity-80 sm:text-base'>
                    {date}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <span className='opacity-40'>—</span>
          )}
        </div>
      </div>
    </div>
  );
}
