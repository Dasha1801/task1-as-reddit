import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './product';
import { products21 } from '../../shared/mocks';

describe('Test Product component', () => {
  it('should render component', () => {
    render(<Product product={products21[0]} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('infoProduct')).toBeInTheDocument();
    expect(screen.getByTestId('servicesProduct')).toBeInTheDocument();
  });
});
