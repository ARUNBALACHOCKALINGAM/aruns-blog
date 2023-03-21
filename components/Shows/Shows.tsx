import styles from '../Shows/Shows.module.css';

const shows = [
  '/friends.jpg',
  '/himym.svg',
  '/fleabag.svg',
  '/rickandmorty.svg',
  '/se.svg',
  'theoffice.svg',
  '/you.svg',
  '/bojack-horseman.jpg',
  '/modernfamily.jpg',
  '/bigbangtheory.jpg',
];

export default function Shows() {
  return (
    <div className={styles.container}>
      <div className={styles.pageBody}>
        <div className={styles.heading}>
          <h2>Some tv shows I like</h2>
        </div>
        <div className={styles.shows}>
          {shows.map((show) => {
            console.log(show);
            return <img key={show} src={show} alt="show" />;
          })}
        </div>
      </div>
    </div>
  );
}
