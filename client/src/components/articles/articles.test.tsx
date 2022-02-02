import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'components/redux';
import Articles from './articles';

describe('Test Articles component', () => {
  it('should render Spinner', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Articles />
        </HashRouter>
      </Provider>,
    );

    const spinner = screen.getByTestId('parentLoader');

    expect(spinner).toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Articles />
        </HashRouter>
      </Provider>,
    );

    await waitForElementToBeRemoved(() => screen.queryByTestId('parentLoader'));

    const text = screen.getByText('My website freezes after ...?');
    const allLink = screen.getByTestId('link');

    expect(allLink).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
