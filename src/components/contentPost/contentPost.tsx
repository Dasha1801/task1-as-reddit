import React from 'react';
import ReactMarkdown from 'react-markdown';
import FooterArticle from '../footerArticle/footerArticle';
import { item } from '../../shared/mocks';
import './contentPost.scss';

function ContentPost(): JSX.Element {
  return (
    <>
      <h1 className="postTitle">{item.title}</h1>
      <ReactMarkdown className="textContent">{item.selftext}</ReactMarkdown>
      <a className="linkPost" href={item.url} target="_blank" rel="noreferrer">
        {item.url}
      </a>
      <FooterArticle item={item} className="marginStyle" />
    </>
  );
}

export default ContentPost;
