import React from 'react';
import { GetStaticPropsResult } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { Layout } from '@/components/common/index';
import { usePostsQuery, fetchPosts } from '@/api/index';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home(): React.ReactElement {
  const { data } = usePostsQuery();

  return (
    <Layout
      title={'My Page Title'}
      className="home-index"
      description={'My Page Description'}
    >
      <h1>My Home</h1>

      <Grid>
        {!!data?.length &&
          data.map(({ title, body, id }) => (
            <GridItem key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </GridItem>
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
