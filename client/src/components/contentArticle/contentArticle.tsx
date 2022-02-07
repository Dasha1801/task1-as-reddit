import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { InfoItem } from '../../shared/interfaces';
import FooterArticle from '../footerArticle/footerArticle';
import { fetchComments } from '../../server/api';
import { getArticle, setComments } from '../redux/slices/articleSlice';
import './contentArticle.scss';

function ContentArticle({ item }: InfoItem): JSX.Element {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { title, selftext, url, id } = item;

  const handlerClick = async (): Promise<void> => {
    await fetchComments({ id }).then((res) => dispatch(setComments({ comments: res })));
    dispatch(getArticle({ article: item }));
  };

  const renderLink = (): JSX.Element | null => {
    if (selftext.length) {
      return null;
    }

    return (
      <a className="linkPost" href={url} target="_blank" rel="noreferrer" data-testid="link">
        {url}
      </a>
    );
  };

  return (
    <div
      className={classNames('content', {
        contentSaveArticles: path !== '/',
      })}
    >
      <NavLink to="/postPage" className="linkToPostPage" onClick={handlerClick} data-testid="linkToPost">
        <h3 className="title" data-testid="titleArticle">
          {title}
        </h3>
        <ReactMarkdown className="selfText">{selftext}</ReactMarkdown>
      </NavLink>

      {renderLink()}
      <FooterArticle item={item} />
    </div>
  );
}

export default ContentArticle;
