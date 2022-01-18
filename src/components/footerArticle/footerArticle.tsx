import React from 'react';
import { FaRegCommentAlt, FaMedal, FaShare } from 'react-icons/fa';
import { InfoComment } from 'shared/interfaces';
import './footerArticle.scss';

function FooterArticle({ num_comments }: InfoComment): JSX.Element {
  return (
    <footer className="footer">
      <nav className="navFooter">
        <ul className="listLink">
          <li className="link">
            <FaRegCommentAlt className="icon" size="16px" />
            <span className="countComments" data-testid="count-comments">
              {num_comments}
            </span>
            Comments
          </li>
          <li className="link">
            <FaMedal className="icon" size="16px" />
            Award
          </li>
          <li className="link">
            <FaShare className="icon" size="16px" />
            Share
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterArticle;
