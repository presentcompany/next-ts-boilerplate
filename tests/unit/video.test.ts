import { getYoutubeVideoId } from '@/utils/index';

describe('extractYoutubeVideoUrlHash', () => {
  it('should return the undefined when it fails to get the YouTube video ID', () => {
    expect(
      getYoutubeVideoId('https://www.youtube.com/watch?j=Uo3cL4nrGOk')
    ).toEqual(void 0);
  });

  it('should return the Youtube ID when given a Youtube video URL', () => {
    expect(
      getYoutubeVideoId('https://www.youtube.com/watch?v=Uo3cL4nrGOk')
    ).toEqual('Uo3cL4nrGOk');
  });

  expect(
    getYoutubeVideoId(
      'https://www.youtube.com/watch?v=eP4eqhWc7sI&list=RDeP4eqhWc7sI&start_radio=1'
    )
  ).toEqual('eP4eqhWc7sI');
});
