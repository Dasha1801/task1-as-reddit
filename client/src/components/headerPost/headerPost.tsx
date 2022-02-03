import React from 'react';
import { useSelector } from 'react-redux';
import { PATH } from '../../constants';
import { TStore } from '../redux';
import './headerPost.scss';

function HeaderPost(): JSX.Element {
  const { author } = useSelector((state: TStore) => state.comments).post;

  return (
    <div className="headerPost">
      <img src={PATH.logo} alt="logo" className="headerItem postLogo" />
      <span className="headerItem subreddit">r/javascript</span>
      <span className="headerItem author">{`Posted by u/${author}`}</span>
    </div>
  );
}

export default HeaderPost;
