import React from 'react';
import { render, screen } from '@testing-library/react';
import FormBtns from '../formBtns';

describe('Test FormBtns component', () => {
  it('should render component', () => {
    render(<FormBtns />);

    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
