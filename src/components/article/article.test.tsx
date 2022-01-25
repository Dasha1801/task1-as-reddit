import {
  render,
  screen,
} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import { item } from '../../shared/mocks';
import { store } from '../redux';
import Article from './article';

describe('Article component', () => {
  it('should render Article', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Article item={item} />
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should path to Article', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Article item={item} />
        </HashRouter>
      </Provider>,
    );
    const anchor = screen.getByTestId('link-article');

    expect(anchor).toHaveAttribute('href', item.url);
  });

  it('should don`t render delete icon', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Article item={item} />
        </HashRouter>
      </Provider>,
    );

    const deleteIcon = screen.queryByTestId('iconDelete');
    expect(deleteIcon).not.toBeInTheDocument();
  });

  it('should render delete icon', () => {
    render(
      <Provider store={store}>
        render(
        <MemoryRouter initialEntries={[{ pathname: '/saveArticles' }]}>
          <Article item={item} />
        </MemoryRouter>
        );
      </Provider>,
    );

    const deleteIcon = screen.getByTestId('iconDelete');
    expect(deleteIcon).toBeInTheDocument();
  });
});
