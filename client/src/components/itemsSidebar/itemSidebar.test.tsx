import { render, screen } from '@testing-library/react';
import React from 'react';
import ItemsSidebar from './itemsSidebar';

describe('Test ItemsSidebar component', () => {
  it('should be response msw', async () => {
    render(<ItemsSidebar />);

    const allRules = screen.getAllByTestId('rule');

    expect(allRules).toHaveLength(7);
    expect(screen.getByText('Excessive Self-Promotion')).toBeInTheDocument();
  });
});
