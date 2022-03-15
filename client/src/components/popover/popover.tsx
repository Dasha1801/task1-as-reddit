import React from 'react';
import { IPopoverBasket } from '../../shared/interfaces';
import './popover.scss';

function Popover({ text }: IPopoverBasket): JSX.Element {
  return (
    <div className="containerPopover">
      <img src="images/iconPopover.png" alt="icon" className="popoverIcon" />
      <span className="popoverText">{text}</span>
    </div>
  );
}

export default Popover;
