import {
  fireEvent, render,
  screen,
} from '@testing-library/react';
import IconSaveItems from 'components/iconSaveItems/iconSaveItems';
import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { item } from '../../shared/mocks';
import { store } from '../redux';
import FooterArticle from './footerArticle';

describe('Test FooterArticle component', () => {
  it('should render FooterArticle', () => {
    render(
      <Provider store={store}>
        <FooterArticle item={item} />
      </Provider>,
    );
    const countComments = screen.getByTestId('count-comments');

    expect(countComments).toHaveTextContent(item.num_comments.toString());
    expect(screen.getByText(/Comments/i)).toBeInTheDocument();
  });

  it('should be change text and className when you click on the iconSave', () => {
    render(
      <Provider store={store}>
        <FooterArticle item={item} />
      </Provider>,
    );

    const saveIcon = screen.getByTestId('iconSave');
    const listItemSave = screen.getByTestId('listItemSave');

    expect(listItemSave).toHaveTextContent(/unsaved/i);

    fireEvent.click(saveIcon);

    expect(listItemSave).toHaveTextContent(/saved/i);
    expect(listItemSave).toHaveClass('save');

    fireEvent.click(saveIcon);

    expect(listItemSave).toHaveTextContent(/unsaved/i);
    expect(listItemSave).not.toHaveClass('save');
  });

  it('should be change count saved items  when you click on the iconSave', () => {
    render(
      <Provider store={store}>
        <FooterArticle item={item} />
      </Provider>,
    );

    const saveIcon = screen.getByTestId('iconSave');

    fireEvent.click(saveIcon);

    render(
      <Provider store={store}>
        <HashRouter>
          <IconSaveItems />
        </HashRouter>
      </Provider>,
    );

    const countItem = screen.getByTestId('countItem');
    expect(countItem).toBeInTheDocument();
    expect(countItem).toHaveTextContent('1');

    fireEvent.click(saveIcon);

    expect(countItem).not.toBeInTheDocument();
  });
});
