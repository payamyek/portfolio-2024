import Image from 'next/image';

import IconGroup from './icons/icon-group';

export default function Overview() {
  return (
    <div className='flex min-h-dvh flex-wrap-reverse justify-center md:flex-nowrap md:gap-16'>
      <div className='flex flex-col justify-center md:gap-y-16'>
        <div className='flex justify-center gap-x-2 md:flex-col md:gap-y-5'>
          <div className='text-center text-3xl md:text-8xl'>Payam</div>
          <div className='text-center text-3xl md:text-8xl'>Yektamaram</div>
        </div>
        <div className='flex flex-col gap-4 md:gap-5'>
          <span className='text-md text-center md:text-4xl'>
            Full-stack Developer @ MPAC
          </span>
          <span className='text-md text-center italic md:text-3xl'>
            University of Toronto Graduate
          </span>
          <IconGroup />
        </div>
      </div>
      <div className='flex flex-col justify-end md:justify-center md:gap-y-2'>
        <Image
          src='/payam.jpg'
          priority
          width={400}
          height={800}
          alt='A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.'
          className='hidden rounded-xl shadow-lg shadow-teal-600/30 duration-500 ease-out hover:scale-105 hover:duration-300 md:block'
        />
        <Image
          src='/payam.jpg'
          priority
          width={300}
          height={400}
          alt='A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.'
          className='rounded-xl shadow-lg shadow-teal-600/30 duration-200 ease-linear hover:scale-105 md:hidden'
        />
        <span className='text-md hidden w-full text-center italic md:inline-block'>
          A happy Payam in the wild ...
        </span>
      </div>
    </div>
  );
}
