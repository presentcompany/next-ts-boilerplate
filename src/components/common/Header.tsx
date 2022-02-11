import React from 'react';
import { Flex, Box, Text, Spacer, Button } from '@chakra-ui/react';

export function Header() {
  return (
    <header>
      <Flex p="4">
        <Box p="2">
          <Text size="xs">{process.env.NEXT_PUBLIC_APP_NAME}</Text>
        </Box>

        <Spacer />

        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>

          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>
    </header>
  );
}
