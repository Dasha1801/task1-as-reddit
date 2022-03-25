import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { dataServices } from '../../../shared/mocks';
import { store } from '../../redux';
import BtnAdd from '../btnAdd';

describe('Test BtnAdd component', () => {
  it('should render component', async () => {
    render(
      <Provider store={store}>
        <BtnAdd info={dataServices['476171'][2]} code="6.150.224" idService="42" />
      </Provider>
    );

    expect(screen.getByRole('button', { name: /Добавить/i })).toBeInTheDocument();
  });
});
