import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { item } from '../../shared/mocks';
import FooterArticle from './footerArticle';

const { num_comments } = item;

describe('FooterArticle component', () => {
  beforeEach(() => {
    render(<FooterArticle num_comments={num_comments} />);
  });

  it('FooterArticle render', () => {
    const countComments = screen.getByTestId('count-comments');
    expect(countComments).toHaveTextContent(num_comments.toString());
    expect(screen.getByText(/Comments/i)).toBeInTheDocument();
  });
});
