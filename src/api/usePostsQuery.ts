import { Request } from '@/api/request';
import { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import { endpoints } from './endpoints';

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export function fetchPosts(params: AxiosRequestConfig = {}) {
  return Request.get<Post[], Error>(endpoints.POSTS, params);
}

export function usePostsQuery(searchQuery = '') {
  const requestConfig = {
    params: {
      ...(!!searchQuery && { title: searchQuery })
    }
  };

  return useQuery<Post[], Error>(
    ['posts', searchQuery],
    fetchPosts(requestConfig)
  );
}
