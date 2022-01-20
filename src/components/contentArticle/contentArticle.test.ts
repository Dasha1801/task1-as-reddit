import { render, screen } from '@testing-library/react';
import ContentArticle from './contentArticle';
import { item } from '../../shared/mocks';

describe('Test ContentArticle component', () => {
  it('should render ContentArticle', () => {
    render(ContentArticle({ item }));

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/My website/)).toBeInTheDocument();
  });

  it('should be path link to article', () => {
    render(ContentArticle({ item }));
    const title = screen.getByRole('heading', { name: item.title });

    expect(title).toBeInTheDocument();
  });
});
