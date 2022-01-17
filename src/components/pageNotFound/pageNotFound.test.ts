import { render, screen } from '@testing-library/react';
import { PATH } from '../../constants';
import PageNotFound from './pageNotFound';

describe('PageNotFound component', () => {
  beforeEach(() => {
    render(PageNotFound());
  });

  it('should render PageNotFound', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should be Path to img', () => {
    const img = screen.getByTestId('img');

    expect(img.getAttribute('src')).toBe(PATH.error404);
  });
});
