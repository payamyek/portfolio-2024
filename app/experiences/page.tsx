import type { Metadata } from 'next';

import React from 'react';
import {
  SiAngular,
  SiBootstrap,
  SiDocker,
  SiElectron,
  SiJavascript,
  SiModin,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

export const metadata: Metadata = {
  title: "Experiences | Payam's Portfolio",
  description:
    'Work history and professional experience of Payam Yektamaram, Software Engineer at StackAdapt.',
};

interface Experience {
  startDate: Date;
  endDate?: Date;
  jobTitle: string;
  company: string;
  companyDomain: string;
  jobDescription: string;
  technologies?: React.JSX.Element[];
}

function getDuration(start: Date, end?: Date): string {
  const to = end ?? new Date();
  const months =
    (to.getFullYear() - start.getFullYear()) * 12 +
    (to.getMonth() - start.getMonth());
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y && m) return `${y}y ${m}mo`;
  if (y) return `${y}y`;
  return `${m}mo`;
}

function fmt(date: Date) {
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

const experiences: Experience[] = [
  {
    startDate: new Date(2025, 7),
    jobTitle: 'Software Engineer',
    company: 'StackAdapt',
    companyDomain: 'stackadapt.com',
    jobDescription:
      'A world where React and Ruby on Rails intersect in the most delightful manner. Building full-stack features at the heart of a high-scale programmatic advertising platform.',
    technologies: [
      <SiRuby key='ruby' />,
      <SiRubyonrails key='rails' />,
      <SiReact key='react' />,
    ],
  },
  {
    startDate: new Date(2023, 7),
    endDate: new Date(2025, 4),
    jobTitle: 'Fullstack Developer',
    company: 'Municipal Property Assessment Corporation',
    companyDomain: 'mpac.ca',
    jobDescription:
      'Led a company-wide initiative that secured the City of Winnipeg as a commercial client, resulting in a multi-million dollar contract and the launch of a new Commercial division. Oversaw frontend and backend systems for our Winnipeg partners.',
    technologies: [
      <SiPython key='python' />,
      <SiPandas key='pandas' />,
      <SiTypescript key='typescript' />,
      <SiAngular key='angular' />,
      <SiDocker key='docker' />,
      <SiElectron key='electron' />,
      <SiNumpy key='numpy' />,
      <SiModin key='modin' />,
      <SiSpringboot key='springboot' />,
    ],
  },
  {
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 7),
    jobTitle: 'Systems Developer',
    company: 'Municipal Property Assessment Corporation',
    companyDomain: 'mpac.ca',
    jobDescription:
      'Led the cross-platform tablet application project for Ireland — built with Electron, React, and Python — delivering a polished tool that earned strong praise from our international colleagues.',
    technologies: [
      <SiPython key='python' />,
      <SiReact key='react' />,
      <SiJavascript key='javascript' />,
      <SiElectron key='electron' />,
      <SiDocker key='docker' />,
      <SiSpringboot key='springboot' />,
    ],
  },
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 11),
    jobTitle: 'Junior Systems Developer',
    company: 'Municipal Property Assessment Corporation',
    companyDomain: 'mpac.ca',
    jobDescription:
      'Built a full-stack "Lookup Service" from scratch in my first professional role — REST API backend paired with a React frontend. Shipped it. It worked. I was hooked.',
    technologies: [
      <SiPython key='python' />,
      <SiReact key='react' />,
      <SiJavascript key='javascript' />,
      <SiBootstrap key='bootstrap' />,
      <SiDocker key='docker' />,
      <SiSpringboot key='springboot' />,
    ],
  },
];

export default function Experiences() {
  return (
    <div className='px-4 py-8 lg:py-12'>
      {/* Page header */}
      <div className='mb-10 flex flex-col gap-1'>
        <h1 className='text-2xl font-bold'>Experience</h1>
        <p className='text-sm opacity-40'>
          Where I&apos;ve worked and what I&apos;ve built.
        </p>
      </div>

      {/* Timeline */}
      <div className='relative'>
        {/* Vertical line */}
        <div className='bg-base-content/10 absolute top-2 bottom-6 left-[11px] w-px' />

        <div className='flex flex-col gap-10'>
          {experiences.map((exp) => {
            const isCurrent = !exp.endDate;
            const dateRange = `${fmt(exp.startDate)} – ${exp.endDate ? fmt(exp.endDate) : 'Present'}`;
            const duration = getDuration(exp.startDate, exp.endDate);

            return (
              <div
                key={exp.startDate.toString()}
                className='group flex gap-5'
              >
                {/* Dot */}
                <div className='relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center'>
                  {isCurrent ? (
                    <>
                      <span className='bg-success/25 absolute h-5 w-5 animate-ping rounded-full' />
                      <span className='bg-success relative h-3 w-3 rounded-full' />
                    </>
                  ) : (
                    <span className='bg-base-content/20 group-hover:bg-base-content/40 h-2.5 w-2.5 rounded-full transition-colors' />
                  )}
                </div>

                {/* Content */}
                <div className='flex flex-1 flex-col gap-3 pb-2'>
                  {/* Title row */}
                  <div className='flex flex-col gap-1'>
                    <div className='flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1'>
                      <h2 className='text-base font-semibold'>
                        {exp.jobTitle}
                      </h2>
                      <div className='flex shrink-0 items-center gap-2'>
                        <span className='font-mono text-xs opacity-30'>
                          {duration}
                        </span>
                        <span className='badge badge-ghost badge-sm font-mono'>
                          {dateRange}
                        </span>
                      </div>
                    </div>

                    {/* Company + favicon */}
                    <div className='flex items-center gap-1.5'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${exp.companyDomain}&sz=16`}
                        alt=''
                        aria-hidden='true'
                        className='h-4 w-4 rounded-sm opacity-70'
                      />
                      <span className='text-sm italic opacity-50'>
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-sm leading-relaxed opacity-60'>
                    {exp.jobDescription}
                  </p>

                  {/* Tech icons */}
                  {exp.technologies && (
                    <div className='flex flex-wrap gap-3 text-xl opacity-40 transition-opacity group-hover:opacity-70'>
                      {exp.technologies}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
