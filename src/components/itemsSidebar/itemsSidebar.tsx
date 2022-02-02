import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import './itemsSidebar.scss';

function ItemSidebar(): JSX.Element {
  const { rulesSubreddit } = useSelector((state: TStore) => state.rulesSubreddit);

  const renderListItem = (): JSX.Element[] =>
    rulesSubreddit.map((el) => (
      <li className="itemList" key={el.created_utc} data-testid="rule">
        <h4 className="itemName">{el.short_name}</h4>
        <p className="description">{el.description}</p>
      </li>
    ));

  return (
    <div className="itemSidebar">
      <header className="title">r/javascript Rules</header>
      <ol className="contentSidebar">{renderListItem()}</ol>
    </div>
  );
}

export default ItemSidebar;
