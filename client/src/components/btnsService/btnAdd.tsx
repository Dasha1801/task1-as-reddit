import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSavedServices } from '../redux/asyncActions';
import { saveService } from '../../server/api';
import { IItemServiceMenu } from '../../shared/interfaces';
import './stylesBtn.scss';

function BtnAdd({ info, code, idService }: IItemServiceMenu): JSX.Element {
  const dispatch = useDispatch();
  const handlerClick = async (): Promise<void> => {
    await saveService({ productId: code, servicesName: idService, serviceId: info.id });

    fetchSavedServices()(dispatch);
  };

  return (
    <button type="button" className="btnAddService baseBtn" onClick={handlerClick}>
      Добавить
    </button>
  );
}

export default BtnAdd;
