import React from 'react';
import ReactMarkdown from 'react-markdown';
import './contentComment.scss';

function ContentComment(): JSX.Element {
  return (
    <ReactMarkdown className="commentContent">
      Theres two separate questions here. TypeScript - it has massive benefits
      for work-oriented coding, but I dont personally enjoy having to do battle
      every day with weird type definitions others have created in the code
      bases I have to work with.
    </ReactMarkdown>
  );
}

export default ContentComment;
