import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { server } from '../../mocks/server';
import { store } from '../redux';
import { baseUrl } from '../../constants/index';
import App from './app';

describe('App component', () => {
  it('should render App', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByTestId('app')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render img error', async () => {
    server.use(
      rest.post(`${baseUrl}posts`, (req, res, ctx) =>
        res.once(ctx.status(500), ctx.json({ message: 'Internal server error' }))
      )
    );

    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    );

    const imageError = await screen.findByAltText('error404');

    expect(imageError).toBeInTheDocument();
  });
});
