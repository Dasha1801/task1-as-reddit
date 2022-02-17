import axios from 'axios';
import { baseUrl } from '../../constants';
import { fetchArticles, fetchSavedArticles } from '../../server/api';
import {
  ArticleInfo,
  ILogInUser,
  IRegisterUser,
  IUser,
  IRegisterSocialUser,
  ILogInSocialUser,
} from '../../shared/interfaces';
import { getStateError } from './slices/errorSlice';
import { getStateLoading } from './slices/loadingSlice';
import { showPopover } from './slices/popoverSlice';
import { setSavedArticles } from './slices/savedArticlesSlice';
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

export const logInUser = (res: ILogInUser | ILogInSocialUser, rout: string) =>
  async function getResServer(
    dispatch: (arg0: { payload: { user: IUser } | { show: boolean }; type: string }) => void
  ) {
    axios
      .post(`${baseUrl}api/auth/${rout === 'login' ? 'login' : 'socialLogin'}`, res)
      .then((response) => {
        if (response.data.accessToken) {
          dispatch(addUser({ user: response.data }));
        }
      })
      .finally(() => {
        dispatch(showPopover({ show: true }));
      });
  };

export const signUpUser = (res: IRegisterUser | IRegisterSocialUser) =>
  async function getResServer(
    dispatch: (arg0: { payload: { user: IUser } | { show: boolean }; type: string }) => void
  ) {
    axios
      .post(`${baseUrl}api/auth/signup`, res)
      .then((response) => {
        if (response.data.accessToken) {
          dispatch(
            addUser({ user: { ...response.data.dataValues, accessToken: response.data.accessToken } })
          );
        }
      })
      .finally(() => {
        dispatch(showPopover({ show: true }));
      });
  };

export const getSavedArticles = (accessToken: string) =>
  async function getUserSavedArticles(dispatch: (arg0: { payload: ArticleInfo[]; type: string }) => void) {
    try {
      const resServer = await fetchSavedArticles(accessToken);
      dispatch(setSavedArticles(resServer.data));
    } catch {
      console.log('User unregister!');
    }
  };
