import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import IconSaveItems from './iconSaveItems';
import App from '../app/app';

describe('Test IconSaveItems component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <IconSaveItems />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByTestId('iconSavedItems')).toBeInTheDocument();
    expect(screen.queryByTestId('countItem')).not.toBeInTheDocument();
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
    userEvent.click(screen.getByText(/log In/i));

    userEvent.type(await screen.findByTestId(/email/i), '6227968@gmail.com');
    userEvent.type(await screen.findByTestId(/password/i), '123456');
    userEvent.type(await screen.findByTestId(/name/i), 'Simon');
    userEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/successfully completed/i)).toBeInTheDocument();

    const countArticles = await screen.findByTestId('countItem');

    expect(countArticles).toHaveTextContent('2');
  });
});
