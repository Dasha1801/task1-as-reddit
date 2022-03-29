import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../server/socket';
import { IItemServiceMenu } from '../../shared/interfaces';
import { hidePopover, saveService } from '../redux/asyncActions';
import { showPopoverService } from '../redux/slices/popoverService';
import { changeStatusUpdate } from '../redux/slices/serviceSlice';
import './stylesBtn.scss';

function BtnAdd({ info, code, idService }: IItemServiceMenu): JSX.Element {
  const dispatch = useDispatch();

  const handlerClick = async (): Promise<void> => {
    try {
      await saveService(info, idService, code)(dispatch);
      dispatch(changeStatusUpdate(true));
      sendMessage();
    } catch {
      dispatch(showPopoverService({ text: 'Что-то пошло не так, попробуйте еще раз', isShow: true }));
    } finally {
      hidePopover();
    }
  };

  return (
    <button type="button" className="btnAddService baseBtn" onClick={handlerClick}>
      Добавить
    </button>
  );
}

export default BtnAdd;
