import styles from '../Card/Card.module.css';

type Props = {};

const Projects = [
  {
    title: 'WEATHER APPLICATION',
    desc: 'A application developed using Next.js framework. It uses the weather API to fetch current weather data and also forecast and history data',
    image: '/sun.svg',
    codeLink: '',
    liveLink: '',
  },
  {
    title: 'Assignment management system',
    desc: 'This project/application addressed the various problems that was faced in our university',
    image: '/12.svg',
    codeLink: '',
    liveLink: '',
  },
  {
    title: 'SOUL- Mental health app',
    desc: 'Powered by GPT-4 this app acts as a friend who helps you through your tough times',
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
                <div className={styles.buttons}>
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
