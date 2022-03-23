import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionsGroup from './optionsGroup';

describe('Test OptionsGroup component', () => {
  it('should render component', () => {
    render(<OptionsGroup />);

    expect(screen.getByText(/удалить/i)).toBeInTheDocument();
    expect(screen.getByText(/избранное/i)).toBeInTheDocument();
  });
});
