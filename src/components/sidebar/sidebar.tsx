import { fetchRulesSubreddit } from 'components/redux/asyncActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ItemsSidebar from '../itemsSidebar/itemsSidebar';

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRulesSubreddit()(dispatch);
  }, [dispatch]);

  return (
    <aside className="sidebar" data-testid="sidebar">
      <ItemsSidebar />
    </aside>
  );
}

export default Sidebar;
