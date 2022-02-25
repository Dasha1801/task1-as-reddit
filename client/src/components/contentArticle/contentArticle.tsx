import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchComments } from '../../server/api';
import { InfoItem } from '../../shared/interfaces';
import FooterArticle from '../footerArticle/footerArticle';
import { getArticle, setComments } from '../redux/slices/articleSlice';
import './contentArticle.scss';

function ContentArticle({ item }: InfoItem): JSX.Element {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { title, selftext, url, id } = item;

  const handlerClick = async (): Promise<void> => {
    navigate('/postPage');
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
      <div className="linkToPostPage" data-testid="linkToPost" onClick={handlerClick}>
        <h3 className="title" data-testid="titleArticle">
          {title}
        </h3>
        <ReactMarkdown className="selfText">{selftext}</ReactMarkdown>
      </div>

      {renderLink()}
      <FooterArticle item={item} />
    </div>
  );
}

export default ContentArticle;
