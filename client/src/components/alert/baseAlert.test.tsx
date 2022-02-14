import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseAlert from './baseAlert';

describe('Test BaseAlert component', () => {
  const setState = jest.fn();

  it('should render component', () => {
    render(<BaseAlert variant="successful" text="It is ok!" setState={setState} />);

    expect(screen.getByText(/it is ok!/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('errorAlert');
  });
});
