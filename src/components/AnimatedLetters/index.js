import styles from './AnimatedLetters.module.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${styles[letterClass]} ${styles[`_${i + idx}`]}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

import { useEffect, useState } from 'react';

useEffect(() => {
  const timeout = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  return () => clearTimeout(timeout); // ✅ prevents reload/loop
}, []);

export default AnimatedLetters;
