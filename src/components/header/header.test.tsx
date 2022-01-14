import { render } from '@testing-library/react';
import { PATH } from '../../constants';
import Header from './header';

describe('Header render', () => {
  it('Text on title header', () => {
    const el = render(Header());
    const elText = el.getByTestId('title-header');
    expect(elText.textContent).toBe('javascript');
  });

  it('Path to img', () => {
    const component = render(Header());
    const img = component.getByTestId('img');
    expect(img.getAttribute('src')).toBe(PATH.logo);
  });
});
