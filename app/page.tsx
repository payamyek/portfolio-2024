import Image from 'next/image';
import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';

import IconGroup from './ui/icons/icon-group';
import TypewriterText from './ui/typewriter-text';

const IMAGE_ALT =
  'A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.';

export default function Home() {
  return (
    <div className='flex flex-col gap-12 px-4 py-8 lg:py-12'>
      {/* Hero */}
      <div className='flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-16'>
        <div className='flex flex-col gap-6 text-center lg:flex-1 lg:text-left'>
          <div className='flex justify-center gap-x-2 text-3xl md:flex-col md:text-5xl lg:justify-start lg:gap-y-3 xl:text-7xl'>
            <p>Payam</p>
            <p>Yektamaram</p>
          </div>

          <div className='flex flex-col gap-2'>
            <TypewriterText />
            <div className='flex items-center justify-center gap-1 opacity-60 md:text-lg lg:justify-start'>
              <MdLocationPin />
              <span>Toronto, Canada</span>
            </div>
          </div>

          <div className='flex justify-center lg:justify-start'>
            <IconGroup />
          </div>

          <div className='flex justify-center gap-3 lg:justify-start'>
            <Link
              href='/experiences'
              className='btn btn-primary btn-sm md:btn-md'
            >
              View My Experiences
            </Link>
            <Link
              href='https://cdn.jsdelivr.net/gh/payamyek/career@main/resume/simplify_jobs_resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline btn-sm md:btn-md'
            >
              Resume
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2 lg:flex-shrink-0'>
          <Image
            src='/headshot.jpg'
            priority
            width={380}
            height={380}
            alt={IMAGE_ALT}
            className='hidden rounded-2xl shadow-lg shadow-teal-600/30 duration-500 ease-out hover:scale-105 hover:duration-300 md:block'
          />
          <Image
            src='/headshot.jpg'
            priority
            width={260}
            height={260}
            alt={IMAGE_ALT}
            className='rounded-2xl shadow-lg shadow-teal-600/30 md:hidden'
          />
          <span className='text-sm italic opacity-50'>
            A happy Payam in the wild ...
          </span>
        </div>
      </div>

      <hr className='opacity-15' />

      {/* About */}
      <section className='flex flex-col gap-5'>
        <h2 className='text-2xl font-bold md:text-3xl'>About me</h2>
        <div className='flex flex-col gap-4 text-base leading-relaxed opacity-80 md:text-lg'>
          <p>
            I&apos;m a software engineer who loves building things that feel
            good to use. Right now I&apos;m at{' '}
            <a
              href='https://www.stackadapt.com'
              target='_blank'
              rel='noopener noreferrer'
              className='link link-secondary font-medium underline'
            >
              StackAdapt
            </a>
            , working on the full-stack intersection of React and Ruby on Rails.
            Having a genuinely good time doing it.
          </p>
          <p>
            Before that, I spent several years at the{' '}
            <a
              href='https://www.mpac.ca'
              target='_blank'
              rel='noopener noreferrer'
              className='link link-secondary font-medium underline'
            >
              Municipal Property Assessment Corporation
            </a>{' '}
            where I grew from building my first REST API as a junior dev all the
            way up to leading cross-platform projects and helping land a
            multi-million dollar commercial contract with the City of Winnipeg.
          </p>
          <p>
            Outside of work, I build side projects like chess engines and
            life-expectancy predictors, read a lot, sail when I get the chance,
            and think way too hard about software design.
          </p>
        </div>
      </section>
    </div>
  );
}
