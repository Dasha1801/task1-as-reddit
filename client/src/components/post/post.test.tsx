import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import Post from './post';

describe('Test Post component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    const post = screen.getByTestId('post');

    expect(post).toHaveClass('post');
    expect(post).toHaveTextContent('r/javascript');
  });
});
