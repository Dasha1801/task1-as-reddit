import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import Article from '../article/article';
import './savedArticlesPage.scss';

function SavedArticlesPage(): JSX.Element {
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  function renderSaveArticles(): JSX.Element[] | JSX.Element {
    return savedArticles.length
      ? savedArticles.map((item) => <Article item={item} key={item.id} />)
      : <div className="message">No saved articles!</div>;
  }
  return <div className="wrapper">{renderSaveArticles()}</div>;
}

export default SavedArticlesPage;
