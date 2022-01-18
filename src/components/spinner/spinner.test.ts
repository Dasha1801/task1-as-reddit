import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Spinner component', () => {
  beforeEach(() => {
    render(Spinner());
  });

  it('should render Spinner', () => {
    const loader = screen.getByTestId('loading-spin');

    expect(loader).toHaveStyle('border-radius: 50%');
  });
});
