import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ITextComment } from 'shared/interfaces';
import './contentComment.scss';

function ContentComment({ body }: ITextComment): JSX.Element {
  return <ReactMarkdown className="commentContent">{body}</ReactMarkdown>;
}

export default ContentComment;
