import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import HeaderPost from './headerPost';
import { PATH } from '../../constants';

describe('Test HeaderPost component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <HeaderPost />
      </Provider>
    );

    const logo = screen.getByAltText('logo');

    expect(logo).toHaveAttribute('src', PATH.logo);
    expect(logo).toHaveClass('headerItem');
    expect(screen.getByText('Posted by u/')).toBeInTheDocument();
  });
});
