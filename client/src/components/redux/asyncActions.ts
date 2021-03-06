import axios from 'axios';
import { DropResult } from 'react-beautiful-dnd';
import { baseUrl } from '../../constants';
import { fetchArticles, fetchSavedArticles } from '../../server/api';
import {
  ArticleInfo,
  ILogInSocialUser,
  ILogInUser,
  IRegisterSocialUser,
  IRegisterUser,
  IUser,
  IColumns,
} from '../../shared/interfaces';
import { route } from '../../utils';
import { getStateError } from './slices/errorSlice';
import { getStateLoading } from './slices/loadingSlice';
import { showPopover } from './slices/popoverSlice';
import { setSavedArticles } from './slices/savedArticlesSlice';
import { addUser } from './slices/userSlice';
import { updateBoard } from './slices/boardSlice';

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

export const logInUser = (res: ILogInUser | ILogInSocialUser, path: string) =>
  async function getResServer(
    dispatch: (arg0: { payload: { user: IUser } | { show: boolean }; type: string }) => void
  ) {
    axios
      .post(`${baseUrl}api/auth/${path === route.logIn ? route.logIn : route.socialLogin}`, res)
      .then((response) => {
        if (response.data.accessToken) {
          dispatch(addUser({ user: response.data }));
        }
      })
      .finally(() => {
        dispatch(showPopover({ show: true }));
      });
  };

export const updateProfile = (res: IRegisterUser) =>
  async function getUpdateUser(
    dispatch: (arg0: { payload: { user: IUser } | { show: boolean }; type: string }) => void
  ) {
    axios
      .put(`${baseUrl}api/auth/update`, res)
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
      .post(`${baseUrl}api/auth/${route.signUp}`, res)
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

export const onDragEnd = (result: DropResult, columns: IColumns) =>
  async function update(dispatch: (arg0: { payload: IColumns; type: string }) => void) {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      dispatch(
        updateBoard({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        })
      );
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      dispatch(
        updateBoard({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        })
      );
    }
  };
