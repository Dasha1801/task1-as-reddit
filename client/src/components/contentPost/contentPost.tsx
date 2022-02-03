import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import FooterArticle from '../footerArticle/footerArticle';
import './contentPost.scss';

function ContentPost(): JSX.Element {
  const { post } = useSelector((state: TStore) => state.comments);
  const { title, selftext, url } = post;

  return (
    <>
      <h1 className="postTitle">{title}</h1>
      <ReactMarkdown className="textContent">{selftext}</ReactMarkdown>
      <a className="linkPost" href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
      <FooterArticle item={post} className="marginStyle" />
    </>
  );
}

export default ContentPost;
