import { TStore } from 'components/redux';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Comment from '../comment/comment';
import NewComment from '../newComment/newComment';
import SortComments from '../sortComments/sortComments';
import './comments.scss';

function Comments(): JSX.Element {
  const { comments } = useSelector((state: TStore) => state.comments);

  const renderComments = useCallback(
    (): JSX.Element[] | null =>
      comments.length ? comments.map((item) => <Comment item={item} key={item.id} />) : null,
    [comments]
  );

  return (
    <div className="wrapperComments" data-testid="wrapperComments">
      <NewComment />
      <SortComments />
      <div className="allComments">{renderComments()}</div>
    </div>
  );
}

export default Comments;
