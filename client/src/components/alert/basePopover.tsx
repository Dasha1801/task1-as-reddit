import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { IPopover } from '../../shared/interfaces';
import { showPopoverAuth } from '../redux/slices/popoverAuth';
import './alert.scss';

function BasePopover({ ...props }: IPopover): JSX.Element {
  const dispatch = useDispatch();
  const { text, variant, className } = props;

  return (
    <Alert
      variant={variant}
      onClose={() => dispatch(showPopoverAuth({ show: false }))}
      dismissible
      className={`alert ${className}`}
    >
      <p className="text">{text}</p>
    </Alert>
  );
}

export default BasePopover;
