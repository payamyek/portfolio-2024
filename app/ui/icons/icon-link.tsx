import type { JSX } from 'react';

import Link from 'next/link';

interface IconLinkProps {
  href: string;
  icon: JSX.Element;
  ariaLabel: string;
}

export default function IconLink(props: Readonly<IconLinkProps>): JSX.Element {
  return (
    <Link
      href={props.href}
      rel='noopener noreferrer'
      target='_blank'
      aria-label={props.ariaLabel}
      className='hover:border-c cursor-pointer duration-200 ease-in hover:scale-110'
    >
      {props.icon}
    </Link>
  );
}
