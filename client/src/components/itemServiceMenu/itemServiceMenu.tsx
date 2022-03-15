import React from 'react';
import { useSelector } from 'react-redux';
import BtnAdd from '../btnsService/btnAdd';
import { IItemService } from '../../shared/interfaces';
import { TStore } from '../redux';
import './itemServiceMenu.scss';

function ItemServiceMenu({ info }: IItemService): JSX.Element {
  const { user } = useSelector((state: TStore) => state.user);

  return (
    <div className="itemServices">
      <h6 className="nameServiceMenu">{info.name}</h6>
      <p className="descriptionItem noneMargin">{info.description}</p>
      {info.outsource && (
        <p className="descriptionItem">
          <span className="star">*</span>Стоимость может измениться в зависимости от сложности и
          дополнительных работ.
        </p>
      )}
      {info.link && (
        <a className="moreInfo" target="_blank" href={info.link} rel="noreferrer">
          Подробнее
        </a>
      )}
      <div className="priceService">
        {info.price}
        {' p.'}
        {info.outsource && <span className="star">*</span>}
        {user.name && <BtnAdd />}
      </div>
    </div>
  );
}

export default ItemServiceMenu;
