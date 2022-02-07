import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import Articles from './articles';

describe('Test Articles component', () => {
  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Articles />
        </HashRouter>
      </Provider>
    );

    const text = await screen.findByText('My website freezes after ...?');

    expect(text).toBeInTheDocument();
  });
});
