import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../../redux';
import RegisteredGroup from '../registeredGroup';

describe('Test RegisteredGroup component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <RegisteredGroup />
        </HashRouter>
      </Provider>
    );

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
