import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import IconUser from '../../iconUser/iconUser';
import FormLogin from '../formLogIn';

describe('Test FormLogin Component', () => {
  it('should show form logIn when click iconUser and btn logIn', () => {
    render(<IconUser />);

    expect(screen.queryByRole('button', { name: /log in/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoUser'));

    const logInBtn = screen.getByRole('button', { name: /log in/i });

    expect(logInBtn).toBeInTheDocument();

    userEvent.click(logInBtn);

    expect(screen.getByTestId('formLogIn')).toBeInTheDocument();
  });

  it('should be enter and reset input', () => {
    render(<FormLogin />);

    const email = screen.getByTestId(/email/i);
    const password = screen.getByTestId(/password/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    userEvent.type(email, '6227968@gmaol.com');

    expect(screen.getByTestId<HTMLInputElement>(/email/).value).toEqual('6227968@gmaol.com');

    userEvent.clear(email);

    expect(screen.getByTestId<HTMLInputElement>(/email/).value).toEqual('');

    userEvent.type(password, '111');

    expect(screen.getByTestId<HTMLInputElement>(/password/).value).toEqual('111');

    userEvent.clear(password);

    expect(screen.getByTestId<HTMLInputElement>(/password/).value).toEqual('');
  });
});
