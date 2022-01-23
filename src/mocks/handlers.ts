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
          selftext: 'What trying to do:I work for a TV station as a broadcast Technician.What try',
          url: 'https://www.reddit.com/r/javascript/comments/',
          score: 5,
          num_comments: 31,
        },
      }],
    },
    kind: {},
  }))),
];
