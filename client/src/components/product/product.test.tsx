import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { products } from '../../shared/mocks';
import { store } from '../redux';
import Product from './product';

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

  it('should render 2 services for product', () => {
    render(
      <Provider store={store}>
        <Product product={products[1]} />
      </Provider>
    );

    const services = screen.getAllByTestId('service');

    expect(services).toHaveLength(2);
  });
});
