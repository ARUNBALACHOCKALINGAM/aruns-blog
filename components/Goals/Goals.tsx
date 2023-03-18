import styles from './Goals.module.css';

export default function Goals() {
  return (
    <div className={styles.container}>
      <div className={styles.pageBody}>
        <h1 className={styles.heading}>My Values</h1>
        <div className={styles.content}>
          <h2>🙏 Stay Humble</h2>
          <p>
            It doesn't matter whether you're the president, manager, homeless or
            average kid on the street. Treat others with respect as you would
            yourself because ultimately we're all human sharing the same wants
            and needs and facing our own battles everyday. Stay true to yourself
            and stay true to others.
          </p>
          <h2>😍 Be Passionate</h2>
          <p>
            If you don't enjoy what you're doing - move. You are not a tree.
            Channel your energy into something you believe in. I'm fortunate to
            be inspired and surrounded by motivated people who enjoy what they
            do. We only have so much time on this earth to live - so why waste
            it?
          </p>
          <h2>🤓 Always be learning</h2>
          <p>
            Humans are constant works in progress that need to receive feedback
            in order to grow. I am always looking at ways to challenge and
            improve myself, which is why in my spare time I like to participate
            in hackathons, read blogs, dabble in new projects and attend
            meetups.
          </p>
          <h2>➕ Stay Positive</h2>
          <p>
            I believe being positive at the time of distress is the strongest of
            all strength. Try not to let things bring you down. As the saying
            goes if life gives you lemonade make lemons... and life will be like
            whaaa?
          </p>
        </div>
      </div>
    </div>
  );
}
