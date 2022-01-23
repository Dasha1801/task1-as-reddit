import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Test Spinner component', () => {
  it('should render Spinner', () => {
    render(Spinner());
    const loader = screen.getByTestId('loading-spin');

    expect(loader).toHaveStyle('border-radius: 50%');
  });
});
