import axios from 'axios';
import { setArticles } from 'components/redux/articlesSlice';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PATH } from '../../constants';
import { ArticleProps } from '../../shared/interfaces';
import Article from '../article/article';
import { TStore } from '../redux';

function Articles():JSX.Element {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: TStore) => state.articles_reducer);
  const [error, setError] = useState('');

  const getArticles = useCallback(async () => {
    try {
      const { children } = (await axios.get(PATH.data)).data.data;
      const items = children.map((el:ArticleProps) => el.data);
      dispatch(setArticles({ articles: items }));
    } catch (Error) {
      setError('Oops! Page not found!');
    }
  }, [dispatch]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div>
      {articles.length
        ? (articles.map((item) => <Article item={item} key={item.id} />))
        : error}

    </div>
  );
}
export default Articles;
