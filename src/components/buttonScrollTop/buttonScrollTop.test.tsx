import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import ButtonScrollTop from './buttonScrollTop';

describe('Test ButtonScrollTop component', () => {
  it('should render ButtonScrollTop', () => {
    render(<ButtonScrollTop />);
    const button = screen.getByTestId('btnScrollToTop');

    expect(button).toHaveClass('iconScrollUp');
    expect(button).toBeInTheDocument();
  });

  it('should call window.scrollTo method when button clicked', () => {
    window.scrollTo = jest.fn();
    render(<ButtonScrollTop />);
    const button = screen.getByTestId('btnScrollToTop');
    userEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalled();
  });
});
