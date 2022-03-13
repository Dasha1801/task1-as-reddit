import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServicesMenu from './servicesMenu';
import { dataServices21vek } from '../../shared/mocks';

describe('Test ServicesMenu component', () => {
  const changeShowMenu = jest.fn();

  it('should render component', () => {
    render(
      <ServicesMenu changeShowMenu={changeShowMenu} showMenu itemsService={dataServices21vek['476171']} />
    );

    expect(screen.getByText(/дополнительные услуги/i)).toBeInTheDocument();
    expect(screen.getByText(/Гарантия/i)).toBeInTheDocument();
    expect(screen.getByText(/Сервесное обслуживание/i)).toBeInTheDocument();
    expect(screen.getByText(/Сервесное обслуживание/i)).toHaveClass('activeTab');
  });

  it('should render new services when click tab', () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(
      <ServicesMenu changeShowMenu={changeShowMenu} showMenu itemsService={dataServices21vek['476171']} />
    );

    userEvent.click(screen.getByText(/гарантия/i));

    expect(screen.getByText(/сертификат «Негарантийный ремонт»/i)).toBeInTheDocument();
    expect(screen.getByText(/консультация по эксплуатации/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/настройка/i));

    expect(screen.queryByText(/сертификат «Негарантийный ремонт»/i)).not.toBeInTheDocument();
    expect(screen.getByText(/без электронного управления на дверях/i)).toBeInTheDocument();
  });
});
