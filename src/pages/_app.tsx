import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import '../styles/globals.css';
// import type { AppProps } from 'next/app';

import type { AppPropsWithLayout } from '@/lib/next/types';

const cache = createCache({ key: 'next' });

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>,
  );
};

export default MyApp;
