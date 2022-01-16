import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import App from './app';

describe('App component', () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('App render', () => {
    expect(screen.getByTestId('app')).toBeInTheDocument();
    expect(screen.findByRole('main')).toBeTruthy();
    expect(screen.findByRole('heading')).toBeTruthy();
  });
});
