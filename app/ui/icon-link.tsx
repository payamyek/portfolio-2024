import Link from 'next/link';

interface Props {
  href: string;
  icon: JSX.Element;
}

export default function IconLink(props: Readonly<Props>): JSX.Element {
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
