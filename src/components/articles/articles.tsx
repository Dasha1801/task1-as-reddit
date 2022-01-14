import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../article/article';
import { TStore } from '../redux';
import { fetchArticles } from '../redux/asyncActions';
import Spinner from '../spinner/spinner';

function Articles():JSX.Element {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: TStore) => state.articles_reducer);
  const { loading } = useSelector((state: TStore) => state.loading_reducer);

  useEffect(() => {
    fetchArticles()(dispatch);
  }, [dispatch]);

  function renderArticles():JSX.Element[] {
    return (articles.map((item) => <Article item={item} key={item.id} />));
  }

  function renderSpinner():JSX.Element | undefined {
    return <Spinner />;
  }

  return (
    <div>
      {loading ? renderSpinner() : null}
      {articles.length ? renderArticles() : null}
    </div>
  );
}
export default Articles;
