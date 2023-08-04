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
          🥰 This internship holds a special place in my heart, as it instilled
          within me the belief that genuine and sincere efforts are always
          rewarded. I am grateful to{' '}
          <mark className={styles.highlight}>
            <em> Jagmeet</em>
          </mark>{' '}
          for taking the initiative to offer this opportunity, which allowed me
          to gain invaluable experience and make meaningful connections with
          good people. Additionally, I extend my thanks to my fellow intern,{' '}
          <mark className={styles.highlight}> Khayti heda </mark>, for joining
          me on this journey and providing support along the way.
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
            ✨ Yellow marks the outset of my career as a software developer, an
            experience that has fostered my passion for the development process,
            problem-solving, and receiving recognition for my skills. The
            opportunity to gain practical knowledge through an internship,
            including working on production-level code within a week, has been
            invaluable to my growth. I am deeply appreciative of my colleagues
            for their guidance and mentorship, which have contributed
            significantly to my knowledge acquisition. I look forward to
            continuing this journey and achieving even greater heights.
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
