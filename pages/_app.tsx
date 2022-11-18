import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <ThemeProvider >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
