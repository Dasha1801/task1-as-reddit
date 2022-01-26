import React from 'react';
import { PATH } from '../../constants';
import './headerPost.scss';

function HeaderPost(): JSX.Element {
  return (
    <div className="headerPost">
      <img src={PATH.logo} alt="logo" className="headerItem postLogo" />
      <span className="headerItem subreddit">r/javascript</span>
      <span className="headerItem author">Posted by AUTHOR</span>
    </div>
  );
}

export default HeaderPost;
