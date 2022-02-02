import React from 'react';
import { getPost } from 'components/redux/slices/commentsSlice';
import { useLocation, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { fetchComments } from 'components/redux/asyncActions';
import FooterArticle from '../footerArticle/footerArticle';
import { InfoItem } from '../../shared/interfaces';
import './contentArticle.scss';

function ContentArticle({ item }: InfoItem): JSX.Element {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { title, selftext, url, id } = item;

  const handlerClick = (): void => {
    dispatch(getPost({ post: item }));
    fetchComments(id)(dispatch);
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
        <h3 className="title">{title}</h3>
        <ReactMarkdown className="selfText">{selftext}</ReactMarkdown>
      </NavLink>

      {renderLink()}
      <FooterArticle item={item} />
    </div>
  );
}

export default ContentArticle;