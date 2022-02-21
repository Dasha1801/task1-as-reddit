import { ArticleInfo, ICommentInfo, IDataTable, IRulesSubreddit } from './interfaces';

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

export const rules: IRulesSubreddit[] = [
  {
    title: 'Remember the human.',
    description: "Remember the human. It's ok to disagree, but we should attack ideas, not people.",
    id: 'r1',
  },
  {
    title: '/r/JavaScript is not a support forum',
    description: 'Is this a help request? Try /r/LearnJavascript instead!',
    id: 'r2',
  },
  { title: 'Advertising', description: 'Advertising paid products and services is prohibited.', id: 'r3' },
  {
    title: 'Excessive Self-Promotion',
    description: `It's ok to promote your own content, or content that you're 
    otherwise vested in, but it should not
    constitute a majority of your contributions.`,
    id: 'r4',
  },
  { title: 'Java !== Javascript', description: 'Java is not the same as Javascript.', id: 'r5' },
  {
    title: 'Low-effort content (listicles, memes, etc.)',
    description: 'Low-effort content such as listicles, memes, clickbait, etc. is prohibited.',
    id: 'r6',
  },
  {
    title: "Where's the Javascript?",
    description:
      "Demos can be fun, but they really don't provide for much discussion unless code is provided as well.",
    id: 'r7',
  },
];

export const dataTable: IDataTable[] = [
  {
    date: 'February 18',
    organizers: 'Amir Khan vs Kell Brook',
    network: 'Showtime',
    id: 'tr1',
  },
  {
    date: 'February 19',
    organizers: 'Zaur Abdullaev vs Jorge Linares',
    network: 'ESPN+',
    id: 'tr2',
  },
  {
    date: 'February 20',
    organizers: 'Zaur Abdullaev vs Jorge Linares',
    network: 'DAZN',
    id: 'tr3',
  },
  {
    date: 'February 21',
    organizers: 'Amir Khan vs Kell Brook',
    network: 'Sky Sports Box Office (UK), ESPN+ (USA)',
    id: 'tr4',
  },
  {
    date: 'February 22',
    organizers: 'Josh Taylor vs Jack Catterall',
    network: 'Showtime',
    id: 'tr5',
  },
  {
    date: 'February 23',
    organizers: 'Amir Khan vs Kell Brook',
    network: 'Sky Sports Box Office (UK), ESPN+ (USA)',
    id: 'tr6',
  },
  {
    date: 'February 24',
    organizers: 'Josh Taylor vs Jack Catterall',
    network: 'Showtime',
    id: 'tr7',
  },
];
