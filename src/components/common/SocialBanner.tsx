import { Flex, Text } from '@chakra-ui/react';

import {
  IconDiscord,
  IconFacebook,
  IconGitbook,
  IconMedium,
  IconTwitter,
  IconYouTube
} from '@/components/common/Icons';

export function SocialBanner() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      background="brand.500"
      width="100vw"
      position="relative"
      left="50%"
      right="50%"
      mx="-50vw"
      minH="240px"
    >
      <Text pb={4} color="white">
        Join Us!
      </Text>

      <Flex gap={6}>
        <IconDiscord />
        <IconFacebook />
        <IconGitbook />
        <IconMedium />
        <IconTwitter />
        <IconYouTube />
      </Flex>
    </Flex>
  );
}
