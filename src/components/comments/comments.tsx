import React from 'react';
import NewComment from '../newComment/newComment';
import SortComments from '../sortComments/sortComments';
import Comment from '../comment/comment';
import './comments.scss';

function Comments(): JSX.Element {
  return (
    <div className="wrapperComments">
      <NewComment />
      <SortComments />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
