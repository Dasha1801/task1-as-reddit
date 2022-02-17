import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ContentArticle from '../contentArticle/contentArticle';
import SortComments from './sortComments';
import { item } from '../../shared/mocks';
import { store } from '../redux';

describe('Test SortComments component', () => {
  it('should render component', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <ContentArticle item={item} />
        </HashRouter>
      </Provider>
    );

    const linkToPost = screen.getByTestId('linkToPost');

    expect(linkToPost).toHaveTextContent('My website freezes after ...?');

    userEvent.click(linkToPost);
    render(
      <Provider store={store}>
        <SortComments />
      </Provider>
    );
    const select = await screen.findByTestId('select');
    const allOption = await screen.findAllByRole('option');

    expect(screen.getByText(/sort By:/i)).toBeInTheDocument();
    expect(select).toHaveAttribute('name');
    expect(allOption).toHaveLength(3);
  });
});
