import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import ModalSignUp from '../modalSignUp';

describe('Test ModalSignUp component', () => {
  it('should render component', () => {
    const setState = jest.fn();
    render(
      <Provider store={store}>
        <ModalSignUp show setState={setState} />
      </Provider>
    );

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('should reset fields then click btn', () => {
    const setState = jest.fn();
    render(
      <Provider store={store}>
        <ModalSignUp show setState={setState} />
      </Provider>
    );

    const name = screen.getByTestId(/name/i);
    const phone = screen.getByTestId(/phone/i);

    userEvent.type(name, 'simon');
    userEvent.type(phone, '296227968');

    expect(screen.getByTestId<HTMLInputElement>(/name/).value).toEqual('simon');
    expect(screen.getByTestId<HTMLInputElement>(/phone/).value).toEqual('+375296227968');

    userEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByTestId<HTMLInputElement>(/name/).value).toEqual('');
    expect(screen.getByTestId<HTMLInputElement>(/phone/).value).toEqual('+375');
  });
});
