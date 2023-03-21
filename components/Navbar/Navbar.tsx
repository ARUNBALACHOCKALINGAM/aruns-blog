/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import NavItem from './NavItem';
import styles from './Navbar.module.css';

export interface INavbar {}

const MENU_LIST = [
  { text: 'Home', href: '/', icon: '💁' },
  { text: 'About', href: '/about', icon: '📝' },
  { text: 'Work', href: '/work', icon: '👜' },
];

const Navbar: React.FC<INavbar> = () => {
  const scrollToTop = () => {
    const body = document.querySelector('body');
    body ? body.scrollTo(0, 0) : '';
  };

  let index;

  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    console.log(window.location.pathname);
    index =
      window.location.pathname === '/work'
        ? 2
        : window.location.pathname === '/about'
        ? 1
        : 0;
    setActiveIdx(index);
  }, []);

  return (
    <>
      <span className={styles.hamburger}>
        {navActive ? (
          <RxCross1 size={24} onClick={() => setNavActive((prev) => !prev)} />
        ) : (
          <RxHamburgerMenu
            size={24}
            onClick={() => {
              scrollToTop();
              setNavActive((prev) => !prev);
            }}
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
                icon={menu.icon}
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
