import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { GlobalStyles } from '@/components/common/index';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <GlobalStyles />
          <CSSReset />
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp;
