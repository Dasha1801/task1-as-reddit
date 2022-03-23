export const PATH = {
  logo: 'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png',
  error404: 'https://www.pngitem.com/pimgs/m/254-2549847_404-png-download-404-not-found-transparent-png.png',
};
export const baseUrlWs =
  process.env.NODE_ENV === 'development'
    ? `ws://localhost:3001/`
    : `wss://deploy-server-as-reddit.herokuapp.com/`;

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/'
    : 'https://deploy-server-as-reddit.herokuapp.com/';
export const initialCount = 10;
export const GG_APP_ID = '92734998337-la9pa0k2o3kr3da0v6904kc6jp5ac27g.apps.googleusercontent.com';
export const FB_APP_ID = '280040930714284';
export const timeout = 1000;
