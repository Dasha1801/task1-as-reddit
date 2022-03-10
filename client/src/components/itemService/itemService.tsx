import React from 'react';
import { getKopecks, getRubles } from 'utils';
import { IItemService } from '../../shared/interfaces';
import './itemService.scss';

function ItemService({ info }: IItemService): JSX.Element {
  const { name, description, price } = info;

  return (
    <div className="wrapperItem">
      <div className="itemService">
        <input type="checkbox" className="checkbox" />
        <h5 className="nameService">{name}</h5>
        <div className="priceService">
          {getRubles(price)},<span className="serviceKopecks">{getKopecks(price)} р.</span>
        </div>
      </div>
      <p className="descriptionService">{description}</p>
      <div className="moreInfo">Подробнее</div>
    </div>
  );
}

export default ItemService;
