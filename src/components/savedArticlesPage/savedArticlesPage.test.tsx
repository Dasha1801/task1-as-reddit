import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import SavedArticlesPage from './savedArticlesPage';

describe('Test SavedArticlesPage component', () => {
  it('should render SavedArticlesPage', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <SavedArticlesPage />
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/no saved articles!/i)).toBeInTheDocument();
    expect(screen.queryByTestId('article')).not.toBeInTheDocument();
  });
});
