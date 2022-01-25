import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import Main from '../main/main';
import PostPage from '../postPage/postPage';
import SavedArticlesPage from '../savedArticlesPage/savedArticlesPage';

function App(): JSX.Element {
  return (
    <div data-testid="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saveArticles" element={<SavedArticlesPage />} />
        <Route path="/postPage" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
