import MDEditor from '@uiw/react-md-editor';
import ButtonScrollTop from 'components/buttonScrollTop/buttonScrollTop';
import FooterArticle from 'components/footerArticle/footerArticle';
import Likes from 'components/likes/likes';
import Sidebar from 'components/sidebar/sidebar';
import React from 'react';
import {
  FaArrowDown,
  FaArrowUp,
  FaRegCommentAlt,
  FaUser,
} from 'react-icons/fa';
import { PATH } from '../../constants';
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
        <div className="postWrapper">
          <Likes score={item.score} />
          <div className="post">
            <div className="headerPost">
              <img
                src={PATH.logo}
                alt="logo"
                className="headerPostItem postLogo"
              />
              <span className="headerPostItem subreddit">r/javascript</span>
              <span className="headerPostItem author">Posted by AUTHOR</span>
            </div>
            <h1 className="postTitle">{item.title}</h1>
            <p className="textContent">{item.selftext}</p>
            <a
              className="postUrl"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.url}
            </a>
            <FooterArticle item={item} />
            <div className="newComment">
              <MDEditor />
            </div>
            <div className="wrapperComment">
              <div className="headerPost commentContainer">
                <FaUser className="iconUser" />
                <span className="headerPostItem author">Ustice</span>
              </div>
              <p className="commentContent">
                Theres two separate questions here. TypeScript - it has massive
                benefits for work-oriented coding, but I dont personally enjoy
                having to do battle every day with weird type definitions others
                have created in the code bases I have to work with.
              </p>
              <ul className="listItemFooter">
                <li className="scoreComment">
                  <FaArrowUp size="18px" color="gray" />
                  <h6>{item.score}</h6>
                  <FaArrowDown size="18px" color="gray" />
                </li>
                <li className="scoreComment">
                  <FaRegCommentAlt
                    size="18px"
                    color="gray"
                    style={{ marginRight: '5px' }}
                  />
                  <span>Reply</span>
                </li>
                <li>Share</li>
                <li>Report</li>
                <li>Save</li>
              </ul>
            </div>

            <div className="wrapperComment">
              <div className="headerPost commentContainer">
                <FaUser className="iconUser" />
                <span className="headerPostItem author">Ustice</span>
              </div>
              <p className="textContent">
                Theres two separate questions here. TypeScript - it has massive
                benefits for work-oriented coding, but I dont personally enjoy
                having to do battle every day with weird type definitions others
                have created in the code bases I have to work with.
              </p>
              <ul className="listItemFooter">
                <li className="scoreComment">
                  <FaArrowUp size="18px" color="gray" />
                  <h6>{item.score}</h6>
                  <FaArrowDown size="18px" color="gray" />
                </li>
                <li className="scoreComment">
                  <FaRegCommentAlt
                    size="18px"
                    color="gray"
                    style={{ marginRight: '5px' }}
                  />
                  <span>Reply</span>
                </li>
                <li>Share</li>
                <li>Report</li>
                <li>Save</li>
              </ul>
            </div>

            <div className="wrapperComment">
              <div className="headerPost commentContainer">
                <FaUser className="iconUser" />
                <span className="headerPostItem author">Ustice</span>
              </div>
              <p className="textContent">
                Theres two separate questions here. TypeScript - it has massive
                benefits for work-oriented coding, but I dont personally enjoy
                having to do battle every day with weird type definitions others
                have created in the code bases I have to work with.
              </p>
              <ul className="listItemFooter">
                <li className="scoreComment">
                  <FaArrowUp size="18px" color="gray" />
                  <h6>{item.score}</h6>
                  <FaArrowDown size="18px" color="gray" />
                </li>
                <li className="scoreComment">
                  <FaRegCommentAlt
                    size="18px"
                    color="gray"
                    style={{ marginRight: '5px' }}
                  />
                  <span>Reply</span>
                </li>
                <li>Share</li>
                <li>Report</li>
                <li>Save</li>
              </ul>
            </div>
          </div>
        </div>
        <Sidebar />
        <ButtonScrollTop />
      </div>
    </main>
  );
}

export default PostPage;
