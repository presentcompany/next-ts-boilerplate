import React from 'react';
import { AnchorLink } from './AnchorLink';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';

import { Newsletter } from './Newsletter';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Flex p="4">
        <Newsletter />
      </Flex>

      <Flex p="4">
        <Box p="2">
          <Text size="xs">{`© Copyright ${currentYear} ${process.env.NEXT_PUBLIC_APP_NAME} All rights reserved`}</Text>
        </Box>

        <Spacer />

        <Box>
          <AnchorLink href="/terms" mr="4">
            Terms of use
          </AnchorLink>
          <AnchorLink href="/privacy-policy">Privacy Policy</AnchorLink>
        </Box>
      </Flex>
    </footer>
  );
}
