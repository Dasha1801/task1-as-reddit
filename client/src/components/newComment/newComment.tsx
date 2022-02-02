import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import './newComment.scss';

function NewComment(): JSX.Element {
  return (
    <div className="newComment">
      <div className="authorComment">
        Comment as
        <span className="name">Dasha1801</span>
      </div>
      <MDEditor value="" />
      <button className="btnSubmit" type="submit" disabled>
        Comment
      </button>
    </div>
  );
}

export default NewComment;
