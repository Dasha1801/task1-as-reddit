import { render, screen } from '@testing-library/react';
import ContentArticle from './contentArticle';
import { item } from '../../shared/mocks';

describe('ContentArticle component', () => {
  it('should render ContentArticle', () => {
    render(ContentArticle({ item }));

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/My website/)).toBeInTheDocument();
  });

  it('should be path link to article', () => {
    const { getByTestId } = render(ContentArticle({ item }));
    const anchor = getByTestId('link');

    expect(anchor.getAttribute('href')).toBe(item.url);
  });
});
