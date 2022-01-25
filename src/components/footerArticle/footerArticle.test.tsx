import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { item } from '../../shared/mocks';
import FooterArticle from './footerArticle';
import { store } from '../redux';

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
});
