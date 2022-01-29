import { rest } from 'msw';

export const handlers = [
  rest.get('https://www.reddit.com/r/javascript.json', (req, res, ctx) => res(ctx.json({

    data: {
      children: [{
        data: {
          title: 'My website freezes after ...?',
          id: 'xg98gg',
          selftext: 'What trying to do:I work for a TV station as a broadcast Technician.What try',
          url: 'https://www.reddit.com/r/javascript/comments/',
          score: 55,
          num_comments: 3,
        },
      },
      {
        data: {
          title: 'Freezes after ...?',
          id: 'xg98jg',
          selftext: '',
          url: 'https://www.reddit.com/r/javascript/comments/',
          score: 5,
          num_comments: 31,
        },
      }],
    }
  }))),

  rest.get('https://www.reddit.com/r/javascript/comments/xg98gg.json', (req, res, ctx) => res(ctx.json([
    [],
    {
      data: {
        children: [{
          data: {
            author: 'simon',
            body: 'It will load the image only at the point when you assign an src to it, browsers do that.',
            id: 'xf458l5',
            score: 18,
            created_utc: 1643379472,
            replies: '',
          }
        }]
      }
    }
  ])))
];

