import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteService, saveService } from '../../server/api';
import { sendMessage } from '../../server/socket';
import { IItemServiceBasket } from '../../shared/interfaces';
import { getKopecks, getRubles } from '../../utils';
import { hidePopover, throttle } from '../redux/asyncActions';
import { showPopoverService } from '../redux/slices/popoverService';
import './itemService.scss';

function ItemService({ info, isChecked, code, idService }: IItemServiceBasket): JSX.Element {
  const { name, description, price, link } = info;
  const dispatch = useDispatch();

  const handlerClick = useCallback(async (): Promise<void> => {
    if (!isChecked) {
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
    sendMessage();
    hidePopover();
  }, [isChecked, code, dispatch, idService, info.category.name, info.id]);

  const handlerDelay = useMemo(() => throttle(handlerClick, 3000), [handlerClick]);

  return (
    <div className="wrapperItem" data-testid="service">
      <div className="itemService">
        <label className="nameService" data-testid="label">
          {name}
          <input type="checkbox" className="checkbox" onChange={() => handlerDelay()} checked={isChecked} />
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
