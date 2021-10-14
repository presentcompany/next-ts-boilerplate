import { Request } from '@/utils/request';
import { useMutation, useQuery } from 'react-query';
import { endpoints } from './endpoints';

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export function usePostsMutation() {
  return useMutation(Request.post(endpoints.POSTS, { data: {}, headers: {} }));
}

export function fetchPosts() {
  return Request.get<Post[], Error>(endpoints.POSTS);
}

export function usePostsQuery() {
  return useQuery<Post[], Error>('posts', fetchPosts());
}
