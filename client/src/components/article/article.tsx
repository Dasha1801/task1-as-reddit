import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { InfoItem } from '../../shared/interfaces';
import { removeArticle } from '../redux/slices/savedArticlesSlice';
import ContentArticle from '../contentArticle/contentArticle';
import Likes from '../likes/likes';
import './article.scss';

function Article({ item }: InfoItem): JSX.Element {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { score, url } = item;

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
          onClick={() => dispatch(removeArticle(item))}
        />
      )}
    </article>
  );
}
export default Article;
