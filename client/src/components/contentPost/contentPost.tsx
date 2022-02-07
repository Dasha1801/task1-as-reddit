import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import FooterArticle from '../footerArticle/footerArticle';
import './contentPost.scss';

function ContentPost(): JSX.Element {
  const { article } = useSelector((state: TStore) => state.article);
  const { title, selftext, url } = article;

  return (
    <>
      <h1 className="postTitle">{title}</h1>
      <ReactMarkdown className="textContent">{selftext}</ReactMarkdown>
      <a className="linkPost" href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
      <FooterArticle item={article} className="marginStyle" />
    </>
  );
}

export default ContentPost;
