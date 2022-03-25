import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import IconUser from './iconUser';

describe('Test IconUser Component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <IconUser />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByTestId('logoUser')).toBeInTheDocument();
  });

  it('change state when click iconUser', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <IconUser />
        </HashRouter>
      </Provider>
    );

    expect(screen.queryByRole('button', { name: /log in/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoUser'));

    expect(await screen.findByRole('button', { name: /log in/i })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });
});
