import { articles_reducer } from './slices/articlesSlice';
import { loading_reducer } from './slices/loadingSlice';
import { error_reducer } from './slices/errorSlice';

const reducer = {
  articles_reducer,
  loading_reducer,
  error_reducer,
};

export default reducer;
