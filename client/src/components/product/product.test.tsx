import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should only be the saved service', async () => {
    render(
      <Provider store={store}>
        <Product product={products[0]} />
      </Provider>
    );

    const services = screen.getAllByTestId('service');

    expect(services).toHaveLength(2);

    userEvent.click(services[0]);

    setTimeout(() => {
      expect(services[0]).toBeInTheDocument();
      expect(services[1]).not.toBeInTheDocument();
    }, 4500);
  });
});
