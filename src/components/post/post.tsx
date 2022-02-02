import React from 'react';
import ContentPost from '../contentPost/contentPost';
import HeaderPost from '../headerPost/headerPost';

function Post(): JSX.Element {
  return (
    <div className="post" data-testid="post">
      <HeaderPost />
      <ContentPost />
    </div>
  );
}

export default Post;
