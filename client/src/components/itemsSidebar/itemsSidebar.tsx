import React, { useCallback, useEffect, useState } from 'react';
import { fetchRules } from '../../server/api';
import { IRulesSubreddit } from '../../shared/interfaces';
import './itemsSidebar.scss';

function ItemSidebar(): JSX.Element {
  const [rules, setRules] = useState<IRulesSubreddit[]>([]);

  const getAllRules = useCallback(async () => {
    const allRules = await fetchRules();
    setRules(allRules);
  }, []);

  useEffect(() => {
    getAllRules();
  }, [getAllRules]);

  const renderListItem = (): JSX.Element[] =>
    rules.map((el) => (
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
