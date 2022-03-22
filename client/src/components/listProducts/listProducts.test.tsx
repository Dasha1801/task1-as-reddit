import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import ListProducts from './listProducts';

describe('Test ListProducts component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    expect(screen.getByText(/6.267.216/i)).toBeInTheDocument();
    expect(screen.getByText(/5.666.679/i)).toBeInTheDocument();
    expect(screen.getByText(/458.328/i)).toBeInTheDocument();
    expect(screen.getByText(/6.150.224/i)).toBeInTheDocument();
  });
});
