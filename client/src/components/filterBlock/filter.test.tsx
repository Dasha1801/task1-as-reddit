import { screen, render } from '@testing-library/react';
import React from 'react';
import Filter from './filter';

describe('Test component Filter', () => {
  it('should be render component', () => {
    render(<Filter />);

    expect(screen.getByText('Filter by flair')).toBeInTheDocument();
    expect(screen.getAllByTestId('filter')).toHaveLength(4);
    expect(screen.getByText(/AskJS/i)).toHaveClass('filter');
  });
});
