import React from 'react';
import { IComment } from 'shared/interfaces';
import ContentComment from 'components/contentComment/contentComment';
import HeaderComment from '../headerComment/headerComment';
import FooterComment from '../footerComment/footerComment';
import './comment.scss';

function Comment({ item }: IComment): JSX.Element {
  const { author, body, score, created_utc } = item;

  return (
    <div className="comment">
      <HeaderComment author={author} created_utc={created_utc} />
      <div className="wrapperContent">
        <ContentComment body={body} />
        <FooterComment score={score} />
      </div>
    </div>
  );
}

export default Comment;
