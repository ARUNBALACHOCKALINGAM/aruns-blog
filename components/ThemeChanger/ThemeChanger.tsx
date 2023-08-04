import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './ThemeChanger.module.css';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleTheme}>
        {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default ThemeChanger;
