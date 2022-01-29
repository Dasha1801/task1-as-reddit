import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import FooterComment from './footerComment';
import { commentMock } from '../../shared/mocks';

const { score } = commentMock;

describe('Test FooterComment component', () => {
  it('should render FooterComment', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <FooterComment score={score} />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText(score)).toBeInTheDocument();
  });
});
