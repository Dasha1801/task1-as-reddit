import React from 'react';
import ItemsSidebar from '../itemsSidebar/itemsSidebar';

function Sidebar(): JSX.Element {
  return (
    <aside className="sidebar" data-testid="sidebar">
      <ItemsSidebar />
    </aside>
  );
}

export default Sidebar;
