export function getYoutubeVideoId(url: string) {
  const videoHashQueryParamKey = 'v';
  const searchParams = new URL(url).search;
  return new URLSearchParams(searchParams).getAll(videoHashQueryParamKey)?.[0];
}
