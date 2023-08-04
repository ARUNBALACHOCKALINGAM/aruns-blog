import styles from '../Shows/Shows.module.css';

const shows = [
  '/friends.jpg',
  '/himym.svg',
  '/fleabag.svg',
  '/rickandmorty.svg',
  'theoffice.svg',
  '/bojack-horseman.jpg',
  '/modernfamily.jpg',
  '/bigbangtheory.jpg',
];

export default function Shows() {
  return (
    <div className={styles.container}>
      <div className={styles.pageBody}>
        <div className={styles.heading}>
          <h2>Some TV shows that I like</h2>
        </div>
        <div className={styles.shows}>
          {shows.map((show) => {
            return <img key={show} src={show} alt="show" />;
          })}
        </div>
      </div>
    </div>
  );
}
