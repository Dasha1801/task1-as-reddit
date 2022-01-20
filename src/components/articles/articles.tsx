import { fetchArticles } from 'components/redux/asyncActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../article/article';
import { TStore } from '../redux';
import Spinner from '../spinner/spinner';

function Articles(): JSX.Element {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: TStore) => state.articles_reducer);
  const { loading } = useSelector((state: TStore) => state.loading_reducer);

  useEffect(() => {
    fetchArticles()(dispatch);
  }, [dispatch]);

  function renderArticles(): JSX.Element[] | null {
    return articles.length
      ? articles.map((item) => <Article item={item} key={item.id} />)
      : null;
  }

  return (
    <div>
      {loading && <Spinner />}
      {renderArticles()}
    </div>
  );
}
export default Articles;
