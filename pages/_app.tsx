import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AccountProvider } from '../contexts/AccountContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <ThemeProvider>
        <AccountProvider>
          <Component {...pageProps} />
        </AccountProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
