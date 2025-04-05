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

export default AnimatedLetters;
