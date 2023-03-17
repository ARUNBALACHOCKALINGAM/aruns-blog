/* eslint-disable @next/next/no-img-element */
import styles from './Techstack.module.css';

export interface ITechstack {}

const Techstack: React.FC<ITechstack> = () => {
  return (
    <div className={styles.skills}>
      <p>Tech Stack</p>
      <div className={styles.logo}>
        <ul>
          <li>
            <img src="/html.svg" title="HTML5" alt="program_img" />
          </li>
          <li>
            <img src="/css3svg.svg" title="CSS3" alt="program_img" />
          </li>
          <li>
            <img
              style={{ marginLeft: '4px' }}
              src="/javascript.svg"
              title="Javascript"
              alt="program_img"
            />
          </li>
          <li>
            <img
              style={{ marginLeft: '3px' }}
              src="/react.svg"
              title="React JS"
              alt="program_img"
            />
          </li>
          <li>
            <img src="/nodejs.svg" title="Node.js" alt="program_img" />
          </li>
          <li>
            <img src="/mongodb.svg" title="MongoDB" alt="program_img" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Techstack;
