import React from 'react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { GlobalStyles } from '@/components/common/index';
import * as gtag from '@/utils/analytics';

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

const Noop: React.FC = ({ children }) => <>{children}</>;

function App({ Component, pageProps }: AppProps): React.ReactNode {
  const TWENTY_FOUR_HOURS_MS = 86400000;

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

  // eslint-disable-next-line
  const LayoutNoop = (Component as any).LayoutNoop || Noop;
  // remove chrome-bug.css loading class on FCP
  React.useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  const router = useRouter();

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
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <GlobalStyles />
          <CSSReset />
          <ReactQueryDevtools />

          <LayoutNoop pageProps={pageProps}>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </LayoutNoop>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default App;
