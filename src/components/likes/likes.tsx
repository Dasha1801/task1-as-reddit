import React, { useState } from 'react';
import './likes.scss';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface InfoScore{
  score: number
}

function Likes({ score }:InfoScore):JSX.Element {
  const [countLike, setCountLike] = useState(score);
  const [colorArrowUp, setColorArrowUp] = useState('#898989');
  const [colorArrowDown, setColorArrowDown] = useState('#898989');
  const [colorCount, setColorCount] = useState('#000000');

  const handlerArrowUp = ():void => {
    if (score === countLike) {
      setCountLike(countLike + 1);
      setColorArrowUp('#1c51e2');
      setColorCount('#1c51e2');
    } else if (countLike > score) {
      setCountLike(countLike - 1);
      setColorArrowUp('#898989');
      setColorCount('#000000');
    } else if (score + 1 === countLike) {
      setCountLike(score);
      setColorArrowUp('#898989');
      setColorCount('#000000');
    } else if (countLike === score - 1) {
      setCountLike(score + 1);
      setColorArrowUp('#1c51e2');
      setColorCount('#1c51e2');
      setColorArrowDown('#898989');
    }
  };

  const handlerArrowDown = ():void => {
    if (score === countLike) {
      setCountLike(countLike - 1);
      setColorArrowDown('#e75e28');
      setColorCount('#e75e28');
    } else if (countLike < score) {
      setCountLike(countLike + 1);
      setColorArrowDown('#898989');
      setColorCount('#000000');
    } else if (score - 1 === countLike) {
      setCountLike(score);
      setColorArrowDown('#898989');
      setColorCount('#000000');
    } else if (countLike === score + 1) {
      setCountLike(score - 1);
      setColorArrowDown('#e75e28');
      setColorCount('#e75e28');
      setColorArrowUp('#898989');
    }
  };

  return (
    <div className="likes">
      <FaArrowUp
        size="20px"
        className="iconUp"
        onClick={handlerArrowUp}
        color={colorArrowUp}
      />
      <h6 className="score" style={{ color: `${colorCount}` }}>{countLike}</h6>
      <FaArrowDown
        size="20px"
        className="iconDown"
        onClick={handlerArrowDown}
        color={colorArrowDown}
      />
    </div>
  );
}

export default Likes;
