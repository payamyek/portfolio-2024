'use client';

import { useEffect, useRef, useState } from 'react';

const PHRASES = [
  'Software Engineer @ StackAdapt',
  'Chess Engine Builder',
  'Amateur Sailor',
  'Avid Reader',
  'UofT Alumnus',
];

const TYPING_MS = 65;
const DELETING_MS = 35;
const PAUSE_MS = 2000;

// Cycles through all phrases once, then stops back on the first one
const STOP_AFTER = PHRASES.length + 1;

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const completedRef = useRef(0);

  useEffect(() => {
    if (isDone) return;

    const phrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      if (charIndex < phrase.length) {
        timeout.current = setTimeout(
          () => setCharIndex((i) => i + 1),
          TYPING_MS,
        );
      } else {
        completedRef.current += 1;
        if (completedRef.current >= STOP_AFTER) {
          // Typed the final phrase fully — stop here, no more deleting
          timeout.current = setTimeout(() => setIsDone(true), 0);
        } else {
          timeout.current = setTimeout(() => setIsDeleting(true), PAUSE_MS);
        }
      }
    } else {
      if (charIndex > 0) {
        timeout.current = setTimeout(
          () => setCharIndex((i) => i - 1),
          DELETING_MS,
        );
      } else {
        timeout.current = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }, 0);
      }
    }

    return () => clearTimeout(timeout.current);
  }, [phraseIndex, charIndex, isDeleting, isDone]);

  return (
    <p className='text-lg md:text-2xl'>
      {PHRASES[phraseIndex].slice(0, charIndex)}
      {!isDone && <span className='ml-0.5 animate-pulse opacity-70'>|</span>}
    </p>
  );
}
