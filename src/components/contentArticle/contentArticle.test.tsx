import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import ContentArticle from './contentArticle';
import { item } from '../../shared/mocks';
import { store } from '../redux';

describe('Test ContentArticle component', () => {
  it('should render ContentArticle', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <ContentArticle item={item} />
        </HashRouter>
      </Provider>,
    );
    const title = screen.getByRole('heading', { name: item.title });

    expect(title).toBeInTheDocument();
  });
});

it('should don`t render link to article', () => {
  render(
    <Provider store={store}>
      <HashRouter>
        <ContentArticle item={item} />
      </HashRouter>
    </Provider>,
  );

  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
