import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TStore } from '../redux';
import Article from '../article/article';
import './savedArticlesPage.scss';

function SavedArticlesPage(): JSX.Element {
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  function renderSaveArticles(): JSX.Element[] | JSX.Element {
    return savedArticles.length ? (
      savedArticles.map((item) => (
        <CSSTransition key={item.id} timeout={500} classNames="animation">
          <Article item={item} key={item.id} />
        </CSSTransition>
      ))
    ) : (
      <CSSTransition timeout={500} classNames="animation">
        <div className="message">No saved articles!</div>
      </CSSTransition>
    );
  }

  return (
    <main className="savedArticlesPage">
      <TransitionGroup className="wrapper">{renderSaveArticles()}</TransitionGroup>
    </main>
  );
}

export default SavedArticlesPage;
