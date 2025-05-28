'use client';

import type { JSX } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar(): JSX.Element {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <div className='navbar bg-base-100 hidden shadow-xs lg:flex'>
      <div className='flex-1'>
        <Link
          href='/'
          className='btn btn-ghost text-xl'
        >
          Payam Y.
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link
              href='/'
              className={pathname == '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/experiences'
              className={pathname == '/experiences' ? 'active' : ''}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className={pathname == '/projects' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-xs lg:hidden'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-circle btn-ghost'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm rounded-box bg-base-100 z-10 mt-3 w-52 p-2 shadow-sm'
          >
            <li>
              <Link href='/experiences'>Experiences</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-end'>
        <Link
          href='/'
          className='btn btn-ghost text-xl'
        >
          Payam Y.
        </Link>
      </div>
    </div>
  );
};
