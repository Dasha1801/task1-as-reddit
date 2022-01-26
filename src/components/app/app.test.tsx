import { render, screen } from '@testing-library/react';
import { server } from 'mocks/server';
import { rest } from 'msw';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import App from './app';

describe('App component', () => {
  it('should render App', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>,
    );
    expect(screen.getByTestId('app')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render img error', async () => {
    server.use(
      rest.get('https://www.reddit.com/r/javascript.json', (req, res, ctx) => res.once(
        ctx.status(500),
        ctx.json({ message: 'Internal server error' }),
      )),
    );

    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>,
    );

    const imageError = await screen.findByAltText('error404');
    expect(imageError).toBeInTheDocument();
  });
});
