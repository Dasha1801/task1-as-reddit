import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialCount } from '../../constants';
import { fetchArticles } from '../../server/api';
import { ArticleInfo } from '../../shared/interfaces';
import Article from '../article/article';
import { TStore } from '../redux';
import { getStateLoading } from '../redux/slices/loadingSlice';
import Spinner from '../spinner/spinner';

function Articles(): JSX.Element {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: TStore) => state.loading);
  const [countArticles, setCountArticles] = useState(initialCount);
  const [articles, setArticles] = useState<ArticleInfo[]>([]);

  const scrollHandler = useCallback(
    (e) => {
      const page = e.target.documentElement;
      if (page.scrollHeight - (page.scrollTop + window.innerHeight) === 0) {
        setCountArticles(countArticles + initialCount);
      }
    },
    [countArticles]
  );

  const getAllArticles = useCallback(async () => {
    const allArticles = await fetchArticles({ limit: countArticles });
    setArticles(allArticles);
    dispatch(getStateLoading({ loading: false }));
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

  return (
    <div>
      {loading && <Spinner />}
      {renderArticles()}
    </div>
  );
}
export default Articles;
