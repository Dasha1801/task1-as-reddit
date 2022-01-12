import React from 'react';
import './likes.scss';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface InfoScore{
  score: number
}

function Likes({ score }:InfoScore):JSX.Element {
  return (
    <div className="likes">
      <FaArrowUp
        size="20px"
        className="iconUp"
      />
      <h6 className="score">{score}</h6>
      <FaArrowDown
        size="20px"
        className="iconDown"
      />
    </div>
  );
}

export default Likes;
