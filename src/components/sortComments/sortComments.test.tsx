import { screen, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import SortComments from './sortComments';
import { store } from '../redux';

describe('Test SortComments component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <SortComments />
      </Provider>
    );
    const select = screen.getByTestId('select');
    const allOption = screen.getAllByRole('option');

    expect(screen.getByText(/sort By:/i)).toBeInTheDocument();
    expect(select).toHaveAttribute('name');
    expect(allOption).toHaveLength(3);
  });
});
