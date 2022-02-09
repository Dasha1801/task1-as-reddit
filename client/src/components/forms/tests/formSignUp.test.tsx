import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import IconUser from '../../iconUser/iconUser';
import FormSignUp from '../formSignUp';

describe('Test FormSignUp Component', () => {
  it('should show form signUp when click iconUser and btn signUp', () => {
    render(<IconUser />);

    expect(screen.queryByRole('button', { name: /sign up/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoUser'));

    const signUpBtn = screen.getByRole('button', { name: /sign up/i });

    expect(signUpBtn).toBeInTheDocument();

    userEvent.click(signUpBtn);

    expect(screen.getByTestId('formSignUp')).toBeInTheDocument();
  });

  it('should be enter and reset input', () => {
    render(<FormSignUp />);

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
});
