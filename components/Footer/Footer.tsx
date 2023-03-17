import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from '../Footer/Footer.module.css';
type Props = {};

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Let's connect</h1>
      </div>
      <div className={styles.icons}>
        <span>
          <AiFillGithub fontSize={28} />
        </span>
        <span>
          <AiFillLinkedin fontSize={28} />
        </span>
      </div>
    </div>
  );
}
