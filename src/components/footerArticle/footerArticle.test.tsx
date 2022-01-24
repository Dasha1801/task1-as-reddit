import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { item } from '../../shared/mocks';
import FooterArticle from './footerArticle';
import { store } from '../redux';

describe('Test FooterArticle component', () => {
  it('should render FooterArticle', () => {
    render(
      <Provider store={store}>
        <FooterArticle item={item} />
      </Provider>,
    );
    const countComments = screen.getByTestId('count-comments');

    expect(countComments).toHaveTextContent(item.num_comments.toString());
    expect(screen.getByText(/Comments/i)).toBeInTheDocument();
  });
});
