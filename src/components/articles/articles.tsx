import axios from 'axios';
import { setArticles } from 'components/redux/slices/articlesSlice';
import { getStateError } from 'components/redux/slices/errorSlice';
import { getStateLoading } from 'components/redux/slices/loadingSlice';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PATH } from '../../constants';
import { ArticleProps } from '../../shared/interfaces';
import Article from '../article/article';
import { TStore } from '../redux';
import Spinner from '../spinner/spinner';

function Articles():JSX.Element {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: TStore) => state.articles_reducer);
  const { loading } = useSelector((state: TStore) => state.loading_reducer);

  const getArticles = useCallback(async () => {
    try {
      const { children } = (await axios.get(PATH.data)).data.data;
      const items = children.map((el:ArticleProps) => el.data);
      dispatch(setArticles({ articles: items }));
    } catch (Error) {
      dispatch(getStateError({ error: true }));
    } finally {
      dispatch(getStateLoading({ loading: false }));
    }
  }, [dispatch]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

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
