import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import UserPage from './userPage';

describe('Test UserPage component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );

    expect(screen.getByText(/phone/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/city/i)).toBeInTheDocument();
    expect(screen.getByText(/address/i)).toBeInTheDocument();
  });
});
