import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Header from '../../components/Header/Header';
import styles from '../styles/Home.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={styles.main}>
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
