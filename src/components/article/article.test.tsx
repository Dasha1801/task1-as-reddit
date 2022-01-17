import { render, screen } from '@testing-library/react';
import Article from './article';
import { item } from '../../shared/mocks';

describe('Article component', () => {
  beforeEach(() => render(Article({ item })));

  it('should render Article', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should path to Article', () => {
    const anchor = screen.getByTestId('link-article');

    expect(anchor.getAttribute('href')).toBe(item.url);
  });
});
