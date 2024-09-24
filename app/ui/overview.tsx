import Image from 'next/image';

import IconGroup from './icons/icon-group';

export default function Overview() {
  return (
    <div className='flex min-h-screen flex-wrap-reverse justify-center md:flex-nowrap md:gap-16'>
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
        <div className='object-fit relative flex h-96 w-72 md:h-[30rem] md:w-[22rem]'>
          <Image
            src='/payam.jpg'
            fill
            priority
            alt='A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.'
            className='rounded-xl shadow-lg shadow-teal-600/30 duration-200 ease-linear hover:scale-105'
          />
        </div>
        <span className='text-md hidden w-full text-center italic md:inline-block'>
          A happy Payam in the wild ...
        </span>
      </div>
    </div>
  );
}
