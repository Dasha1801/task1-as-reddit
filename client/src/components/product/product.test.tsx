import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import Product from './product';
import { products } from '../../shared/mocks';

describe('Test Product component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <Product product={products[0]} />
      </Provider>
    );

    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('infoProduct')).toBeInTheDocument();
    expect(screen.getByTestId('servicesProduct')).toBeInTheDocument();
  });
});
