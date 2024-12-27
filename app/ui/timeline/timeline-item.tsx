import clsx from 'clsx';

import { TimelineItemInterface } from './types';

function formatDate(date: Date) {
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
}

export default function TimelineItem(props: Readonly<TimelineItemInterface>) {
  return (
    <li>
      <div className='timeline-middle'>
        <span className='relative flex h-3 w-3'>
          {props?.animate && (
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75'></span>
          )}
          <span className='relative inline-flex h-3 w-3 rounded-full bg-purple-400'></span>
        </span>
      </div>
      <div
        className={clsx('md:mb-10', {
          'timeline-start ml-5 md:mr-5 md:text-end': props.position === 'left',
          'timeline-end md:ml-5': props.position === 'right',
        })}
      >
        <time className='font-mono italic'>
          {formatDate(props.startDate)} -{' '}
          {props?.endDate ? formatDate(props.endDate) : 'Present'}
        </time>
        <div className='text-lg font-black'>
          {props.jobTitle} @ {props.company}
        </div>
        {props.jobDescription}
      </div>
      <hr />
    </li>
  );
}
