import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaMediumM, FaFilePdf } from 'react-icons/fa';

import IconLink from './ui/icon-link';

export default function Home() {
  return (
    <div className='flex flex-wrap-reverse justify-center gap-5 md:flex-nowrap md:gap-16'>
      <div className='flex flex-col justify-center gap-y-4 md:gap-y-16'>
        <div className='flex justify-center gap-x-2 gap-y-5 md:flex-col'>
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
          <div className='flex justify-center gap-x-5'>
            <IconLink
              href='https://github.com/payamyek'
              icon={<FaGithub size={35} />}
            />
            <IconLink
              href='https://medium.com/@thelostobserver'
              icon={<FaMediumM size={35} />}
            />
            <IconLink
              href='https://www.linkedin.com/in/payamyek/'
              icon={<FaLinkedinIn size={35} />}
            />
            <IconLink
              href='https://cdn.jsdelivr.net/gh/payamyek/career@main/resume/resume.pdf'
              icon={<FaFilePdf size={35} />}
            />
          </div>
        </div>
      </div>
      <div className='flex-col gap-y-2'>
        <div className='object-fit relative flex h-96 w-72 md:h-[30rem] md:w-[22rem]'>
          <Image
            src='/payam.jpg'
            fill
            priority
            alt='A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.'
            className='rounded-xl shadow-lg shadow-teal-600/30 duration-200 ease-linear hover:scale-105'
          />
        </div>
        <span className='text-md hidden text-center italic md:inline-block'>
          A happy Payam in the wild ...
        </span>
      </div>
    </div>
  );
}
