import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { dataServices } from '../../shared/mocks';
import { store } from '../redux';
import ItemServiceMenu from './itemServiceMenu';

describe('Test ItemServiceMenu component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <ItemServiceMenu info={dataServices['476171'][0]} idService="476171" code="6.150.224" />
      </Provider>
    );

    expect(screen.getByText(/сертификат «Негарантийный ремонт» на 1 год/i)).toBeInTheDocument();
    expect(screen.getByText(/ремонт устройства – 1 раз/i)).toBeInTheDocument();
    expect(screen.getByText(/44/i)).toBeInTheDocument();
    expect(screen.getByText(/подробнее/i)).toBeInTheDocument();
    expect(screen.queryByText(/стоимость может измениться/i)).not.toBeInTheDocument();
  });

  it("should don't render button 'подробнее'", () => {
    render(
      <Provider store={store}>
        <ItemServiceMenu info={dataServices['476171'][2]} idService="476171" code="6.150.224" />
      </Provider>
    );

    expect(screen.queryByText(/подробнее/i)).not.toBeInTheDocument();
    expect(screen.getByText(/стоимость может измениться/i)).toBeInTheDocument();
  });

  it('should render price change information', () => {
    render(
      <Provider store={store}>
        <ItemServiceMenu info={dataServices['476171'][2]} idService="476171" code="6.150.224" />
      </Provider>
    );

    expect(screen.getByText(/стоимость может измениться/i)).toBeInTheDocument();
  });
});
