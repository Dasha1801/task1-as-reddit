import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import ItemsSidebar from './itemsSidebar';

describe('Test ItemsSidebar component', () => {
  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <ItemsSidebar />
      </Provider>
    );

    const allRules = await screen.findAllByTestId('rule');

    expect(allRules).toHaveLength(3);
    expect(screen.getByText('Excessive Self-Promotion')).toBeInTheDocument();
  });
});
