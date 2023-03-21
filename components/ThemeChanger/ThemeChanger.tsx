import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './ThemeChanger.module.css';
const ThemeChanger = () => {
  let localtheme;

  useEffect(() => {
    localtheme = localStorage.getItem('theme');
  }, []);

  const { theme, setTheme } = useTheme();
  const [themeState, setthemeState] = useState(
    localtheme ? localtheme : 'light'
  );

  useEffect(() => {
    if (themeState === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [themeState]);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          setthemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
          setTheme(themeState === 'light' ? 'dark' : 'light');
        }}
      >
        {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default ThemeChanger;
