import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from '../../app/app';
import IconUser from '../../iconUser/iconUser';
import { store } from '../../redux';
import FormSignUp from '../formSignUp';

describe('Test FormSignUp Component', () => {
  it('should show form signUp when click iconUser and btn signUp', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <IconUser />
        </HashRouter>
      </Provider>
    );

    expect(screen.queryByRole('button', { name: /sign up/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoUser'));

    const signUpBtn = screen.getByRole('button', { name: /sign up/i });

    expect(signUpBtn).toBeInTheDocument();

    userEvent.click(signUpBtn);

    expect(screen.getByTestId('formSignUp')).toBeInTheDocument();
  });

  it('should be enter and reset input', () => {
    render(
      <Provider store={store}>
        <FormSignUp />
      </Provider>
    );

    const name = screen.getByTestId(/name/i);
    const phone = screen.getByTestId(/phone/i);

    expect(name).toBeInTheDocument();
    expect(phone).toBeInTheDocument();

    userEvent.type(name, 'Simon');

    expect(screen.getByTestId<HTMLInputElement>(/name/).value).toEqual('Simon');

    userEvent.clear(name);

    expect(screen.getByTestId<HTMLInputElement>(/name/).value).toEqual('');

    userEvent.type(phone, '296227968');

    expect(screen.getByTestId<HTMLInputElement>(/phone/).value).toEqual('+375296227968');

    userEvent.clear(phone);

    expect(screen.getByTestId<HTMLInputElement>(/phone/).value).toEqual('');
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
    userEvent.click(screen.getByText(/sign up/i));

    userEvent.type(await screen.findByTestId(/email/i), '6227968@gmail.com');
    userEvent.type(await screen.findByTestId('password'), '123456');
    userEvent.type(await screen.findByTestId(/name/i), 'Simon');
    userEvent.type(await screen.findByTestId(/confirmPassword/i), '123456');
    userEvent.type(await screen.findByTestId(/city/i), 'гродно');
    userEvent.type(await screen.findByTestId(/address/i), 'ул.седых 32-40');
    userEvent.type(await screen.findByTestId(/phone/i), '296227968');
    userEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/successfully completed/i)).toBeInTheDocument();
  });

  it('should be autocomplete', () => {
    render(
      <Provider store={store}>
        <FormSignUp />
      </Provider>
    );

    const fieldCity = screen.getByTestId(/city/i);

    userEvent.type(fieldCity, 'г');

    expect(screen.queryByTestId('variants')).not.toBeInTheDocument();

    userEvent.clear(fieldCity);
    userEvent.type(fieldCity, 'гр');

    expect(screen.getByTestId('variants')).toBeInTheDocument();
  });
});
