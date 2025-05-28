import type { JSX } from 'react';

import Link from 'next/link';

export default function Navbar(): JSX.Element {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
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
            <Link href='/experiences'>Experiences</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
