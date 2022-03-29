import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../server/socket';
import { IItemServiceMenu } from '../../shared/interfaces';
import { getKopecks, getRubles, isChecked, throttle } from '../../utils';
import { TStore } from '../redux';
import { deleteService, hidePopover, saveService } from '../redux/asyncActions';
import { showPopoverService } from '../redux/slices/popoverService';
import { changeStatusUpdate } from '../redux/slices/serviceSlice';
import './itemService.scss';

function ItemService({ info, code, idService }: IItemServiceMenu): JSX.Element {
  const dispatch = useDispatch();
  const { name, description, price, link, id } = info;
  const { services } = useSelector((state: TStore) => state.service);
  const isAdd = useMemo(() => isChecked(services, id, idService), [services, id, idService]);
  const [checked, setChecked] = useState(isAdd);

  const handlerOnChange = useCallback(async (): Promise<void> => {
    try {
      if (isAdd) {
        await deleteService(id)(dispatch);
        setChecked(false);
      } else {
        await saveService(info, idService, code)(dispatch);
        setChecked(true);
      }
      dispatch(changeStatusUpdate(false));
      sendMessage();
    } catch {
      dispatch(showPopoverService({ text: 'Что-то пошло не так, попробуйте еще раз', isShow: true }));
      setChecked(isAdd);
    } finally {
      hidePopover();
    }
  }, [isAdd, code, dispatch, idService, id, info]);

  const handlerDelay = useMemo(() => throttle(handlerOnChange, 3000), [handlerOnChange]);

  return (
    <div className="wrapperItem" data-testid="service">
      <div className="itemService">
        <label className="serviceLabel">
          {name}
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              handlerDelay();
            }}
          />
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
