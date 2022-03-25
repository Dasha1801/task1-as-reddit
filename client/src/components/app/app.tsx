import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { timeout } from '../../constants';
import BasePopover from '../alert/basePopover';
import Header from '../header/header';
import Main from '../main/main';
import PageNotFound from '../pageNotFound/pageNotFound';
import PostPage from '../postPage/postPage';
import { TStore } from '../redux';
import SavedArticlesPage from '../savedArticlesPage/savedArticlesPage';
import UserPage from '../userPage/userPage';
import './app.scss';

function App(): JSX.Element {
  const { user } = useSelector((state: TStore) => state.user);
  const { show } = useSelector((state: TStore) => state.popoverAuth);
  const location = useLocation();
  const routes = [
    { path: '/', element: <Main /> },
    { path: '/saveArticles', element: <SavedArticlesPage /> },
    { path: '/postPage', element: <PostPage /> },
    { path: '/user', element: <UserPage /> },
    { path: '*', element: <PageNotFound /> },
  ];

  return (
    <div data-testid="app">
      {user.name && show && (
        <BasePopover variant="success" text="Successfully completed" className="successful" />
      )}
      <Header />
      <TransitionGroup>
        <CSSTransition in timeout={timeout} classNames="animation" unmountOnExit key={location.key}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route path={path} element={element} key={path} />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
