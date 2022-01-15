import React from 'react';
import FooterArticle from '../footerArticle/footerArticle';
import { InfoItem } from '../../shared/interfaces';
import './contentArticle.scss';

function ContentArticle({ item }: InfoItem): JSX.Element {
  const {
    title, selftext, url, num_comments,
  } = item;

  return (
    <div className="content">
      <h3 className="title">{title}</h3>
      <p className="selfText">{selftext}</p>
      <a
        className="url"
        href={url}
        target="_blank"
        rel="noreferrer"
        data-testid="link"
      >
        {url.slice(0, 24)}
        ...
      </a>
      <FooterArticle num_comments={num_comments} />
    </div>
  );
}

export default ContentArticle;
