import axios from 'axios';
import { mapResponseToArticles, mapResponseToComments } from 'utils';
import { PATH } from '../../constants';
import {
  ArticleInfo, ICommentInfo, IRulesSubreddit
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
    const res = await axios.get(`${PATH.data}${count}`);
    dispatch(setArticles({ articles: mapResponseToArticles(res) }));
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
    const res = await axios.get(`${PATH.comments}${id}.json`);
    dispatch(setComments({ comments: mapResponseToComments(res) }));
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

