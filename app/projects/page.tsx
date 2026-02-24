import type { Metadata } from 'next';

import { CodeBlock } from '@/components/ui/code-block';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Projects | Payam's Portfolio",
  description:
    'Side projects by Payam Yektamaram including a UCI chess engine, life expectancy predictor, and Wordle clone.',
};
import {
  SiPython,
  SiPytest,
  SiPydantic,
  SiFastapi,
  SiPostgresql,
  SiSqlalchemy,
  SiDocker,
  SiPoetry,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiVercel,
  SiTailwindcss,
  SiDaisyui,
} from 'react-icons/si';

const Rook = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>
          Rook (Chess Engine) -{' '}
          <a
            href='https://github.com/payamyek/rook'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Project
          </a>{' '}
        </h2>
        <p>
          Rook is a{' '}
          <a
            href='https://en.wikipedia.org/wiki/Universal_Chess_Interface'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            UCI
          </a>{' '}
          compatible chess engine that is under continuous development written
          in Python. Extensive research has been done to base the design around
          the best chess engines in the world like{' '}
          <a
            href='https://stockfishchess.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Stockfish
          </a>
          .
        </p>
        <p>
          For example, Rook uses{' '}
          <a
            href='https://rustic-chess.org/board_representation/bitboards.html'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            bitboards
          </a>{' '}
          to track the chess pieces. These are 64-bit unsigned integers that
          tell you the location of each individual piece when combined with some
          neat tricks!
        </p>
        <div className='mockup-code w-full'>
          <pre data-prefix='$'>
            <code>uv run ./rook/main.py</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-warning'
          >
            <code>Hello from rook!</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>8 | ♜ | ♞ | ♝ | ♛ | ♚ | ♝ | ♞ | ♜ |</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>7 | ♟ | ♟ | ♟ | ♟ | ♟ | ♟ | ♟ | ♟ |</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>
              6 |{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}
              |
            </code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>
              5 |{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}
              |
            </code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>
              4 |{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}
              |
            </code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>
              3 |{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}|{'   '}
              |
            </code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>2 | ♙ | ♙ | ♙ | ♙ | ♙ | ♙ | ♙ | ♙ |</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>1 | ♖ | ♘ | ♗ | ♕ | ♔ | ♗ | ♘ | ♖ |</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>{'  '}--------------------------------</code>
          </pre>
          <pre
            data-prefix='>'
            className='text-success'
          >
            <code>
              {'    '}A{'   '}B{'   '}C{'   '}D{'   '}E{'   '}F{'   '}G{'   '}H
            </code>
          </pre>
        </div>
        <div className='mt-4 flex flex-wrap gap-4 text-3xl'>
          <div className='badge badge-info'>
            <SiPython />
            Python
          </div>
          <div className='badge badge-info'>
            <SiPytest />
            Pytest
          </div>
        </div>
      </div>
    </div>
  );
};

const Oracle = () => {
  const code = `{
  "date_of_birth": "2000-04-18",
  "components": [
    {
      "type": "LIFE_TABLE",
      "adjustment": 80.41
    },
    {
      "type": "SMOKING",
      "adjustment": -0.3569482496194825
    }
  ],
  "age": 25,
  "life_expectancy": 80.05305175038052,
  "date_of_death": "2080-04-17",
  "milliseconds_till_death": 1732143131211
}`;

  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>
          Oracle (Life Expectancy Predictor) -{' '}
          <a
            href='https://github.com/payamyek/oracle'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Project
          </a>{' '}
        </h2>
        <p>
          Oracle uses personal attributes such as age and gender, along with
          cutting-edge research and scientific methods, to predict a
          person&apos;s life expectancy.
        </p>
        <CodeBlock
          language='json'
          filename='response.json'
          code={code}
        />
        <div className='mt-4 flex flex-wrap gap-4 text-3xl'>
          <div className='badge badge-info'>
            <SiPython />
            Python
          </div>
          <div className='badge badge-info'>
            <SiPydantic />
            Pydantic
          </div>
          <div className='badge badge-info'>
            <SiFastapi />
            FastAPI
          </div>
          <div className='badge badge-info'>
            <SiPostgresql />
            Postgres
          </div>
          <div className='badge badge-info'>
            <SiSqlalchemy />
            SQLAlchemy
          </div>
          <div className='badge badge-info'>
            <SiDocker />
            Docker
          </div>
          <div className='badge badge-info'>
            <SiPoetry />
            Poetry
          </div>
        </div>
      </div>
    </div>
  );
};

const Wordle = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>
          Wordle -{' '}
          <a
            href='https://github.com/payamyek/wordle'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Project
          </a>{' '}
        </h2>
        <p>
          A straight-to-the-point no funny business implementation of Wordle.
        </p>
        <div className='mockup-phone border-primary mt-2 w-fit'>
          <div className='mockup-phone-display'>
            <Image
              alt='Wordle game screenshot'
              src='/wordle.png'
              width={320}
              height={568}
            />
          </div>
        </div>
        <div className='mt-4 flex flex-wrap gap-4 text-3xl'>
          <div className='badge badge-info'>
            <SiReact />
            React
          </div>
          <div className='badge badge-info'>
            <SiJavascript />
            JavaScript
          </div>
          <div className='badge badge-info'>
            <SiTypescript />
            TypeScript
          </div>
          <div className='badge badge-info'>
            <SiTailwindcss />
            Tailwind CSS
          </div>
          <div className='badge badge-info'>
            <SiDaisyui />
            DaisyUI
          </div>
          <div className='badge badge-info'>
            <SiVercel />
            Vercel
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Rook />
      <Oracle />
      <Wordle />
    </div>
  );
}
