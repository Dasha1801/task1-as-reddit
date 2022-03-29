import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../server/socket';
import { IItemService } from '../../shared/interfaces';
import { deleteService, hidePopover } from '../redux/asyncActions';
import { showPopoverService } from '../redux/slices/popoverService';
import { changeStatusUpdate } from '../redux/slices/serviceSlice';
import './stylesBtn.scss';

function BtnDelete({ info }: IItemService): JSX.Element {
  const dispatch = useDispatch();

  const handlerClick = async (): Promise<void> => {
    try {
      await deleteService(info.id)(dispatch);
      dispatch(changeStatusUpdate(true));
      sendMessage();
    } catch {
      dispatch(showPopoverService({ text: 'Что-то пошло не так, попробуйте еще раз', isShow: true }));
    } finally {
      hidePopover();
    }
  };

  return (
    <div className="btnDeleteService baseBtn" onClick={handlerClick} data-testid="iconBasket">
      <svg width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9695 3.24107V2.02021H7.45079V3.24107H4.9695ZM3.6695
           3.24107V1.87021C3.6695 1.23509 4.18437 0.720215 4.8195 0.720215H7.60079C8.23592
            0.720215 8.75079 1.23509 8.75079 1.87021V3.24107H11.0418C11.4008
             3.24107 11.6918 3.53208 11.6918 3.89107C11.6918 4.25005 11.4008
              4.54107 11.0418 4.54107H10.4314V11.1301C10.4314 12.3175 9.46877
               13.2801 8.28136 13.2801L3.71878 13.2801C2.53136 13.2801 1.56878
                12.3175 1.56878 11.1301V4.54107H0.95835C0.599365 4.54107 0.30835
                 4.25005 0.30835 3.89107C0.30835 3.53208 0.599365 3.24107 0.95835
                  3.24107H2.21878H3.6695ZM2.86878 11.1301V4.54107H9.13136V11.1301C9.13136
                   11.5996 8.7508 11.9801 8.28136 11.9801L3.71878 11.9801C3.24934 11.9801
                    2.86878 11.5995 2.86878 11.1301Z"
        />
      </svg>
    </div>
  );
}

export default BtnDelete;
