import React from 'react';
import { IItemService } from '../../shared/interfaces';
import './itemServiceMenu.scss';

function ItemServiceMenu({ info }: IItemService): JSX.Element {
  return (
    <div className="itemServices">
      <h6 className="nameService">{info.name}</h6>
      <p className="descriptionItem">{info.description}</p>
      {info.outsource && (
        <p className="descriptionItem">
          *Стоимость может измениться в зависимости от сложности и дополнительных работ.
        </p>
      )}
      {info.link && <div className="moreInfo">Подробнее</div>}
      <div className="priceService">
        {info.price}
        {info.outsource ? ' р.*' : ' р.'}
      </div>
    </div>
  );
}

export default ItemServiceMenu;
