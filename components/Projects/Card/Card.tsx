import styles from '../Card/Card.module.css';

type Props = {};

const Projects = [
  {
    title: 'WEATHER APPLICATION',
    desc: 'A application developed using Next.js framework. It uses the weather API to fetch current weather data and also forecast and history data',
    image: '/sun.svg',
    codeLink: 'https://github.com/ARUNBALACHOCKALINGAM/weather-app',
    liveLink: 'https://weather-app-phi-flax.vercel.app/',
  },
  {
    title: 'Portfolio - React',
    desc: 'This is my portfolio website which showcases all my projects and skills. Built using react, focused on CSS animations and React animation using FrameR library',
    image: '/12.svg',
    codeLink: 'https://github.com/ARUNBALACHOCKALINGAM/portfolio',
    liveLink: 'https://arunbalachockalingam.github.io/portfolio/',
  },
  {
    title: 'SOUL- Mental health app',
    desc: 'Powered by GPT-3 this app acts as a friend who helps you through your tough times',
    image: '/hand.svg',
    codeLink: '',
    liveLink: '',
  },
];

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.projectHead}>
        <p>MY RECENT WORK</p>
      </div>
      <div className={styles.grid}>
        {Projects.map((project) => {
          return (
            <div key={project.title} className={styles.card}>
              <div className={styles.imageContent}>
                <img src={project.image} alt="Weather" />
              </div>
              <div className={styles.content}>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
                <div
                  className={
                    project.codeLink ? styles.buttons : styles.buttonsInactive
                  }
                >
                  <button className={styles.code}>CODE</button>
                  <button className={styles.live}>LIVE</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
