import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../constants/index';
import {
  ArticleInfo,
  IArticleId,
  ICity,
  ICommentInfo,
  ILimitArticles,
  IRegisterUser,
  IRulesSubreddit,
} from '../shared/interfaces';

export const fetchRules = (): Promise<IRulesSubreddit[]> =>
  axios.get(`${baseUrl}rules`).then((res) => res.data);

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

export const searchCity = async (name: ICity): Promise<boolean> =>
  (await axios.post(`${baseUrl}search/${name.city}`)).data.isCity;

export const registerUser = (res: IRegisterUser): Promise<void> =>
  axios.post(`${baseUrl}api/auth/signup`, res);
