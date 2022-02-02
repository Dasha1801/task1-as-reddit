import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import ContentPost from './contentPost';

describe('Test ContentPost component', () => {
  it('should render ContentPost', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <ContentPost />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
