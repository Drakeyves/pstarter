import app from '@/lib/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import type { AppPropsWithLayout } from 'types';
import mixpanel from 'mixpanel-browser';

import '@boxyhq/react-ui/dist/react-ui.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import env from '@/lib/env';
import { applyTheme } from '@/lib/theme';
import { Themer } from '@boxyhq/react-ui/shared';
import { AccountLayout } from '@/components/layouts';
import { ThemeProvider } from '@/components/shared';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { session, ...props } = pageProps;

  // Add mixpanel
  useEffect(() => {
    if (env.mixpanel.token) {
      mixpanel.init(env.mixpanel.token, {
        debug: true,
        ignore_dnt: true,
        track_pageview: true,
      });
    }

    // Always apply dark theme with propulsion-society
    applyTheme('dark');
  }, []);

  const getLayout =
    Component.getLayout || ((page) => <AccountLayout>{page}</AccountLayout>);

  return (
    <>
      <Head>
        <title>{app.name}</title>
        <link rel="icon" href="https://boxyhq.com/img/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Toaster 
          toastOptions={{ 
            duration: 4000,
            style: {
              background: '#141421',
              color: '#C5C5D3',
              border: '1px solid #71718A',
            },
          }} 
        />
        <ThemeProvider>
          <Themer
            overrideTheme={{
              '--primary-color': '#7A6FE3',
              '--primary-hover': '#9F7AEA',
              '--primary-color-50': '#EBE9FB',
              '--primary-color-100': '#D7D3F6',
              '--primary-color-200': '#B0A7EE',
              '--primary-color-300': '#897BE5',
              '--primary-color-500': '#7A6FE3',
              '--primary-color-600': '#553C9A',
              '--primary-color-700': '#4A3582',
              '--primary-color-800': '#3F2D6A',
              '--primary-color-900': '#342552',
              '--primary-color-950': '#1D1530',
            }}
          >
            {getLayout(<Component {...props} />)}
          </Themer>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation<never>(MyApp);
