import React from 'react';
import './headerComment.scss';
import { FaUser } from 'react-icons/fa';

function HeaderComment(): JSX.Element {
  return (
    <div className="headerComment">
      <FaUser className="iconUser" />
      <span>Ustice</span>
    </div>
  );
}

export default HeaderComment;
