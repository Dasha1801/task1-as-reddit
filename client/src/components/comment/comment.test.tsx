import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import Comment from './comment';
import { commentMock } from '../../shared/mocks';

describe('Test Comment component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Comment item={commentMock} />
        </HashRouter>
      </Provider>
    );

    const wrapperComment = screen.getByTestId('wrapperComment');
    const commentText = screen.getByText(
      'It will load the image only at the point when you assign an src to it, browsers do that.'
    );

    expect(wrapperComment).toHaveClass('comments');
    expect(commentText).toBeInTheDocument();
  });
});
