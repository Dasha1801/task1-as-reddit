import React from 'react';
import { useSelector } from 'react-redux';
import PageNotFound from 'components/pageNotFound/pageNotFound';
import Articles from '../articles/articles';
import Sidebar from '../sidebar/sidebar';
import { TStore } from '../redux';
import './main.scss';

function Main():JSX.Element {
  const { loading } = useSelector((state: TStore) => state.loading_reducer);
  const { error } = useSelector((state: TStore) => state.error_reducer);
  return (
    <main className="main">
      <div className="wrapper">
        <Articles />
        {!(loading || error) ? <Sidebar /> : null}
      </div>
      {error ? <PageNotFound /> : null}
    </main>
  );
}

export default Main;
