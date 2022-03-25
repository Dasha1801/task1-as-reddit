import { combineReducers } from '@reduxjs/toolkit';
import { article_reducer } from './slices/articleSlice';
import { board_reducer } from './slices/boardSlice';
import { error_reducer } from './slices/errorSlice';
import { loading_reducer } from './slices/loadingSlice';
import { popoverAuth_reducer } from './slices/popoverAuth';
import { savedArticles_reducer } from './slices/savedArticlesSlice';
import { sort_reducer } from './slices/sortSlice';
import { user_reducer } from './slices/userSlice';
import { service_reducer } from './slices/serviceSlice';
import { popoverService_reducer } from './slices/popoverService';

const rootReducer = combineReducers({
  loading: loading_reducer,
  error: error_reducer,
  savedArticles: savedArticles_reducer,
  article: article_reducer,
  sortType: sort_reducer,
  user: user_reducer,
  popoverAuth: popoverAuth_reducer,
  popoverService: popoverService_reducer,
  board: board_reducer,
  service: service_reducer,
});

export default rootReducer;
