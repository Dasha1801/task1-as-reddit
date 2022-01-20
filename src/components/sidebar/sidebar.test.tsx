import { screen, render } from '@testing-library/react';
import React from 'react';
import Sidebar from './sidebar';

describe('Test Sidebar component', () => {
  it('should be render Sidebar, count ItemSidebar', () => {
    render(<Sidebar />);

    const countItem = screen.getAllByText('Lorem ipsum dolor sit amet.');

    expect(countItem).toHaveLength(2);
  });
});
