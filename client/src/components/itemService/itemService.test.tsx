import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { dataServices } from '../../shared/mocks';
import { store } from '../redux';
import ItemService from './itemService';

describe('Test ItemService component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <ItemService info={dataServices['476171'][0]} code="6.150.224" idService="2478"  />
      </Provider>
    );

    expect(screen.getByText(/сертификат «Негарантийный ремонт» на 1 год/i)).toBeInTheDocument();
    expect(screen.getByText(/ремонт устройства – 1 раз/i)).toBeInTheDocument();
    expect(screen.getByText(/44/i)).toBeInTheDocument();
    expect(screen.getByText(/подробнее/i)).toBeInTheDocument();
  });

  it("should don't render button 'подробнее'", () => {
    render(
      <Provider store={store}>
        <ItemService info={dataServices['476171'][2]} code="6.150.224" idService="42"/>
      </Provider>
    );

    expect(screen.queryByText(/подробнее/i)).not.toBeInTheDocument();
  });
});
