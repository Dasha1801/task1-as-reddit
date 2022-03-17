import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteService, saveService } from '../../server/api';
import { showPopoverService, hidePopoverService } from '../redux/slices/popoverService';
import { fetchSavedServices } from '../redux/asyncActions';
import { timeout } from '../../constants';
import { getKopecks, getRubles } from '../../utils';
import { IItemServiceMenu } from '../../shared/interfaces';
import './itemService.scss';

function ItemService({ info, checked, code, idService }: IItemServiceMenu): JSX.Element {
  const { name, description, price, link } = info;
  const dispatch = useDispatch();

  const handlerClick = async (): Promise<void> => {
    if (!checked) {
      const res = await saveService({
        productId: code,
        servicesName: idService,
        serviceId: info.id,
        category: info.category.name,
      });
      dispatch(showPopoverService({ text: res, isShow: true }));
    } else {
      const res = await deleteService({ serviceId: info.id });
      dispatch(showPopoverService({ text: res, isShow: true }));
    }

    fetchSavedServices()(dispatch);
    setTimeout(() => {
      dispatch(hidePopoverService());
    }, timeout * 2);
  };

  return (
    <div className="wrapperItem">
      <div className="itemService">
        <label className="nameService" onChange={handlerClick}>
          {name}
          <input type="checkbox" className="checkbox" defaultChecked={checked} />
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
