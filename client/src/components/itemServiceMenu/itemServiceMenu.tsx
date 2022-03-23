import React from 'react';
import { IItemService } from '../../shared/interfaces';
import './itemServiceMenu.scss';

function ItemServiceMenu({ info }: IItemService): JSX.Element {
  return (
    <div className="itemServices">
      <h6 className="nameServiceMenu">{info.name}</h6>
      <p className="descriptionItem noneMargin">{info.description}</p>
      {info.outsource && (
        <p className="descriptionItem">
          *Стоимость может измениться в зависимости от сложности и дополнительных работ.
        </p>
      )}
      {info.link && (
        <a className="moreInfo" target="_blank" href={info.link} rel="noreferrer">
          Подробнее
        </a>
      )}
      <div className="priceService">
        {info.price}
        {info.outsource ? ' р.*' : ' р.'}
      </div>
    </div>
  );
}

export default ItemServiceMenu;
