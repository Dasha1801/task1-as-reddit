import React from 'react';
import { render, screen } from '@testing-library/react';
import { products21 } from '../../shared/mocks';
import InfoProduct from './infoProduct';

describe('Test InfoProduct component', () => {
  it('should render component', () => {
    render(<InfoProduct product={products21[0]} />);

    expect(screen.getByText(/смартфон Apple iPhone 11/i)).toBeInTheDocument();
    expect(screen.getByText(/6.267.216/i)).toBeInTheDocument();
    expect(screen.getByText(/2 099/i)).toBeInTheDocument();
  });
});
