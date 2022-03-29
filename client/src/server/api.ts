import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../constants/index';
import {
  ArticleInfo,
  IArticleId,
  ICommentInfo,
  ILimitArticles,
  ISavedService,
  IServiceId,
} from '../shared/interfaces';

export const saveServiceInDb = (service: ISavedService): Promise<string> =>
  axios.post(`${baseUrl}service`, service).then((res) => res.data);

export const deleteServiceInDb = (serviceId: IServiceId): Promise<string> =>
  axios.post(`${baseUrl}delete`, serviceId).then((res) => res.data);

export const getSavedServices = (): Promise<ISavedService[]> =>
  axios.get(`${baseUrl}services`).then((res) => res.data);

export const fetchSavedArticles = (token: string): Promise<AxiosResponse> => {
  const options = {
    headers: { 'x-access-token': token },
  };

  return axios.get(`${baseUrl}save`, options);
};

export const saveInDbArticle = (res: ArticleInfo, token: string): Promise<AxiosResponse> => {
  const options = {
    headers: { 'x-access-token': token },
  };

  return axios.post(`${baseUrl}save`, res, options);
};

export const deleteArticle = (res: IArticleId, token: string): Promise<AxiosResponse> => {
  const options = {
    headers: { 'x-access-token': token },
  };

  return axios.delete(`${baseUrl}save/${res.id}`, options);
};

export const fetchArticles = (limit: ILimitArticles): Promise<ArticleInfo[]> =>
  axios.post(`${baseUrl}posts`, limit).then((res) => res.data);

export const fetchComments = (id: IArticleId): Promise<ICommentInfo[]> =>
  axios.post(`${baseUrl}comments`, id).then((res) => res.data);

export const logoutUser = (token: string): Promise<AxiosResponse> => {
  const options = {
    headers: { 'x-access-token': token },
  };

  return axios.put(`${baseUrl}api/auth/logout`, options);
};
