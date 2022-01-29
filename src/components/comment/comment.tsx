import React from 'react';
import { IComment } from 'shared/interfaces';
import CommentItem from '../commentItem/commentItem';
import './comment.scss';

function Comment({ item }: IComment): JSX.Element {
  const renderComment = ({ item: comment }: IComment): JSX.Element | null => {
    const nestedComments = comment.replies?.data?.children
      ? comment.replies?.data.children.map((nestedItem) => renderComment({ item: nestedItem.data }))
      : null;

    return (
      <div className="comments" data-testid="wrapperComment">
        <CommentItem item={comment} key={comment.id} />
        {nestedComments}
      </div>
    );
  };

  return <>{renderComment({ item })}</>;
}

export default Comment;
