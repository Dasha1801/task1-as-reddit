import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageNotFound from '../pageNotFound/pageNotFound';
import Header from '../header/header';
import Main from '../main/main';
import PostPage from '../postPage/postPage';
import UserPage from '../userPage/userPage';
import SavedArticlesPage from '../savedArticlesPage/savedArticlesPage';
import './app.scss';

function App(): JSX.Element {
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
      <Header />
      <TransitionGroup>
        <CSSTransition in timeout={1000} classNames="animation" unmountOnExit key={location.key}>
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
