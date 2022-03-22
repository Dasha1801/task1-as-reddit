import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from '../app/app';
import { store } from '../redux';
import SavedArticlesPage from './savedArticlesPage';

describe('Test SavedArticlesPage component', () => {
  it('should render SavedArticlesPage', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <SavedArticlesPage />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText(/no saved articles!/i)).toBeInTheDocument();
    expect(screen.queryByTestId('article')).not.toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    );

    userEvent.click(screen.getByTestId('logoUser'));
    userEvent.click(await screen.findByText(/log In/i));

    userEvent.type(await screen.findByTestId(/email/i), '6227968@gmail.com');
    userEvent.type(await screen.findByTestId(/password/i), '123456');
    userEvent.type(await screen.findByTestId(/name/i), 'Simon');
    userEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/successfully completed/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Close' }));

    userEvent.click(screen.getByTestId('iconSavedItems'));

    const titlePost = await screen.findByText('My review and comparison !');

    expect(titlePost).toBeInTheDocument();
  });
});
