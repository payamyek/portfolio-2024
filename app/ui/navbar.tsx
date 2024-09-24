import IconGroup from './icons/icon-group';

interface NavbarProps {
  title: string;
  progress: number /* number between 1-100 */;
}

const deriveFlexBasisClassName = (progress: number) => {
  const basis = Math.round(progress / (100 / 12));

  if (basis === 0) return '';
  else if (basis === 12) return 'basis-full';
  else return `basis-${basis}/12`;
};

export default function Navbar(props: Readonly<NavbarProps>): JSX.Element {
  if (!props.progress) return <></>;

  return (
    <div className='sticky top-0 flex flex-col bg-base-100'>
      <div className='flex justify-between p-4 text-2xl'>
        <span>{props.title}</span>
        <IconGroup />
      </div>
      <div className='flex basis-2 border border-white'>
        <div
          className={`${deriveFlexBasisClassName(props.progress)} bg-white`}
        ></div>
      </div>
    </div>
  );
}
