import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from 'components/redux';
import NewComment from '../newComment/newComment';
import SortComments from '../sortComments/sortComments';
import Comment from '../comment/comment';
import './comments.scss';

function Comments(): JSX.Element {
  const { comments } = useSelector((state: TStore) => state.comments);

  function renderComments(): JSX.Element[] | null {
    return comments.length ? comments.map((item) => <Comment item={item} />) : null;
  }

  return (
    <div className="wrapperComments" data-testid="wrapperComments">
      <NewComment />
      <SortComments />
      {renderComments()}
    </div>
  );
}

export default Comments;
