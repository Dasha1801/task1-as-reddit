import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../article/article';
import { ArticleInfo } from '../../shared/articleInfo';

 interface ArticleProps {
    kind: string,
    data: ArticleInfo
}

function Articles():JSX.Element {
  const [articles, setArticles] = useState<ArticleInfo[]>([]);
  const [error, setError] = useState('');
  const path = 'https://www.reddit.com/r/javascript.json?limit=8';

  async function getArticles() :Promise<void> {
    try {
      const { children } = (await axios.get(path)).data.data;
      const items = children.map((el:ArticleProps) => el.data);
      setArticles(items);
    } catch (Error) {
      setError('Oops! Page not found!');
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      {articles.length
        ? (articles.map((item) => <Article item={item} key={item.id} />))
        : error}

    </div>
  );
}
export default Articles;
