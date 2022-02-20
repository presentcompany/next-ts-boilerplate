import React from 'react';
import { Box, Button, Container, Flex, Spacer, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <header>
      <Container maxW="container.xl">
        <Flex py="4">
          <Box py="2">
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
      </Container>
    </header>
  );
}
