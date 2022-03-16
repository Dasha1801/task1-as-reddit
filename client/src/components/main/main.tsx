import React from 'react';
import { useSelector } from 'react-redux';
import Articles from '../articles/articles';
import ButtonScrollTop from '../buttonScrollTop/buttonScrollTop';
import ListProducts from '../listProducts/listProducts';
import PageNotFound from '../pageNotFound/pageNotFound';
import { TStore } from '../redux';
import Sidebar from '../sidebar/sidebar';
import Spinner from '../spinner/spinner';
import './main.scss';

function Main(): JSX.Element {
  const { loading } = useSelector((state: TStore) => state.loading);
  const { error } = useSelector((state: TStore) => state.error);

  return (
    <main className="main" data-testid="main">
      <div className="wrapper">
        {loading && (
          <>
            <Spinner /> <Sidebar />
          </>
        )}
        {!error && (
          <>
            <div>
              <ListProducts /> <Articles />
            </div>
            <Sidebar />
          </>
        )}
        <ButtonScrollTop />
      </div>
      {error && <PageNotFound />}
    </main>
  );
}

export default Main;
