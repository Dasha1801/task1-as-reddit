import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import ModalLogin from '../modalLogIn';

describe('Test ModalLogin component', () => {
  it('should render component', async () => {
    const setState = jest.fn();
    render(
      <Provider store={store}>
        <ModalLogin show setState={setState} />
      </Provider>
    );

    expect(screen.getByTestId('modalTitle')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('should reset fields then click btn', () => {
    const setState = jest.fn();
    render(
      <Provider store={store}>
        <ModalLogin show setState={setState} />
      </Provider>
    );

    const email = screen.getByTestId(/email/i);
    const password = screen.getByTestId(/password/i);

    userEvent.type(email, '6227968@gmail.com');
    userEvent.type(password, '111');

    expect(screen.getByTestId<HTMLInputElement>(/email/).value).toEqual('6227968@gmail.com');
    expect(screen.getByTestId<HTMLInputElement>(/password/).value).toEqual('111');

    userEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByTestId<HTMLInputElement>(/password/).value).toEqual('');
    expect(screen.getByTestId<HTMLInputElement>(/email/).value).toEqual('');
  });
});
