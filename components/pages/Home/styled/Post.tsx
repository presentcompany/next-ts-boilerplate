import styled from '@emotion/styled';
import { GridItem } from '@chakra-ui/react';
import type { AppTheme } from '@/theme/index';

const Post = styled(GridItem)(({ theme }) => {
  return {
    border: `1px solid ${(theme as AppTheme)?.colors?.black}`,
    marginBottom: '1em'
  };
});

export default Post;
