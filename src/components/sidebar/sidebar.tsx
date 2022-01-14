import React from 'react';
import ItemSidebar from '../itemSidebar/itemSidebar';

function Sidebar():JSX.Element {
  return (

    <aside className="sidebar">
      <ItemSidebar />
      <ItemSidebar />
    </aside>
  );
}

export default Sidebar;
