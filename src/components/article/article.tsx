import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { InfoItem } from '../../shared/interfaces';
import ContentArticle from '../contentArticle/contentArticle';
import Likes from '../likes/likes';
import './article.scss';

function Article({ item }:InfoItem):JSX.Element {
  const {
    score, url,
  } = item;
  return (
    <article className="article">
      <Likes score={score} />
      <ContentArticle item={item} />
      <a className="iconLink" href={url} target="_blank" rel="noreferrer">
        <FaExternalLinkAlt size="20px" />
      </a>

    </article>
  );
}
export default Article;
