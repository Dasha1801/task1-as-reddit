import axios from 'axios';
import { PATH } from '../../constants';
import { ICommentInfo } from '../../shared/interfaces';
import { mapResponseToComments } from '../../utils';
import { setComments } from './slices/articleSlice';
import { getStateLoading } from './slices/loadingSlice';

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

