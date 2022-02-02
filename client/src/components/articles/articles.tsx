import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/asyncActions';
import { initialCount } from '../../constants';
import Article from '../article/article';
import { TStore } from '../redux';
import Spinner from '../spinner/spinner';

function Articles(): JSX.Element {
  const dispatch = useDispatch();
  const [countArticles, setCountArticles] = useState(initialCount);
  const { articles } = useSelector((state: TStore) => state.articles);
  const { loading } = useSelector((state: TStore) => state.loading);

  const scrollHandler = useCallback(
    (e) => {
      const page = e.target.documentElement;
      if (page.scrollHeight - (page.scrollTop + window.innerHeight) === 0) {
        setCountArticles(countArticles + 10);
      }
    },
    [countArticles]
  );

  useEffect(() => {
    fetchArticles(countArticles)(dispatch);
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

  return (
    <div>
      {loading && <Spinner />}
      {renderArticles()}
    </div>
  );
}
export default Articles;
