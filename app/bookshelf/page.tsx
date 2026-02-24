import type { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: "Bookshelf | Payam's Portfolio",
  description: 'Books Payam Yektamaram is currently reading or has read.',
};

const BOOKS = [
  {
    title: 'Agile Web Development with Rails 8',
    src: '/books/rails8.jpg',
    status: 'Currently Reading',
  },
];

const Bookshelf = () => {
  return (
    <div className='flex p-5'>
      {BOOKS.map((it) => (
        <div key={it.title}>
          <Image
            className='mx-auto mb-2'
            src={it.src}
            width={200}
            height={200}
            alt={it.title}
          />
          <u>{it.title}</u>
          <p>{it.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
