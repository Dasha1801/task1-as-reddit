import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../../redux';
import IconUser from '../../iconUser/iconUser';
import FormLogin from '../formLogIn';
import App from '../../app/app';

describe('Test FormLogin Component', () => {
  it('should show form logIn when click iconUser and btn logIn', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <IconUser />
        </HashRouter>
      </Provider>
    );

    expect(screen.queryByRole('button', { name: /log in/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoUser'));

    const logInBtn = screen.getByRole('button', { name: /log in/i });

    expect(logInBtn).toBeInTheDocument();

    userEvent.click(logInBtn);

    expect(screen.getByTestId('formLogIn')).toBeInTheDocument();
  });

  it('should be enter and reset input', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <FormLogin />
        </HashRouter>
      </Provider>
    );

    const email = screen.getByTestId(/email/i);
    const password = screen.getByTestId(/password/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    userEvent.type(email, '6227968@gmail.com');

    expect(screen.getByTestId<HTMLInputElement>(/email/).value).toEqual('6227968@gmail.com');

    userEvent.clear(email);

    expect(screen.getByTestId<HTMLInputElement>(/email/).value).toEqual('');

    userEvent.type(password, '111');

    expect(screen.getByTestId<HTMLInputElement>(/password/).value).toEqual('111');

    userEvent.clear(password);

    expect(screen.getByTestId<HTMLInputElement>(/password/).value).toEqual('');
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
  });
});
