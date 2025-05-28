import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';

import IconGroup from './icons/icon-group';

const IMAGE_ALT =
  'A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.';

export default function Overview() {
  return (
    <div className='flex min-h-dvh flex-wrap-reverse justify-center lg:flex-nowrap lg:gap-16'>
      <div className='flex flex-col justify-evenly text-center lg:justify-center lg:gap-y-16'>
        <div className='flex justify-center gap-x-2 text-3xl md:flex-col md:text-5xl lg:gap-y-5 xl:text-8xl'>
          <p>Payam</p>
          <p>Yektamaram</p>
        </div>
        <div className='text-md flex flex-col gap-4 md:gap-5'>
          <p className='md:text-3xl'>Fullstack Developer @ MPAC</p>
          <p className='italic md:text-3xl'>UofT Alumni</p>
          <div className='align- mb-6 flex items-center justify-center gap-2 md:text-xl lg:mb-16'>
            <MdLocationPin />
            Toronto, Canada
          </div>

          <IconGroup />
        </div>
      </div>
      <div className='flex flex-col justify-end md:gap-y-2 lg:justify-center'>
        <Image
          src='/payam.jpg'
          priority
          width={400}
          height={800}
          alt={IMAGE_ALT}
          className='hidden rounded-xl shadow-lg shadow-teal-600/30 duration-500 ease-out hover:scale-105 hover:duration-300 md:block'
        />
        <Image
          src='/payam.jpg'
          priority
          width={300}
          height={400}
          alt={IMAGE_ALT}
          className='rounded-xl shadow-lg shadow-teal-600/30 md:hidden'
        />
        <span className='hidden w-full text-center italic lg:inline-block'>
          A happy Payam in the wild ...
        </span>
      </div>
    </div>
  );
}
