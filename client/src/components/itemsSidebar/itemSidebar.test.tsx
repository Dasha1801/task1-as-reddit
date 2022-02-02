import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import ItemsSidebar from './itemsSidebar';
import { store } from '../redux';

describe('Test ItemsSidebar component', () => {
  it('should render ItemsSidebar', () => {
    render(
      <Provider store={store}>
        <ItemsSidebar />
      </Provider>
    );

    expect(screen.getByText('r/javascript Rules')).toBeInTheDocument();
    expect(screen.getByRole('list')).toHaveClass('contentSidebar');
  });
});
