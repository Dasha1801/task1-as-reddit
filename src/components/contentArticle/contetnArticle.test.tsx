import { render, screen } from '@testing-library/react';
import ContentArticle from './contentArticle';
import { item } from '../../shared/mocks';

describe('ContentArticle component', () => {
  it('ContentArticle render', () => {
    render(ContentArticle({ item }));
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/My website/)).toBeInTheDocument();
  });

  it('Path link', () => {
    const component = render(ContentArticle({ item }));
    const anchor = component.getByTestId('link');
    expect(anchor.getAttribute('href')).toBe(item.url);
  });
});
