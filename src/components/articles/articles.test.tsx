import { screen, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'components/redux';
import Articles from './articles';

describe('Test Articles component', () => {
  it('should render Spinner', () => {
    render(
      <Provider store={store}>
        <Articles />
      </Provider>,
    );

    const spinner = screen.getByTestId('parentLoader');

    expect(spinner).toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <Articles />
      </Provider>,
    );

    const text = await screen.findByText('My website freezes after ...?');
    const allLink = await screen.findAllByTestId('link');

    expect(allLink).toHaveLength(2);
    expect(text).toBeInTheDocument();
  });
});
