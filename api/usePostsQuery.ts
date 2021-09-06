import { useRequest } from '@/hooks/index';
import { useQuery } from 'react-query';
import { endpoints } from './endpoints';

export function usePostsQuery() {
  return useQuery('posts', useRequest(endpoints.POSTS));
}
