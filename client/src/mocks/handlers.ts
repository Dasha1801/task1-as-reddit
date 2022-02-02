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
  ]))),

  rest.get('https://www.reddit.com/r/javascript/about/rules.json', (req, res, ctx) => res(ctx.json({
    rules: [
      {
        short_name: "Excessive Self-Promotion",
        description: "It's ok to promote your own content, or content that you're otherwise vested in",
        created_utc: 175
      },
      {
        short_name: "Where's the Javascript?",
        description: "Demos can be fun, but they really don't provide for much",
        created_utc: 176
      },
      {
        short_name: "/r/JavaScript is not a support forum",
        description: "Is this a help request? Try /r/LearnJavascript instead!",
        created_utc: 177
      }
    ]
  })))
];

