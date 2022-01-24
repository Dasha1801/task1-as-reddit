import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import ContentArticle from './contentArticle';
import { item } from '../../shared/mocks';
import { store } from '../redux';

describe('Test ContentArticle component', () => {
  it('should render ContentArticle', () => {
    render(
      <Provider store={store}>
        <ContentArticle item={item} />
      </Provider>,
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText(/My website/)).toBeInTheDocument();
  });

  it('should be path link to article', () => {
    render(
      <Provider store={store}>
        <ContentArticle item={item} />
      </Provider>,
    );
    const title = screen.getByRole('heading', { name: item.title });

    expect(title).toBeInTheDocument();
  });
});
