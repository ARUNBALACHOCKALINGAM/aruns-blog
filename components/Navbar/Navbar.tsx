import { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import NavItem from './NavItem';
import styles from './Navbar.module.css';

export interface INavbar {}

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Work', href: '/contact' },
];

const Navbar: React.FC<INavbar> = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <>
      <span className={styles.hamburger}>
        {navActive ? (
          <RxCross1 size={24} onClick={() => setNavActive((prev) => !prev)} />
        ) : (
          <RxHamburgerMenu
            size={24}
            onClick={() => setNavActive((prev) => !prev)}
          />
        )}
      </span>
      <div className={navActive ? `${styles.navContainer}` : styles.container}>
        {MENU_LIST.map((menu, idx) => {
          return (
            <div
              className={styles.linkContainer}
              onClick={() => {
                setActiveIdx(idx);
              }}
              key={menu.text}
            >
              <NavItem
                name={menu.text}
                link={menu.href}
                active={activeIdx === idx}
              />
            </div>
          );
        })}
        <ThemeChanger />
      </div>
    </>
  );
};

export default Navbar;
