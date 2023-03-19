import styles from './Goals.module.css';

export default function Goals() {
  return (
    <div className={styles.container}>
      <div className={styles.pageBody}>
        <h1 className={styles.heading}>My Values</h1>
        <div className={styles.content}>
          <h2>🙏 Stay Humble</h2>
          <p>
            It's important to stay grounded, no matter how successful or
            talented we become. Staying humble means acknowledging that there is
            always room for improvement, and always being open to feedback and
            constructive criticism. I think it's essential to treat everyone
            with respect and kindness, no matter their background or position in
            life.
          </p>
          <h2>😍 Be Passionate</h2>
          <p>
            I believe that when we are passionate about something, we are more
            likely to put in the hard work and effort needed to achieve our
            goals. Passion drives us to be creative, innovative, and dedicated
            to our craft. Pursuing our passions can also bring a sense of
            fulfillment and purpose to our lives
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
