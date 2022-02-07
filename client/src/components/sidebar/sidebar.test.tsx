import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import Sidebar from './sidebar';

describe('Test Sidebar component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
