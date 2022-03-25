import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux';
import ServicesMenu from './servicesMenu';
import { dataServices } from '../../shared/mocks';

describe('Test ServicesMenu component', () => {
  const changeShowMenu = jest.fn();

  it('should render component', () => {
    render(
      <Provider store={store}>
        <ServicesMenu
          changeShowMenu={changeShowMenu}
          showMenu
          itemsService={dataServices['476171']}
          code="41867"
          idService="476171"
        />
      </Provider>
    );

    expect(screen.getByText(/дополнительные услуги/i)).toBeInTheDocument();
    expect(screen.getByText(/Гарантия/i)).toBeInTheDocument();
    expect(screen.getByText(/Сервесное обслуживание/i)).toBeInTheDocument();
    expect(screen.getByText(/Гарантия/i)).toHaveClass('activeTab');
  });

  it('should render new services when click tab', () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(
      <Provider store={store}>
        <ServicesMenu
          changeShowMenu={changeShowMenu}
          showMenu
          itemsService={dataServices['476171']}
          code="41867"
          idService="476171"
        />
      </Provider>
    );

    userEvent.click(screen.getByText(/гарантия/i));

    expect(screen.getByText(/сертификат «Негарантийный ремонт»/i)).toBeInTheDocument();
    expect(screen.getByText(/консультация по эксплуатации/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/настройка/i));

    expect(screen.queryByText(/сертификат «Негарантийный ремонт»/i)).not.toBeInTheDocument();
    expect(screen.getByText(/без электронного управления на дверях/i)).toBeInTheDocument();
  });
});
