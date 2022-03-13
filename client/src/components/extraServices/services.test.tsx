import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Services from './services';

describe('Test Services component', () => {
  it('should render component', () => {
    render(<Services id="6519574" />);

    expect(screen.getByText(/дополнительные услуги/i)).toBeInTheDocument();
    expect(screen.queryByText(/все услуги/i)).not.toBeInTheDocument();
  });

  it('should render button "все услуги"', () => {
    render(<Services id="6099773" />);

    expect(screen.getByText(/все услуги/i)).toBeInTheDocument();
  });

  it('should render menuServices when click button "все услуги"', () => {
    render(<Services id="6099773" />);

    userEvent.click(screen.getByText(/все услуги/i));

    expect(screen.getByTestId('menuServices')).toBeInTheDocument();
  });
});
