import { render, screen } from '@testing-library/react';
import { PATH } from '../../constants';
import Header from './header';

describe('Test Header component', () => {
  it('should be text on title header', () => {
    render(Header());
    const title = screen.getByRole('heading', { name: /javascript/i });

    expect(title).toBeInTheDocument();
  });

  it('should be path to img', () => {
    render(Header());
    const img = screen.getByAltText(/logo/i);

    expect(img).toHaveAttribute('src', PATH.logo);
  });
});
