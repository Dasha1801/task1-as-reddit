import axios from 'axios';
import { ArticleInfo, IRulesSubreddit, ILimitArticles, IDeleteArticle } from '../shared/interfaces';
import { baseUrl } from '../constants/index';

export const fetchRules = (): Promise<IRulesSubreddit[]> =>
  axios.get(`${baseUrl}rules`).then((res) => res.data);

export const fetchSavedArticles = (): Promise<ArticleInfo[]> =>
  axios.get(`${baseUrl}save`).then((res) => res.data);

export const saveInDbArticle = (res: ArticleInfo): Promise<void> => axios.post(`${baseUrl}save`, res);

export const deleteArticle = (res: IDeleteArticle): Promise<void> => axios.delete(`${baseUrl}save/${res.id}`);

export const fetchArticles = (limit: ILimitArticles): Promise<ArticleInfo[]> =>
  axios.post(`${baseUrl}posts`, limit).then((res) => res.data);
