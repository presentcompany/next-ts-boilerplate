import styled from '@emotion/styled';
import { GridItem } from '@chakra-ui/react';

const Post = styled(GridItem)(({ theme }) => {
  return {
    border: `1px solid ${theme.colors.brand['500']}`,
    marginBottom: '1em'
  };
});

export default Post;
