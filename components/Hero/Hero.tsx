import styles from '../Hero/Hero.module.css';

type Props = {};

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        {' '}
        <h1>A little bit about myself</h1>
        <div className={styles.textone}>
          <p>
            My name is Arun Bala and I’m a passionate developer 🔥 who loves to
            improve the lives of others through technology 💻 . I’m a seeker and
            a quick learner. I love to explore and learn from other people’s
            work. People who are innovative and creative inspire me.
          </p>
        </div>
        <div className={styles.texttwo}>
          <p>
            I’m a self-taught full-stack developer and have learned various
            tools and techniques through Youtube videos, and online courses, and
            applied this to my personal projects and my work. I enjoy developing
            products with the end user in mind. The process of developing
            products to solve the end-users problem motivates me.
          </p>
        </div>
      </div>
      <div className={styles.imageContent}>
        <img className={styles.myImage} src="/about.jpg" alt="Myface" />
      </div>
    </div>
  );
}
