import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStateIfMounted } from 'use-state-if-mounted';
import { initialCount } from '../../constants';
import { fetchArticles } from '../../server/api';
import { ArticleInfo } from '../../shared/interfaces';
import Article from '../article/article';
import { getStateError } from '../redux/slices/errorSlice';
import { getStateLoading } from '../redux/slices/loadingSlice';

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

  const getAllArticles = useCallback(() => {
    fetchArticles({ limit: countArticles })
      .then((res) => setArticles(res))
      .catch(() => dispatch(getStateError({ error: true })))
      .finally(() => {
        dispatch(getStateLoading({ loading: false }));
      });
  }, [countArticles, dispatch]);

  useEffect(() => {
    getAllArticles();
  }, [getAllArticles]);

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
