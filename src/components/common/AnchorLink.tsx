import React from 'react';
import { Link } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';

import type { LinkProps } from '@chakra-ui/react';
import type { LinkProps as NextLinkProps } from 'next/link';

type TAnchorLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  NextLinkProps;

export function AnchorLink({
  children,
  href,
  variant = 'textLink',
  isExternal = false,
  ...props
}: TAnchorLinkProps): React.ReactElement {
  return (
    <NextLink href={href}>
      <Link variant={variant} isExternal={isExternal} {...props}>
        {children}
      </Link>
    </NextLink>
  );
}
