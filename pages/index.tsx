import React from 'react';
import { Layout } from '@/components/common/index';
import { usePostsQuery } from '@/api/index';
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
