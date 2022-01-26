import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { item } from '../../shared/mocks';
import Likes from '../likes/likes';
import './footerComment.scss';

function FooterComment(): JSX.Element {
  return (
    <ul className="listItemFooter">
      <Likes score={item.score} className="likesInComment" />
      <li className="replyComment">
        <FaRegCommentAlt className="iconReplay" />
        <span>Reply</span>
      </li>
      <li>Save</li>
    </ul>
  );
}

export default FooterComment;
