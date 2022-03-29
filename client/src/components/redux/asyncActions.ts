import axios from 'axios';
import { DropResult } from 'react-beautiful-dnd';
import { baseUrl, timeout } from '../../constants';
import {
  deleteServiceInDb,
  fetchArticles,
  fetchSavedArticles,
  getSavedServices,
  saveServiceInDb,
} from '../../server/api';
import {
  ArticleInfo,
  IColumns,
  IItemServices,
  ILogInSocialUser,
  ILogInUser,
  IPopoverService,
  IRegisterSocialUser,
  IRegisterUser,
  ISavedService,
  IUser,
} from '../../shared/interfaces';
import { route } from '../../utils';
import { store } from './index';
import { updateBoard } from './slices/boardSlice';
import { getStateError } from './slices/errorSlice';
import { getStateLoading } from './slices/loadingSlice';
import { showPopoverAuth } from './slices/popoverAuth';
import { hidePopoverService, showPopoverService } from './slices/popoverService';
import { setSavedArticles } from './slices/savedArticlesSlice';
import { getServices } from './slices/serviceSlice';
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

export const logInUser = (res: ILogInUser | ILogInSocialUser, path: string) =>
  async function getResServer(
    dispatch: (arg0: { payload: { user: IUser } | { show: boolean }; type: string }) => void
  ) {
    axios
      .post(`${baseUrl}api/auth/${path === route.logIn ? route.logIn : route.socialLogin}`, res)
      .then((response) => {
        if (response.data.accessToken) dispatch(addUser({ user: response.data }));
      })
      .finally(() => dispatch(showPopoverAuth({ show: true })));
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
        dispatch(showPopoverAuth({ show: true }));
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
        dispatch(showPopoverAuth({ show: true }));
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

export const hidePopover = (): void => {
  setTimeout(() => {
    store.dispatch(hidePopoverService());
  }, timeout);
};

export const fetchSavedServices = () =>
  async function getSaveServices(dispatch: (arg0: { payload: ISavedService[]; type: string }) => void) {
    const savedServices = await getSavedServices();
    dispatch(getServices(savedServices));
  };

export const deleteService = (id: string) =>
  async function remove(dispatch: (arg0: { payload: IPopoverService; type: string }) => void) {
    const res = await deleteServiceInDb({ serviceId: id });
    dispatch(showPopoverService({ text: res, isShow: true }));
  };

export const saveService = (info: IItemServices, idService: string, servicesCode: string) =>
  async function save(dispatch: (arg0: { payload: IPopoverService; type: string }) => void) {
    const res = await saveServiceInDb({
      productId: servicesCode,
      servicesName: idService,
      serviceId: info.id,
      category: info.category.name,
    });
    dispatch(showPopoverService({ text: res, isShow: true }));
  };
