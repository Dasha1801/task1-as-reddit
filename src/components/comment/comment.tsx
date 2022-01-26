import ContentComment from 'components/contentComment/contentComment';
import React from 'react';
import HeaderComment from '../headerComment/headerComment';
import FooterComment from '../footerComment/footerComment';
import './comment.scss';

function Comment(): JSX.Element {
  return (
    <div className="comment">
      <HeaderComment />
      <div className="wrapperContent">
        <ContentComment />
        <FooterComment />
      </div>
    </div>
  );
}

export default Comment;
