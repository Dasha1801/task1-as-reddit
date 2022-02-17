import { ArticleInfo, ICommentInfo } from './interfaces';

export const item: ArticleInfo = {
  title: 'My website freezes after ...?',
  id: 'xg98gg',
  selftext: 'What trying to do:I work for a TV station as a broadcast Technician.What try',
  url: 'https://www.reddit.com/r/javascript/comments/',
  score: 55,
  num_comments: 3,
};

export const commentMock: ICommentInfo = {
  author: 'simon',
  body: 'It will load the image only at the point when you assign an src to it, browsers do that.',
  id: 'xf458l5',
  score: 18,
  created_utc: 1643379472,
  replies: undefined,
};
