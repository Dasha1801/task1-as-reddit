import { render, screen } from '@testing-library/react';
import * as React from 'react';
import ButtonScrollTop from './buttonScrollTop';

describe('Test ButtonScrollTop component', () => {
  it('should don`t render ButtonScrollTop', () => {
    render(<ButtonScrollTop />);
    const button = screen.queryByTestId('btnScrollToTop');

    expect(button).not.toBeInTheDocument();
  });
});
