import { combineReducers } from '@reduxjs/toolkit';
import { articles_reducer } from './slices/articlesSlice';
import { loading_reducer } from './slices/loadingSlice';
import { error_reducer } from './slices/errorSlice';

const rootReducer = combineReducers({
  articles: articles_reducer,
  loading: loading_reducer,
  error: error_reducer,
});

export default rootReducer;
