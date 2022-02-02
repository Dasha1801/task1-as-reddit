import { render, screen } from '@testing-library/react';
import React from 'react';
import NewComment from './newComment';

describe('Test Post component', () => {
  it('should render component', () => {
    render(<NewComment />);

    expect(screen.getByText(/comment as/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Comment' })).toBeInTheDocument();
  });
});
