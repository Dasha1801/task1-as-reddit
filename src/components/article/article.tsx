import React from 'react';
import { ArticleInfo } from '../../shared/articleInfo';
import Likes from '../likes/likes';
import './article.scss';

interface InfoItem{
  item: ArticleInfo
}

function Article({ item }:InfoItem):JSX.Element {
  const {
    title, selftext, url, score,
  } = item;
  return (
    <article className="article">
      <Likes score={score} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="selfText">{selftext}</p>
        <a className="url" href={url} target="_blank" rel="noreferrer">
          {url.slice(0, 24)}
          ...
        </a>
      </div>
    </article>
  );
}
export default Article;
