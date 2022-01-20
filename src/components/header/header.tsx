import React from 'react';
import { PATH } from '../../constants';
import './header.scss';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="wrapper">
        <img src={PATH.logo} alt="logo" className="logo" />
        <h1 className="namePage">javascript</h1>
      </div>
    </header>
  );
}
export default Header;
