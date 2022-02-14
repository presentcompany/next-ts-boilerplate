import { Box } from '@chakra-ui/react';
import { AnchorLink } from '@/components/common';

export function IconFacebook() {
  return (
    <Box
      w={{ base: '18px', md: '34px' }}
      color={'white'}
      _hover={{ color: '#01C6CE' }}
    >
      <AnchorLink href={'https://www.facebook.com/perionph'} isExternal>
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H12.25C12.1174 18 11.9902 17.9473 11.8964 17.8536C11.8027 17.7598 11.75 17.6326 11.75 17.5V11.5H14.09C14.2053 11.5 14.317 11.4602 14.4063 11.3873C14.4956 11.3144 14.5569 11.2129 14.58 11.1L14.94 9.3C14.9466 9.26344 14.9455 9.22592 14.9369 9.18979C14.9283 9.15365 14.9123 9.11968 14.89 9.09C14.8408 9.03646 14.7726 9.00418 14.7 9H11.75V5.75C11.75 5.6837 11.7763 5.62011 11.8232 5.57322C11.8701 5.52634 11.9337 5.5 12 5.5H14.5C14.6326 5.5 14.7598 5.44732 14.8536 5.35355C14.9473 5.25979 15 5.13261 15 5V3.5C15 3.36739 14.9473 3.24021 14.8536 3.14645C14.7598 3.05268 14.6326 3 14.5 3H12C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V9H7.77C7.63739 9 7.51021 9.05268 7.41645 9.14645C7.32268 9.24021 7.27 9.36739 7.27 9.5V11C7.27 11.1326 7.32268 11.2598 7.41645 11.3536C7.51021 11.4473 7.63739 11.5 7.77 11.5H9V17.5C9 17.6326 8.94732 17.7598 8.85355 17.8536C8.75979 17.9473 8.63261 18 8.5 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2Z"
            fill="currentColor"
          />
        </svg>
      </AnchorLink>
    </Box>
  );
}
