import React from 'react';
import { IComment } from '../../shared/interfaces';
import ContentComment from '../contentComment/contentComment';
import HeaderComment from '../headerComment/headerComment';
import FooterComment from '../footerComment/footerComment';
import './commentItem.scss';

function CommentItem({ item }: IComment): JSX.Element {
  const { author, body, score, created_utc, id } = item;

  return (
    <div className="comment" key={id}>
      <HeaderComment author={author} created_utc={created_utc} />
      <div className="wrapperContent">
        <ContentComment body={body} />
        <FooterComment score={score} />
      </div>
    </div>
  );
}

export default CommentItem;
