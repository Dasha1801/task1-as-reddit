import { render } from '@testing-library/react';
import { PATH } from '../../constants';
import Header from './header';

describe('Header component', () => {
  it('should be text on title header', () => {
    const { getByTestId } = render(Header());
    const elText = getByTestId('title-header');

    expect(elText.textContent).toBe('javascript');
  });

  it('should be path to img', () => {
    const { getByTestId } = render(Header());
    const img = getByTestId('img');

    expect(img.getAttribute('src')).toBe(PATH.logo);
  });
});
