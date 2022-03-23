import React from 'react';
import { render, screen } from '@testing-library/react';
import Delivery from './delivery';

describe('Test Delivery component', () => {
  it('should render component', () => {
    render(<Delivery />);

    expect(screen.getByRole('heading', { name: /доставка/i })).toBeInTheDocument();
    expect(screen.getByText(/курьером завтра/i)).toBeInTheDocument();
    expect(screen.getByText(/самовывоз сегодня/i)).toBeInTheDocument();
  });
});
