import styles from './Work.module.css';

type Props = {};

export default function Work() {
  return (
    <article className={styles.container}>
      <div className={styles.pageBody}>
        <p id="495a20c4-0a0a-43a2-bb59-d24feafe37d5" className=""></p>
        <h3 id="3958e749-d22a-44e3-ac17-0dcc7d1ee181" className="">
          <mark className={styles.natwestHead}>
            <strong>NatWest - Full stack developer Intern</strong>
          </mark>
        </h3>
        <p id="04d1931f-92ee-48f3-8100-7fbb5b9430a7" className={styles.natwest}>
          🥰 This internship will always be special to my heart, it gave me hope
          that you will always be rewarded if your efforts are genuine and
          sincere. I genuinely thank
          <mark className={styles.highlight}>
            <em> Jagmeet sir </em>
          </mark>
          for taking this initiative. I learned a lot and met some good people
          on this journey and thanks to my fellow intern
          <mark className={styles.highlight}> Khayti heda </mark>who accompanied
          me on this journey.
        </p>
        <div className={styles.yellowDiv}>
          <p id="dce0ff6d-d9b2-4f79-b041-4bb59e42fe4b"></p>
          <h3
            id="91e0bf5c-4355-4f7f-ab8a-b3cc2fea0287"
            className={`${styles.yellowHead} ${styles.highlight}`}
          >
            <strong>
              <a href="http://Yellow.ai">Yellow.ai</a>
            </strong>
            <strong>- Platform engineer intern</strong>
          </h3>

          <p
            id="3e520a2e-945d-4bbb-90bd-d56c00bab801"
            className={styles.yellow}
          >
            ✨ I would say that yellow marks the beginning of my career as a
            software developer. I have fallen in love with the process of
            development, solving problems, and being valued for doing something
            that I&#x27;m good at. This is such a great feeling. During my
            internship, I gained hands-on learning experience and worked on
            production-level code within a week. I&#x27;m so grateful for this
            opportunity, and I thank all my colleagues here. They mentored me
            and provided me with a lot of knowledge, for which I will always be
            grateful. I hope this journey continues and turns out to be a great
            one.
          </p>
          <p id="134fb851-28cb-4041-ad8f-b5c38324b3e5" className=""></p>
          <p id="6fbebe94-42b8-4998-a5a6-78c3cfa598e5" className=""></p>
          <p id="0474a57b-e973-4ad4-adf5-7fd94a5c64b5" className=""></p>
          <p id="c27b99f4-bcc2-483c-90ae-0a33efef0ba9" className=""></p>
          <p id="505665cd-4980-4ab3-ae58-fd42f8cf81d5" className=""></p>
        </div>
      </div>
    </article>
  );
}
