import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux';
import NavPanel from './navPanel';

describe('Test NavPanel component', () => {
  it('should render NavPanel', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <NavPanel />
        </HashRouter>
      </Provider>,
    );

    const navPanel = screen.getByRole('navigation');
    const itemsList = screen.getAllByRole('listitem');

    expect(navPanel).toBeInTheDocument();
    expect(navPanel).toHaveClass('navPanel');
    expect(itemsList).toHaveLength(3);
  });
});
