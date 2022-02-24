import { render, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from './sidebar';

describe('Test Sidebar component', () => {
  it('should render component', () => {
    render(<Sidebar />);

    expect(screen.getAllByTestId('wrapperItems')).toHaveLength(4);
  });
});
