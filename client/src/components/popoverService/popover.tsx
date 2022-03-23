import React from 'react';
import { IPopoverBasket } from '../../shared/interfaces';
import './popover.scss';

function PopoverService({ text }: IPopoverBasket): JSX.Element {
  return (
    <div className="containerPopover" data-testid="popover">
      <img src="images/iconPopover.png" alt="icon" className="popoverIcon" />
      <span className="popoverText">{text}</span>
    </div>
  );
}

export default PopoverService;
