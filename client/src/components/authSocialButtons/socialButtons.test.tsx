import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import SocialButtons from './socialButtons';

describe('Test SocialButtons component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <SocialButtons action="logIn" />
      </Provider>
    );

    expect(screen.getByText(/Log in with Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in with Facebook/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/Log in with Facebook/i));
  });
});
