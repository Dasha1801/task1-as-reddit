import React from 'react';
import { PATH } from '../../constants';
import './pageNotFound.scss';

function PageNotFound():JSX.Element {
  return (

    <div className="parent">
      <img
        src={PATH.error404}
        alt="error404"
        className="error"
      />
    </div>
  );
}

export default PageNotFound;
