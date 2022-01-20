import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { item } from '../../shared/mocks';
import FooterArticle from './footerArticle';

const { num_comments } = item;

describe('Test FooterArticle component', () => {
  it('should render FooterArticle', () => {
    render(<FooterArticle num_comments={num_comments} />);
    const countComments = screen.getByTestId('count-comments');

    expect(countComments).toHaveTextContent(num_comments.toString());
    expect(screen.getByText(/Comments/i)).toBeInTheDocument();
  });
});
