import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import styles from '../Footer/Footer.module.css';
type Props = {};

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>Let's connect</h2>
      </div>
      <div className={styles.sub}>
        <a href="#" className="text-link">
          <span className="text-span-5">
            Get in touch for opportunities or just to say hi! 👋
          </span>
        </a>
      </div>
      <div className={styles.images}>
        <a
          href="https://www.linkedin.com/in/glorialo94/"
          target="_blank"
          className="link-block-6 w-inline-block"
        >
          <AiFillLinkedin fontSize={32} />
        </a>
        <a
          href="mailto:gloria.lo@live.com.au?subject=Hello!"
          className="link-block-6 w-inline-block"
        >
          <AiFillGithub fontSize={32} />
        </a>
        <a
          href="https://medium.com/@glorialodesign"
          target="_blank"
          className="link-block-6 w-inline-block"
        >
          <AiFillInstagram fontSize={32} />
        </a>
      </div>
    </div>
  );
}
