import React from 'react';
import { getKopecks, getRubles } from '../../utils';
import { IItemService } from '../../shared/interfaces';
import './itemService.scss';

function ItemService({ info }: IItemService): JSX.Element {
  const { name, description, price, link } = info;

  return (
    <div className="wrapperItem">
      <div className="itemService">
        <label className="nameService">
          {name}
          <input type="checkbox" className="checkbox" />
          <span className="checkMark" />
        </label>
        <div className="priceService">
          {getRubles(price)},<span className="serviceKopecks">{getKopecks(price)} р.</span>
        </div>
      </div>
      <p className="descriptionService">{description}</p>
      {link && (
        <a className="moreInfo" target="_blank" href={link} rel="noreferrer">
          Подробнее
        </a>
      )}
    </div>
  );
}

export default ItemService;
