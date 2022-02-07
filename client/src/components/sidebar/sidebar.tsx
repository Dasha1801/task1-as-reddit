import React from 'react';
import { useSelector } from 'react-redux';
import ItemsSidebar from '../itemsSidebar/itemsSidebar';
import { TStore } from '../redux';

function Sidebar(): JSX.Element {
  const { loading } = useSelector((state: TStore) => state.loading);

  return (
    <aside className="sidebar" data-testid="sidebar">
      {!loading && <ItemsSidebar />}
    </aside>
  );
}

export default Sidebar;
