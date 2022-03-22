import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { dataServices } from '../../../shared/mocks';
import { store } from '../../redux';
import BtnDelete from '../btnDelete';

describe('Test BtnDelete component', () => {
  it('should render component', async () => {
    render(
      <Provider store={store}>
        <BtnDelete info={dataServices['476171'][2]} />
      </Provider>
    );

    expect(screen.getByTestId('iconBasket')).toBeInTheDocument();
    expect(screen.getByTestId('iconBasket')).toHaveClass('btnDeleteService');
  });
});
