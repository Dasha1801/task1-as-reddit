import classNames from 'classnames';
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { ILikes } from '../../shared/interfaces';
import './likes.scss';

function Likes({ score, className }: ILikes): JSX.Element {
  const [countState, setCountState] = useState(0);

  const handlerClickArrow = (n: number): void => (!countState ? setCountState(n) : setCountState(0));

  const colorArrowUp = classNames('iconUp', {
    likesIncrease: countState > 0,
  });

  const colorArrowDown = classNames('iconDown', {
    likesDecrease: countState < 0,
  });

  const colorScore = classNames('score', {
    likesDecrease: countState < 0,
    likesIncrease: countState > 0,
  });

  return (
    <div className={classNames('likes', className)}>
      <FaArrowUp
        size="20px"
        className={colorArrowUp}
        onClick={() => handlerClickArrow(1)}
        data-testid="inc"
      />
      <h6 className={colorScore} data-testid="display-score">
        {countState + score}
      </h6>
      <FaArrowDown
        size="20px"
        className={colorArrowDown}
        onClick={() => handlerClickArrow(-1)}
        data-testid="dec"
      />
    </div>
  );
}

export default Likes;
