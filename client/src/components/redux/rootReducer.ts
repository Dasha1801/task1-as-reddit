import { combineReducers } from '@reduxjs/toolkit';
import { article_reducer } from './slices/articleSlice';
import { board_reducer } from './slices/boardSlice';
import { error_reducer } from './slices/errorSlice';
import { loading_reducer } from './slices/loadingSlice';
import { popover_reducer } from './slices/popoverSlice';
import { savedArticles_reducer } from './slices/savedArticlesSlice';
import { sort_reducer } from './slices/sortSlice';
import { user_reducer } from './slices/userSlice';

const rootReducer = combineReducers({
  loading: loading_reducer,
  error: error_reducer,
  savedArticles: savedArticles_reducer,
  article: article_reducer,
  sortType: sort_reducer,
  user: user_reducer,
  popover: popover_reducer,
  board: board_reducer,
});

export default rootReducer;
