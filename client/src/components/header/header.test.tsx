import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PATH } from '../../constants';
import Header from './header';
import { store } from '../redux';

describe('Test Header component', () => {
  it('should be text on title header', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Header />
        </HashRouter>
      </Provider>
    );
    const title = screen.getByRole('heading', { name: /javascript/i });

    expect(title).toBeInTheDocument();
  });

  it('should be path to img', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Header />
        </HashRouter>
      </Provider>
    );
    const img = screen.getByAltText(/logo/i);

    expect(img).toHaveAttribute('src', PATH.logo);
  });
});
