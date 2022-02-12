import React, { useCallback } from 'react';
import classNames from 'classnames';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteArticle, fetchSavedArticles } from '../../server/api';
import { InfoItem } from '../../shared/interfaces';
import { TStore } from '../redux';
import ContentArticle from '../contentArticle/contentArticle';
import Likes from '../likes/likes';
import { setSavedArticles } from '../redux/slices/savedArticlesSlice';
import './article.scss';

function Article({ item }: InfoItem): JSX.Element {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state: TStore) => state.user).user;
  const path = useLocation().pathname;
  const { score, url } = item;

  const getSavedArticles = useCallback(async () => {
    const resServer = await fetchSavedArticles(accessToken);
    dispatch(setSavedArticles(resServer.data));
  }, [dispatch]);

  const handlerClick = async (): Promise<void> => {
    await deleteArticle({ id: item.id }, accessToken);
    getSavedArticles();
  };

  return (
    <article
      data-testid="article"
      className={classNames('article', {
        saveArticle: path !== '/',
      })}
    >
      <Likes score={score} />
      <ContentArticle item={item} />
      {path === '/' ? (
        <a className="iconLink" href={url} target="_blank" rel="noreferrer" data-testid="link-article">
          <FaExternalLinkAlt size="20px" />
        </a>
      ) : (
        <TiDelete
          data-testid="iconDelete"
          size="45px"
          color="red"
          className="iconLink"
          onClick={handlerClick}
        />
      )}
    </article>
  );
}
export default Article;
