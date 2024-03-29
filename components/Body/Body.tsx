import Techstack from '../Techstack/Techstack';
import styles from './Body.module.css';

export interface IBody {}

const Body: React.FC<IBody> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <h1 className={styles.main}>
          Hey, I’m <a className={styles.arun}>Arun Bala</a>
        </h1>
        <br />
        <h1 className={styles.mainSub}>
          AN <span>SDE</span> at{' '}
          <span className={styles.yellow}>NATWEST GROUP</span>
        </h1>
        <div className={styles.para}>
          <p>
            I'm passionate about improving the lives of others through
            technology/design and am constantly looking to learn new things to
            provide scalable and efficient software applications{' '}
          </p>
        </div>
        <Techstack />
      </div>
    </div>
  );
};

export default Body;
