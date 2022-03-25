import React from 'react';
import { screen, render, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux';
import PopoverService from './popover';
import ListProducts from '../listProducts/listProducts';

describe('Test PopoverService component', () => {
  it('should render PopoverService', () => {
    render(<PopoverService text="Услуга добавлена в корзину" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/услуга добавлена в корзину/i)).toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    const service = screen.getByText('Телевизор с диагональю до 42"');

    userEvent.click(service);

    await waitFor(
      async () => {
        expect(await screen.findByText('Услуга добавлена в корзину')).toBeInTheDocument();
      },
      {
        timeout: 3500,
      }
    );

    await waitForElementToBeRemoved(() => screen.queryByTestId('popover'));
  });
});
