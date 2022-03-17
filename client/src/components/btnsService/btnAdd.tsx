import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSavedServices } from '../redux/asyncActions';
import { showPopoverService, hidePopoverService } from '../redux/slices/popoverService';
import { saveService } from '../../server/api';
import { IItemServiceMenu } from '../../shared/interfaces';
import { timeout } from '../../constants';
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
    setTimeout(() => {
      dispatch(hidePopoverService());
    }, timeout * 2);
  };

  return (
    <button type="button" className="btnAddService baseBtn" onClick={handlerClick}>
      Добавить
    </button>
  );
}

export default BtnAdd;
