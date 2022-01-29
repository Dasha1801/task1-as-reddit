import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from '../app/app';
import PostPage from './postPage';
import { store } from '../redux';

describe('Test PostPage component', () => {
  it('should render PostPage when click on content article', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    );

    await waitForElementToBeRemoved(() => screen.queryByTestId('parentLoader'));

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.queryByTestId('post')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('My website freezes after ...?'));

    expect(screen.queryByTestId('main')).not.toBeInTheDocument();
    expect(screen.getByTestId('post')).toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <PostPage />
        </HashRouter>
      </Provider>
    );

    const comment = await screen.findByText(
      'It will load the image only at the point when you assign an src to it, browsers do that.'
    );

    expect(comment).toBeInTheDocument();
  });
});
