import styled from '@emotion/styled';
import { GridItem } from '@chakra-ui/react';
import type { AppTheme } from '@/theme/index';

type TPostProps = {
  theme?: AppTheme;
};

export const Post = styled(GridItem)(({ theme }: TPostProps) => {
  return {
    border: `1px solid ${theme?.colors?.brand['500']}`,
    padding: theme?.space?.['4'],
    marginBottom: theme?.space?.['4'],
    width: '100%'
  };
});
