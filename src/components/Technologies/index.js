import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import styles from './Technologies.module.scss';
  
  function TechnologiesContent() {
    return (
      <div className={styles['stage-cube-cont']}>
        <div className={styles.cubespinner}>
          <div className={styles.face1}>
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className={styles.face2}>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className={styles.face3}>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className={styles.face4}>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className={styles.face5}>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className={styles.face6}>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    );
  }
  
  export default TechnologiesContent;
  