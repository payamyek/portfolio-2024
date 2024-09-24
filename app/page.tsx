import Experiences from './ui/experiences';
import Overview from './ui/overview';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Overview />
      <Experiences />
    </div>
  );
}
