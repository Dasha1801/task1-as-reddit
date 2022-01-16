import React from 'react';
import { useSelector } from 'react-redux';
import PageNotFound from 'components/pageNotFound/pageNotFound';
import Articles from '../articles/articles';
import Sidebar from '../sidebar/sidebar';
import { TStore } from '../redux';
import './main.scss';

function Main(): JSX.Element {
  const { loading } = useSelector((state: TStore) => state.loading_reducer);
  const { error } = useSelector((state: TStore) => state.error_reducer);
  return (
    <main className="main" data-testid="main">
      <div className="wrapper" data-testid="sidebar">
        <Articles />
        {!(loading || error) ? <Sidebar /> : null}
      </div>
      {error ? <PageNotFound data-testid="pageNotFound" /> : null}
    </main>
  );
}

export default Main;
