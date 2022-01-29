import axios from 'axios';
import { PATH } from '../../constants';
import {
  ArticleInfo,
  ArticleProps,
  ICommentInfo,
  ICommentProps,
  IRulesSubreddit
} from '../../shared/interfaces';
import { setArticles } from './slices/articlesSlice';
import { setComments } from './slices/commentsSlice';
import { getStateError } from './slices/errorSlice';
import { getStateLoading } from './slices/loadingSlice';
import { setRulesSubreddit } from './slices/rulesSubredditSlice';

export const fetchArticles = (count: number) => async function getArticles(dispatch: (arg0: {
  payload:
  { articles: ArticleInfo[]; } |
  { error: boolean; } |
  { loading: boolean; }; type: string;
}) => void) {
  try {
    const { children } = (await axios.get(`${PATH.data}${count}`)).data.data;
    const items = children.map((el: ArticleProps) => el.data);
    dispatch(setArticles({ articles: items }));
  } catch (Error) {
    dispatch(getStateError({ error: true }));
  } finally {
    dispatch(getStateLoading({ loading: false }));
  }
};

export const fetchComments = (id: string) => async function getComments(dispatch: (arg0: {
  payload:
  { comments: ICommentInfo[]; } |
  { loading: boolean; }; type: string;
}) => void) {
  try {
    const { children } = (await axios.get(`${PATH.comments}${id}.json`)).data[1].data;
    const items = children.map((el: ICommentProps) => el.data);
    dispatch(setComments({ comments: items }));
  } finally {
    dispatch(getStateLoading({ loading: false }));
  }
};

export const fetchRulesSubreddit = () => async function getRules(dispatch: (arg0: {
  payload:
  { rulesSubreddit: IRulesSubreddit[]; } |
  { loading: boolean; }; type: string;
}) => void) {
  try {
    const { rules } = (await axios.get(PATH.rulesSubreddit)).data;
    dispatch(setRulesSubreddit({ rulesSubreddit: rules }));
  } finally {
    dispatch(getStateLoading({ loading: false }));
  }
};

