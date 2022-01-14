import axios from 'axios';
import { PATH } from '../../constants';
import { ArticleInfo, ArticleProps } from '../../shared/interfaces';
import { setArticles } from './slices/articlesSlice';
import { getStateError } from './slices/errorSlice';
import { getStateLoading } from './slices/loadingSlice';

export const fetchArticles = () => async function getArticles(dispatch: (arg0: { payload:
    { articles: ArticleInfo[]; } |
    { error: boolean; } |
    { loading: boolean; }; type: string; }) => void) {
  try {
    const { children } = (await axios.get(PATH.data)).data.data;
    const items = children.map((el:ArticleProps) => el.data);
    dispatch(setArticles({ articles: items }));
  } catch (Error) {
    dispatch(getStateError({ error: true }));
  } finally {
    dispatch(getStateLoading({ loading: false }));
  }
};
