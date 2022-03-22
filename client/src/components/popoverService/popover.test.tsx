import React from 'react';
import { screen, render } from '@testing-library/react';
import PopoverService from './popover';

describe('Test PopoverService component', () => {
  it('should render PopoverService', () => {
    render(<PopoverService text="Услуга добавлена в корзину" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/услуга добавлена в корзину/i)).toBeInTheDocument();
  });
});
