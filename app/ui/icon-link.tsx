import Link from 'next/link';

interface Props {
  link: string;
  icon: JSX.Element;
}

export default function IconLink(props: Readonly<Props>): JSX.Element {
  return (
    <Link
      href={props.link}
      rel='noopener noreferrer'
      target='_blank'
      className='hover:border-c duration-200 ease-in hover:scale-110'
    >
      {props.icon}
    </Link>
  );
}
