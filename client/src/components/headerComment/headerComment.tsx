import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IAuthorDateComment } from '../../shared/interfaces';
import { getTime } from '../../utils';
import './headerComment.scss';

function HeaderComment({ author, created_utc }: IAuthorDateComment): JSX.Element {
  return (
    <div className="headerComment">
      <FaUser className="iconUser" data-testid="iconUser" size="30px" />
      <span>{author}</span>
      <span className="sendComment">{getTime(created_utc)}</span>
    </div>
  );
}

export default HeaderComment;
