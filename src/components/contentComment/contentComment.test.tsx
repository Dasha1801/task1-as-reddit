import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import ContentComment from './contentComment';
import { commentMock } from '../../shared/mocks';

describe('Test ContentComment component', () => {
  it('should render ContentComment', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <ContentComment body={commentMock.body} />
        </HashRouter>
      </Provider>
    );
    const body = screen.getByText(
      'It will load the image only at the point when you assign an src to it, browsers do that.'
    );

    expect(body).toBeInTheDocument();
  });
});
