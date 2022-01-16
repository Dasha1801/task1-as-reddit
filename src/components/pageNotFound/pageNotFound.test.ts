import { render, screen } from '@testing-library/react';
import { PATH } from '../../constants';
import PageNotFound from './pageNotFound';

describe('PageNotFound component', () => {
  beforeEach(() => {
    render(PageNotFound());
  });

  it('PageNotFound render', () => {
    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('Path to img', () => {
    const img = screen.getByTestId('img');
    expect(img.getAttribute('src')).toBe(PATH.error404);
  });
});
