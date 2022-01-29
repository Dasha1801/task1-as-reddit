import { screen, render } from '@testing-library/react';
import React from 'react';
import SortComments from './sortComments';

describe('Test SortComments component', () => {
  it('should render component', () => {
    render(<SortComments />);
    const select = screen.getByTestId('select');
    const allOption = screen.getAllByRole('option');

    expect(screen.getByText(/sort By:/i)).toBeInTheDocument();
    expect(select).toHaveAttribute('name');
    expect(allOption).toHaveLength(4);
  });
});
