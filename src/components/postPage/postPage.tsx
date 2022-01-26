import ButtonScrollTop from 'components/buttonScrollTop/buttonScrollTop';
import Likes from 'components/likes/likes';
import Sidebar from 'components/sidebar/sidebar';
import React from 'react';
import Post from '../post/post';
import Comments from '../comments/comments';
import { item } from '../../shared/mocks';
import './postPage.scss';

function PostPage(): JSX.Element {
  // const getComments = (): void => {
  //   axios
  //     .get('https://www.reddit.com/r/javascript/comments/sblil2.json')
  //     .then((res) => console.log(res.data[1].data.children));
  // };

  return (
    <main className="main">
      <div className="wrapper">
        <div className="container">
          <div className="postWrapper">
            <Likes score={item.score} className="bgLikes" />
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
