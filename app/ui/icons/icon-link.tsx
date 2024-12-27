import Link from 'next/link';

import type { JSX } from 'react';

interface IconLinkProps {
  href: string;
  icon: JSX.Element;
}

export default function IconLink(props: Readonly<IconLinkProps>): JSX.Element {
  return (
    <Link
      href={props.href}
      rel='noopener noreferrer'
      target='_blank'
      className='hover:border-c cursor-pointer duration-200 ease-in hover:scale-110'
    >
      {props.icon}
    </Link>
  );
}
