import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import CommentItem from './commentItem';
import { commentMock } from '../../shared/mocks';

describe('Test CommentItem component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <CommentItem item={commentMock} />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText('simon')).toBeInTheDocument();
    expect(screen.getByRole('list')).toHaveClass('listItemFooter');
    expect(screen.getByTestId('display-score')).toHaveTextContent('18');
  });
});
