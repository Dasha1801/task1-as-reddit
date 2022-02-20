import { render, screen } from '@testing-library/react';
import React from 'react';
import Rules from './rules';

describe('Test Rules component', () => {
  it('should be response msw', async () => {
    render(<Rules />);

    const allRules = screen.getAllByTestId('rule');

    expect(allRules).toHaveLength(7);
    expect(screen.getByText('Excessive Self-Promotion')).toBeInTheDocument();
  });
});
