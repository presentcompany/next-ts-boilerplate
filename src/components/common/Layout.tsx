import React from 'react';
import { Container } from '@chakra-ui/react';
import { LayoutHead } from './LayoutHead';
import { Header } from './Header';
import { Footer } from './Footer';

import type { ContainerProps } from '@chakra-ui/react';
import type { TLayoutHeadProps } from './LayoutHead';

type TLayoutProps = {
  children: JSX.Element | JSX.Element[];
} & TLayoutHeadProps &
  ContainerProps;

export function Layout({
  title,
  description,
  canonical,
  additionalMetaTags = [],
  children,
  ...props
}: TLayoutProps): React.ReactElement {
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
        <Container maxW="container.xl" {...props}>
          {children}
        </Container>
      </main>

      <Footer />
    </>
  );
}
