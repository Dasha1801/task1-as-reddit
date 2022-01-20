import { render, screen } from '@testing-library/react';
import Article from './article';
import { item } from '../../shared/mocks';

describe('Article component', () => {
  it('should render Article', () => {
    render(Article({ item }));

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should path to Article', () => {
    render(Article({ item }));
    const anchor = screen.getByTestId('link-article');

    expect(anchor).toHaveAttribute('href', item.url);
  });
});
