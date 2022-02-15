import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { IPopover } from '../../shared/interfaces';
import { showPopover } from '../redux/slices/popoverSlice';
import './alert.scss';

function BasePopover({ ...props }: IPopover): JSX.Element {
  const dispatch = useDispatch();
  const { text, variant, className } = props;

  return (
    <Alert
      variant={variant}
      onClose={() => dispatch(showPopover({ show: false }))}
      dismissible
      className={`alert ${className}`}
    >
      <p className="text">{text}</p>
    </Alert>
  );
}

export default BasePopover;
