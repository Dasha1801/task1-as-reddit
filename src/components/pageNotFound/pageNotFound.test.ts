import { render, screen } from '@testing-library/react';
import { PATH } from '../../constants';
import PageNotFound from './pageNotFound';

describe('Test PageNotFound component', () => {
  it('should render PageNotFound', () => {
    render(PageNotFound());

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should be Path to img', () => {
    render(PageNotFound());
    const img = screen.getByTestId('img');

    expect(img).toHaveAttribute('src', PATH.error404);
  });
});
