import React from 'react';
import { ArticleInfo } from '../../shared/articleInfo';

interface InfoItem{
  item: ArticleInfo
}

function Article({ item }:InfoItem):JSX.Element {
  const {
    title, selftext, url, score,
  } = item;
  return (
    <div>
      <h3>{title}</h3>
      <p>{selftext}</p>
      <h5>{url}</h5>
      <h5>{score}</h5>
    </div>
  );
}
export default Article;
