import React from 'react';
import ReactMarkdown from 'react-markdown';
import FooterArticle from '../footerArticle/footerArticle';
import { InfoItem } from '../../shared/interfaces';
import './contentArticle.scss';

function ContentArticle({ item }: InfoItem): JSX.Element {
  const {
    title, selftext, url,
  } = item;

  const renderLink = (): JSX.Element | null => {
    if (selftext.length) {
      return null;
    }
    return (
      <a
        className="url"
        href={url}
        target="_blank"
        rel="noreferrer"
        data-testid="link"
      >
        {url}
      </a>
    );
  };

  return (
    <div className="content">
      <h3 className="title">{title}</h3>
      <ReactMarkdown className="selfText">{selftext}</ReactMarkdown>
      {renderLink()}
      <FooterArticle item={item} />
    </div>
  );
}

export default ContentArticle;
