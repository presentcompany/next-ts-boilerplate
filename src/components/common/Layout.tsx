import React from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

import type { ContainerProps } from '@chakra-ui/react';

interface ILayoutProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({
  children,
  ...props
}: ILayoutProps): React.ReactElement {
  return (
    <>
      <Header />

      <main id="main">
        <Container
          maxW={[
            'container.sm',
            'container.md',
            'container.lg',
            'container.xl'
          ]}
          {...props}
        >
          {children}
        </Container>
      </main>

      <Footer />
    </>
  );
}
