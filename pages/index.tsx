import React from 'react';
import { GetStaticPropsResult } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { Grid } from '@chakra-ui/react';

import { Layout } from '@/components/common/index';
import { S } from '@/components/pages/Home/index';
import { usePostsQuery, fetchPosts } from '@/api/index';

export default function Home(): React.ReactElement {
  const posts = usePostsQuery();

  return (
    <Layout
      title={'My Page Title'}
      className="home-index"
      description={'My Page Description'}
    >
      <h1>My Home</h1>

      <Grid>
        {!!posts?.data?.length &&
          posts.data.map(({ title, body, id }) => (
            <S.Post key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </S.Post>
          ))}
      </Grid>
    </Layout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ dehydratedState: DehydratedState }>
> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', fetchPosts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
