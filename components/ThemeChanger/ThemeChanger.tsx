import { useTheme } from 'next-themes';
import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './ThemeChanger.module.css';
const ThemeChanger = () => {
  let localtheme;

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localtheme = localStorage.getItem('theme');
  }

  const { theme, setTheme } = useTheme();
  const [themeState, setthemeState] = useState(
    localtheme ? localtheme : 'light'
  );

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          setthemeState((prev) => {
            prev === 'light'
              ? localStorage.setItem('theme', 'dark')
              : localStorage.setItem('theme', 'light');
            return prev === 'light' ? 'dark' : 'light';
          });
          setTheme(themeState === 'light' ? 'dark' : 'light');
        }}
      >
        {themeState === 'light' ? (
          <MdOutlineDarkMode />
        ) : (
          <MdOutlineLightMode />
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;
