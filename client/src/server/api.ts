import axios from 'axios';
import { baseUrl } from '../constants/index';
import {
  ArticleInfo,
  IArticleId,
  ICity,
  ICommentInfo,
  ILimitArticles,
  IRulesSubreddit,
} from '../shared/interfaces';

export const fetchRules = (): Promise<IRulesSubreddit[]> =>
  axios.get(`${baseUrl}rules`).then((res) => res.data);

export const fetchSavedArticles = (): Promise<ArticleInfo[]> =>
  axios.get(`${baseUrl}save`).then((res) => res.data);

export const saveInDbArticle = (res: ArticleInfo): Promise<void> => axios.post(`${baseUrl}save`, res);

export const deleteArticle = (res: IArticleId): Promise<void> => axios.delete(`${baseUrl}save/${res.id}`);

export const fetchArticles = (limit: ILimitArticles): Promise<ArticleInfo[]> =>
  axios.post(`${baseUrl}posts`, limit).then((res) => res.data);

export const fetchComments = (id: IArticleId): Promise<ICommentInfo[]> =>
  axios.post(`${baseUrl}comments`, id).then((res) => res.data);

export const searchCity = async (name: ICity): Promise<boolean> =>
  (await axios.post(`${baseUrl}search/${name.city}`)).data.isCity;
