import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import ListProducts from './listProducts';

describe('Test ListProducts component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    expect(screen.getByText(/6.267.216/i)).toBeInTheDocument();
    expect(screen.getByText(/5.666.679/i)).toBeInTheDocument();
    expect(screen.getByText(/458.328/i)).toBeInTheDocument();
    expect(screen.getByText(/6.150.224/i)).toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    expect(await screen.findByText('Сертификат «Негарантийный ремонт» на 2 года')).toBeInTheDocument();
    expect(
      await screen.findByText('Android Премиум(доступно только при самовывозе и наличии SIM-карты)')
    ).toBeInTheDocument();
    expect(await screen.findByText('Перенос контактов(доступно только при самовывозе)')).toBeInTheDocument();
  });

  it('should be response msw and render tabs with count', async () => {
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    const allButtons = screen.getAllByText(/все услуги/i);

    userEvent.click(allButtons[0]);

    expect(await screen.findByTestId('menuServices')).toBeInTheDocument();

    expect(await screen.findByTestId(/гарантия/i)).toHaveTextContent('1');
    expect(await screen.findByTestId(/сервесное обслуживание/i)).toHaveTextContent('1');
    expect(await screen.findByTestId(/настройка/i)).toHaveTextContent('1');
  });

  it('should be response msw and other styles at the saved items', async () => {
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    const allButtons = screen.getAllByText(/все услуги/i);

    userEvent.click(allButtons[0]);

    expect(await screen.findByTestId('menuServices')).toBeInTheDocument();
    expect(screen.getByTestId('iconBasket')).toBeInTheDocument();
    expect(screen.getByTestId(/saveItem/i)).toHaveClass('saveItem');
  });
});
