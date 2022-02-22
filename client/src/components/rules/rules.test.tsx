import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Rules from './rules';

describe('Test Rules component', () => {
  it('should render component', () => {
    render(<Rules />);

    const allRules = screen.getAllByTestId('rule');

    expect(allRules).toHaveLength(7);
    expect(screen.getByText('Excessive Self-Promotion')).toBeInTheDocument();
  });

  it('should show more information when click button, and rotate button', async () => {
    render(<Rules />);

    const allArrow = screen.getAllByTestId('arrowInfo');
    const firstArrow = allArrow[0];

    expect(firstArrow).toHaveClass('arrowOptions');
    expect(screen.queryByTestId('description')).not.toBeInTheDocument();

    userEvent.click(firstArrow);

    expect(screen.getByTestId('description')).toBeInTheDocument();
    expect(firstArrow).toHaveClass('rotate');

    userEvent.click(firstArrow);

    await waitForElementToBeRemoved(() => screen.queryByTestId('description'));
    expect(firstArrow).toHaveClass('arrowOptions');
  });
});
