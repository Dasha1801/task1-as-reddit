import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpGroup from '../signUpGroup';

describe('Test SignUpGroup component', () => {
  it('should render component', () => {
    const setShowPopover = jest.fn();
    const setShowModalLogIn = jest.fn();
    const setShowModalSignUp = jest.fn();

    render(
      <SignUpGroup
        setShowPopover={setShowPopover}
        setShowModalLogIn={setShowModalLogIn}
        setShowModalSignUp={setShowModalSignUp}
        showPopover
      />
    );

    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });
});
