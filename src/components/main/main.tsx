import React from 'react';
import Articles from '../articles/articles';
import Sidebar from '../sidebar/sidebar';
import './main.scss';

function Main():JSX.Element {
  return (
    <main className="main">
      <div className="wrapper">
        <Articles />
        <Sidebar />
      </div>
    </main>
  );
}

export default Main;
