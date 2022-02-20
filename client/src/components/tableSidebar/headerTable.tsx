import React from 'react';
import './table.scss';

function HeaderTable(): JSX.Element {
  return (
    <div className="contentTable">
      <div className="headerTable">Date</div>
      <div className="headerTable">Organizers</div>
      <div className="headerTable">Network</div>
    </div>
  );
}

export default HeaderTable;
