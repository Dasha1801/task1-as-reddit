import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import IconSaveItems from './iconSaveItems';

describe('Test IconSaveItems component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <IconSaveItems />
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByTestId('iconSavedItems')).toBeInTheDocument();
    expect(screen.queryByTestId('countItem')).not.toBeInTheDocument();
  });
});
