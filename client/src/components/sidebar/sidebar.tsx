import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import Rules from '../rules/rules';
import Table from '../tableSidebar/table';
import Community from '../communityBlock/community';

function Sidebar(): JSX.Element {
  const { loading } = useSelector((state: TStore) => state.loading);

  return (
    <aside className="sidebar" data-testid="sidebar">
      {!loading && (
        <>
          <Community />
          <Rules />
          <Table />
        </>
      )}
    </aside>
  );
}

export default Sidebar;
