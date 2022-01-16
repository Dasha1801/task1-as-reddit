import { render, screen } from '@testing-library/react';
import ItemSidebar from './itemSidebar';

describe('ItemSidebar component', () => {
  beforeEach(() => {
    render(ItemSidebar());
  });

  it('ItemSidebar render', () => {
    const item = screen.getByTestId('itemSidebar');
    const title = screen.getByTestId('title');
    expect(title.textContent).toBe('Lorem ipsum dolor sit amet.');
    expect(item.hasChildNodes).toBeTruthy();
  });
});
