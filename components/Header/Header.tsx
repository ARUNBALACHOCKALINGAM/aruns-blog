import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <div className={styles.logo}>ARUN BALA</div>
      </a>
      <Navbar />
    </div>
  );
};

export default Header;
