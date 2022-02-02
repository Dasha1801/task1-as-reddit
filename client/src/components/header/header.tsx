import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../constants';
import NavPanel from '../navPanel/navPanel';
import './header.scss';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="wrapper">
        <NavLink to="/">
          <img src={PATH.logo} alt="logo" className="logo" />
        </NavLink>
        <h1 className="">javascript</h1>
        <NavPanel />
      </div>
    </header>
  );
}
export default Header;
