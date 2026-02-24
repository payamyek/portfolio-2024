import { FaFilePdf, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

import CarbonBadge from './carbon-badge';
import IconLink from './icons/icon-link';
import TorontoClock from './toronto-clock';
import VisitorCount from './visitor-count';

// Update this when you ship notable changes
const LAST_UPDATED = 'February 2026';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-base-content/10 mt-8 border-t px-4 py-8'>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex gap-5 text-xl'>
          <IconLink
            href='https://github.com/payamyek'
            ariaLabel='GitHub profile'
            icon={<FaGithub />}
          />
          <IconLink
            href='https://www.linkedin.com/in/payamyek/'
            ariaLabel='LinkedIn profile'
            icon={<FaLinkedinIn />}
          />
          <IconLink
            href='https://medium.com/@payamyek'
            ariaLabel='Medium blog'
            icon={<FaMediumM />}
          />
          <IconLink
            href='https://cdn.jsdelivr.net/gh/payamyek/career@main/resume/simplify_jobs_resume.pdf'
            ariaLabel='Download resume PDF'
            icon={<FaFilePdf />}
          />
        </div>
        <div className='flex items-center gap-4'>
          <TorontoClock />
          <VisitorCount />
        </div>
        <p className='text-xs opacity-40'>
          © {year} Payam Yektamaram · Last updated {LAST_UPDATED}
        </p>
        <CarbonBadge />
      </div>
    </footer>
  );
}
