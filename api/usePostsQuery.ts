import { useRequest } from '@/hooks/index';
import { useQuery } from 'react-query';
import { endpoints } from './endpoints';

type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export function usePostsQuery() {
  return useQuery<Posts[], Error>(
    'posts',
    useRequest<Posts[], Error>(endpoints.POSTS)
  );
}
