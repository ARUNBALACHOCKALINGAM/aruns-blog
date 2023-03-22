import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Home from '.';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import styles from '../styles/Home.module.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1200);

  return (
    <ThemeProvider>
      <div className={styles.main}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Home />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
