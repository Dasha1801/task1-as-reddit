import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import NavPanel from './navPanel';

describe('Test NavPanel component', () => {
  it('should render NavPanel', () => {
    render(
      <Provider store={store}>
        <NavPanel />
      </Provider>,
    );
  });
});
