import { FaGithub, FaMediumM, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';

import IconLink from './icon-link';

export default function IconGroup() {
  return (
    <div className='flex justify-center gap-x-5'>
      <IconLink
        href='https://github.com/payamyek'
        ariaLabel='GitHub profile'
        icon={<FaGithub size={35} />}
      />
      <IconLink
        href='https://medium.com/@payamyek'
        ariaLabel='Medium blog'
        icon={<FaMediumM size={35} />}
      />
      <IconLink
        href='https://www.linkedin.com/in/payamyek/'
        ariaLabel='LinkedIn profile'
        icon={<FaLinkedinIn size={35} />}
      />
      <IconLink
        href='https://cdn.jsdelivr.net/gh/payamyek/career@main/resume/simplify_jobs_resume.pdf'
        ariaLabel='Download resume PDF'
        icon={<FaFilePdf size={35} />}
      />
    </div>
  );
}
