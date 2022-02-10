import React from 'react';
import { Container } from '@chakra-ui/react';
import { LayoutHead } from './LayoutHead';
import { Header } from './Header';
import { Footer } from './Footer';

import type { ContainerProps } from '@chakra-ui/react';
import type { LayoutHeadProps } from './LayoutHead';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
} & LayoutHeadProps &
  ContainerProps;

export function Layout({
  title,
  description,
  canonical,
  additionalMetaTags = [],
  children,
  ...props
}: LayoutProps): React.ReactElement {
  return (
    <>
      <LayoutHead
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={additionalMetaTags}
      />

      <Header />

      <main id="main">
        <Container
          display="flex"
          flexDir="column"
          __css={{
            paddingRight: '1em',
            paddingLeft: '1em'
          }}
          {...props}
        >
          {children}
        </Container>
      </main>

      <Footer />
    </>
  );
}
