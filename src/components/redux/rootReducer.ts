import { combineReducers } from '@reduxjs/toolkit';
import { articles_reducer } from './slices/articlesSlice';
import { loading_reducer } from './slices/loadingSlice';
import { error_reducer } from './slices/errorSlice';
import { comments_reducer } from './slices/commentsSlice';
import { savedArticles_reducer } from './slices/savedArticlesSlice';
import { rulesSubreddit_reducer } from './slices/rulesSubredditSlice';
import { sort_reducer } from './slices/sortSlice';

const rootReducer = combineReducers({
  articles: articles_reducer,
  loading: loading_reducer,
  error: error_reducer,
  savedArticles: savedArticles_reducer,
  comments: comments_reducer,
  rulesSubreddit: rulesSubreddit_reducer,
  sortType: sort_reducer
});

export default rootReducer;
