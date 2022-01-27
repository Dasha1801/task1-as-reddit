import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { ILikesComment } from 'shared/interfaces';
import Likes from '../likes/likes';
import './footerComment.scss';

function FooterComment({ score }: ILikesComment): JSX.Element {
  return (
    <ul className="listItemFooter">
      <Likes score={score} className="likesInComment" />
      <li className="replyComment">
        <FaRegCommentAlt className="iconReplay" />
        <span>Reply</span>
      </li>
      <li>Save</li>
    </ul>
  );
}

export default FooterComment;
