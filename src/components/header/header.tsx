import React from 'react';
import { PATH } from '../../constants';
import './header.scss';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="wrapper">
        <img src={PATH.logo} alt="logo" className="logo" data-testid="img" />
        <h1 className="namePage" data-testid="title-header">
          javascript
        </h1>
      </div>
    </header>
  );
}
export default Header;
