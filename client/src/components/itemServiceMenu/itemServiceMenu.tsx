import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import { IItemServiceMenu } from '../../shared/interfaces';
import BtnAdd from '../btnsService/btnAdd';
import BtnDelete from '../btnsService/btnDelete';
import './itemServiceMenu.scss';

function ItemServiceMenu({ info, code, idService }: IItemServiceMenu): JSX.Element {
  const { services } = useSelector((state: TStore) => state.service);
  const isAdd = services.find((el) => el.serviceId === info.id && el.productId === code);

  return (
    <div className={classNames('itemServices', { saveItem: isAdd })} data-testid="serviceMenu">
      <div className="wrapperTitle">
        {isAdd && <img src="images/iconPopover.png" alt="icon" className="popoverIcon" />}
        <h6 className="nameServiceMenu">{info.name}</h6>
      </div>
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

        {isAdd ? <BtnDelete info={info} /> : <BtnAdd info={info} code={code} idService={idService} />}
      </div>
    </div>
  );
}

export default ItemServiceMenu;
