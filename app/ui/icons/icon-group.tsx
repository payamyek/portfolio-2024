import { FaGithub, FaMediumM, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';

import IconLink from './icon-link';

export default function IconGroup() {
  return (
    <div className='flex justify-center gap-x-5'>
      <IconLink
        href='https://github.com/payamyek'
        icon={<FaGithub size={35} />}
      />
      <IconLink
        href='https://medium.com/@payamyek'
        icon={<FaMediumM size={35} />}
      />
      <IconLink
        href='https://www.linkedin.com/in/payamyek/'
        icon={<FaLinkedinIn size={35} />}
      />
      <IconLink
        href='https://storage.googleapis.com/simplify-resumes/074f7131-a9ba-4335-9297-4e11bdd0c0aa/e21f8d25-c66a-453b-9f52-45c93b51e5b5/1748400419.pdf?Expires=1749005220&GoogleAccessId=gcs-signing-service-account@mifflin-backend.iam.gserviceaccount.com&Signature=WnSqYNG/ej%2Bixa72bIvsDwEf52oY2BWRO7a5J1NZ3Z9VXmASPeC8Pe2tKq7HLibdW5hwVn9fTZYQCcBLsDnLmq4v%2B9J7ngM%2BvtVpuIvr0Q6SLTuRHVu4hIydehMGgbIfWJO6cYdAMdFVA2g92T1JdyGO31FZRpRsLxRqsl0ljUv7deaOIJQADaDETOa7n%2BqdacJgcyQluTRSeFEqlCGmHgLxkwLZ%2BejJN/WOzFgxtawr2ERT8x3gBRVoymsvw3ye2%2B1oJDsNmLUA%2Bpn2lqoQdXPT%2BvMWU/mDH12YD/SveO2VG%2BqTAfWlKD%2BXmfkMCt%2BF6bq6GycNwXHs2xl6Ba2brQ%3D%3D'
        icon={<FaFilePdf size={35} />}
      />
    </div>
  );
}
