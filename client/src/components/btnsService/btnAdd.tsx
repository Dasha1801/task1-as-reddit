import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSavedServices, hidePopover } from '../redux/asyncActions';
import { saveService } from '../../server/api';
import { sendMessage } from '../../server/socket';
import { IItemServiceMenu } from '../../shared/interfaces';
import { showPopoverService } from '../redux/slices/popoverService';
import './stylesBtn.scss';

function BtnAdd({ info, code, idService }: IItemServiceMenu): JSX.Element {
  const dispatch = useDispatch();

  const handlerClick = async (): Promise<void> => {
    const res = await saveService({
      productId: code,
      servicesName: idService,
      serviceId: info.id,
      category: info.category.name,
    });
    dispatch(showPopoverService({ text: res, isShow: true }));
    fetchSavedServices()(dispatch);
    sendMessage();
    hidePopover();
  };

  return (
    <button type="button" className="btnAddService baseBtn" onClick={handlerClick}>
      Добавить
    </button>
  );
}

export default BtnAdd;
