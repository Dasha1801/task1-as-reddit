import React from 'react';
import './header.scss';

function Header():JSX.Element {
  return (
    <header className="header">
      <div className="wrapper">
        <img
          src="https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png"
          alt="logo"
          className="logo"
        />
        <h1 className="namePage">javascript</h1>
      </div>
    </header>
  );
}
export default Header;
