import axios from 'axios';
import { baseUrl } from '../../constants';
import { fetchArticles } from '../../server/api';
import { ArticleInfo, ILogInUser, IUser } from '../../shared/interfaces';
import { getStateError } from './slices/errorSlice';
import { getStateLoading } from './slices/loadingSlice';
import { addUser } from './slices/userSlice';

export const fetchData = (count: number, setArticles: React.Dispatch<React.SetStateAction<ArticleInfo[]>>) =>
  async function getArticles(
    dispatch: (arg0: {
      payload: { articles: ArticleInfo[] } | { error: boolean } | { loading: boolean };
      type: string;
    }) => void
  ) {
    dispatch(getStateLoading({ loading: true }));
    fetchArticles({ limit: count })
      .then((res) => setArticles(res))
      .catch(() => dispatch(getStateError({ error: true })))
      .finally(() => {
        dispatch(getStateLoading({ loading: false }));
      });
  };

export const logInUser = (res: ILogInUser) =>
  async function getArticles(dispatch: (arg0: { payload: { user: IUser }; type: string }) => void) {
    axios
      .post(`${baseUrl}api/auth/login`, res)
      .then((response) => {
        if (response.data.accessToken) {
          dispatch(addUser({ user: response.data }));
        }
      })
      .catch((e) => 'User not found');
  };
