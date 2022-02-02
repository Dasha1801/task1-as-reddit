import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import Comments from './comments';

describe('Test Comments component', () => {
  it('should render Comments', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Comments />
        </HashRouter>
      </Provider>
    );

    const wrapperComments = screen.getByTestId('wrapperComments');

    expect(wrapperComments).toBeInTheDocument();
    expect(wrapperComments).toHaveClass('wrapperComments');
  });
});
