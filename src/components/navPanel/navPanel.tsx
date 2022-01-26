import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import { BsBellFill } from 'react-icons/bs';
import IconSaveItems from '../iconSaveItems/iconSaveItems';
import './navPanel.scss';

function NavPanel(): JSX.Element {
  return (
    <nav className="navPanel">
      <ul className="listItem">
        <li className="iconItem">
          <NavLink to="/saveArticles">
            <IconSaveItems />
          </NavLink>
        </li>
        <li className="iconItem">
          <TiMessages size={24} color="gray" />
        </li>
        <li className="iconItem">
          <BsBellFill size={20} color="gray" />
        </li>
      </ul>
    </nav>
  );
}

export default NavPanel;
