import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Provider } from 'react-redux';
import { item } from '../../shared/mocks';
import { store } from '../redux';
import FooterArticle from './footerArticle';

describe('Test FooterArticle component', () => {
  it('should render FooterArticle', () => {
    render(
      <Provider store={store}>
        <FooterArticle item={item} />
      </Provider>
    );
    const countComments = screen.getByTestId('count-comments');

    expect(countComments).toHaveTextContent(item.num_comments.toString());
    expect(screen.getByText(/Comments/i)).toBeInTheDocument();
  });

  it('should be change text  when you click on the iconSave', async () => {
    render(
      <Provider store={store}>
        <FooterArticle item={item} />
      </Provider>
    );

    const saveIcon = screen.getByTestId('iconSave');
    const listItemSave = screen.getByTestId('listItemSave');

    expect(listItemSave).toHaveTextContent(/unsaved/i);

    userEvent.click(saveIcon);

    expect(await screen.findByTestId('listItemSave')).toHaveTextContent(/saved/i);
  });
});
