import { render, screen } from '@testing-library/react';
import ItemSidebar from './itemSidebar';

describe('Test ItemSidebar component', () => {
  it('should render ItemSidebar', () => {
    render(ItemSidebar());
    const title = screen.getByText('Lorem ipsum dolor sit amet.');

    expect(title).toBeInTheDocument();
  });
});
