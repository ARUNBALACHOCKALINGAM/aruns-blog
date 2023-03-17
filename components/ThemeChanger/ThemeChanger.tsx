import { useTheme } from 'next-themes';
import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './ThemeChanger.module.css';
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [themeState, setthemeState] = useState('light');

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          setthemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
          setTheme(themeState === 'light' ? 'light' : 'dark');
        }}
      >
        {themeState === 'light' ? (
          <MdOutlineLightMode />
        ) : (
          <MdOutlineDarkMode />
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;
