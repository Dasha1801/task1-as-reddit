import axios from 'axios';
import { mapResponseToComments } from '../../utils';
import { PATH } from '../../constants';
import { ICommentInfo, IRulesSubreddit } from '../../shared/interfaces';
import { setComments } from './slices/commentsSlice';
import { getStateLoading } from './slices/loadingSlice';
import { setRulesSubreddit } from './slices/rulesSubredditSlice';

export const fetchComments = (id: string) =>
  async function getComments(
    dispatch: (arg0: { payload: { comments: ICommentInfo[] } | { loading: boolean }; type: string }) => void
  ) {
    try {
      const res = await axios.get(`${PATH.comments}${id}.json`);
      dispatch(setComments({ comments: mapResponseToComments(res) }));
    } finally {
      dispatch(getStateLoading({ loading: false }));
    }
  };

export const fetchRulesSubreddit = () =>
  async function getRules(
    dispatch: (arg0: {
      payload: { rulesSubreddit: IRulesSubreddit[] } | { loading: boolean };
      type: string;
    }) => void
  ) {
    try {
      const { rules } = (await axios.get(PATH.rulesSubreddit)).data;
      dispatch(setRulesSubreddit({ rulesSubreddit: rules }));
    } finally {
      dispatch(getStateLoading({ loading: false }));
    }
  };
