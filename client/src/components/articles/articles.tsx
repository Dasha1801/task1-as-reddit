import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStateIfMounted } from 'use-state-if-mounted';
import { initialCount } from '../../constants';
import { ArticleInfo } from '../../shared/interfaces';
import Article from '../article/article';
import { fetchData } from '../redux/asyncActions';

function Articles(): JSX.Element {
  const [countArticles, setCountArticles] = useState(initialCount);
  const [articles, setArticles] = useStateIfMounted<ArticleInfo[]>([]);
  const dispatch = useDispatch();

  const scrollHandler = useCallback(
    (e) => {
      const page = e.target.documentElement;
      if (page.scrollHeight - (page.scrollTop + window.innerHeight) === 0) {
        setCountArticles(countArticles + initialCount);
      }
    },
    [countArticles]
  );

  useEffect(() => {
    fetchData(countArticles, setArticles)(dispatch);
  }, [countArticles, dispatch]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function removeScrollHandler(): void {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  function renderArticles(): JSX.Element[] | null {
    return articles.length ? articles.map((item) => <Article item={item} key={item.id} />) : null;
  }

  return <div data-testid="wrapperArticles">{renderArticles()}</div>;
}
export default Articles;
