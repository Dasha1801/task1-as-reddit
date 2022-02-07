import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import IconUser from './iconUser';

describe('Test IconUser Component', () => {
  it('should render component', () => {
    render(<IconUser />);

    expect(screen.getByTestId('logoUser')).toBeInTheDocument();
  });

  it('change state when click iconUser', () => {
    render(<IconUser />);

    expect(screen.queryByRole('button', { name: /log in/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoUser'));

    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });
});
