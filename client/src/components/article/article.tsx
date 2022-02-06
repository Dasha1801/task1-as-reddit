import React from 'react';
import classNames from 'classnames';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteArticle, fetchSavedArticles } from '../../server/api';
import { InfoItem } from '../../shared/interfaces';
import ContentArticle from '../contentArticle/contentArticle';
import Likes from '../likes/likes';
import { setSavedArticles } from '../redux/slices/savedArticlesSlice';
import './article.scss';

function Article({ item }: InfoItem): JSX.Element {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { score, url } = item;

  const handlerClick = async (): Promise<void> => {
    await deleteArticle({ id: item.id });
    fetchSavedArticles().then((res) => dispatch(setSavedArticles(res)));
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
          size="30px"
          color="red"
          className="iconLink"
          onClick={handlerClick}
        />
      )}
    </article>
  );
}
export default Article;
