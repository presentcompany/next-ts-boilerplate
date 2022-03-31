import React from 'react';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { GA_TRACKING_ID } from '@/utils/analytics';
import { GlobalStyles } from '@/components/common/index';
import { theme } from '@/theme/index';
import * as gtag from '@/utils/analytics';
import defaultSEO from '../../next-seo.config';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

const Noop: FC = ({ children }) => <>{children}</>;

const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

if (!isServerSideRendered() && process.env.NODE_ENV !== 'production') {
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000);
    });
  });
}

type TNextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};

function App({ Component, pageProps }: TAppPropsWithLayout): React.ReactNode {
  const LayoutNoop = (Component as any).LayoutNoop || Noop;
  const TWENTY_FOUR_HOURS_MS = 86400000;
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            retry: false,
            staleTime: TWENTY_FOUR_HOURS_MS
          }
        }
      })
  );

  // remove chrome-bug.css loading class on FCP
  React.useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script id="gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <DefaultSeo
        {...defaultSEO}
        additionalMetaTags={[
          {
            property: 'viewport',
            content: 'initial-scale=1.0, width=device-width'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          }
        ]}
      />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <GlobalStyles />
            <CSSReset />
            <ReactQueryDevtools />

            <RecoilRoot>
              <LayoutNoop pageProps={pageProps}>
                {getLayout(<Component {...pageProps} />)}
              </LayoutNoop>
            </RecoilRoot>
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
