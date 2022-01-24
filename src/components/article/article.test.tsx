import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import Article from './article';
import { item } from '../../shared/mocks';
import { store } from '../redux';

describe('Article component', () => {
  it('should render Article', () => {
    render(
      <Provider store={store}>
        <Article item={item} />
      </Provider>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should path to Article', () => {
    render(
      <Provider store={store}>
        <Article item={item} />
      </Provider>,
    );
    const anchor = screen.getByTestId('link-article');

    expect(anchor).toHaveAttribute('href', item.url);
  });
});
