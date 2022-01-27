import React from 'react';
import './headerComment.scss';
import { FaUser } from 'react-icons/fa';
import { IAuthorDateComment } from 'shared/interfaces';
import { getTime } from '../../utils';

function HeaderComment({ author, created_utc }: IAuthorDateComment): JSX.Element {
  return (
    <div className="headerComment">
      <FaUser className="iconUser" />
      <span>{author}</span>
      <span className='sendComment'>{getTime(created_utc)}</span>
    </div>
  );
}

export default HeaderComment;
