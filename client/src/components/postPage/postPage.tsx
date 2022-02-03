import React from 'react';
import { useSelector } from 'react-redux';
import ButtonScrollTop from '../buttonScrollTop/buttonScrollTop';
import Likes from '../likes/likes';
import Sidebar from '../sidebar/sidebar';
import Comments from '../comments/comments';
import Post from '../post/post';
import { TStore } from '../redux';
import './postPage.scss';

function PostPage(): JSX.Element {
  const { score } = useSelector((state: TStore) => state.comments).post;

  return (
    <main className="main">
      <div className="wrapper">
        <div className="container">
          <div className="postWrapper">
            <Likes score={score} className="bgLikes" />
            <Post />
          </div>
          <Comments />
        </div>
        <Sidebar />
        <ButtonScrollTop />
      </div>
    </main>
  );
}

export default PostPage;
