import { render, screen } from '@testing-library/react';
import React from 'react';
import Table from './table';

describe('Test Table component', () => {
  it('should render component', () => {
    render(<Table />);

    expect(screen.getAllByTestId('tr')).toHaveLength(7);
    expect(screen.getByTestId('thead')).toBeInTheDocument();
  });
});
