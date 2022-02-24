import React, { useState } from 'react';
import classNames from 'classnames';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import { IPropsItemRule } from '../../shared/interfaces';
import { timeout } from '../../constants';
import './rules.scss';

function Rule({ item }: IPropsItemRule): JSX.Element {
  const [show, setShow] = useState(false);
  const showDescription = (): void => setShow(!show);

  return (
    <li className="itemList" data-testid="rule">
      <div className="headerRule" onClick={showDescription}>
        <h4 className="itemName">{item.title}</h4>
        <MdOutlineKeyboardArrowDown
          className={classNames('arrowOptions', { rotate: show })}
          data-testid="arrowInfo"
        />
      </div>
      <CSSTransition in={show} timeout={timeout} classNames="animation-item" unmountOnExit appear>
        <p className="description" data-testid="description">
          {item.description}
        </p>
      </CSSTransition>
    </li>
  );
}

export default Rule;
